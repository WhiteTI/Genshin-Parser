const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path')

async function scrapeInfiniteScrollItems(page, scrollDelay = 1000, maxItems = 200) {
    let items;

    try {
        await page.evaluate(async () => {
            await new Promise((resolve, reject) => {
                let totalHeight = 0;
                const distance = 100;
                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });

        items = await page.evaluate(() => {
            const elements = document.querySelectorAll('div[name="weapon List"] a');
            return Array.from(elements).map(link => link.href);
        });

    } catch (error) {
        console.error('Ошибка при скроллинге:', error.message);
    }

    return items;
}


async function parseWeapons() {
    const browser = await puppeteer.launch({
        headless: false, 
        defaultViewport: null, 
        args: ['--start-maximized']
    });

    const page = await browser.newPage();

    await page.goto('https://gi.yatta.moe/en/archive/weapon');

    await page.waitForSelector('div[name="Modal"]');

    await page.click('div[name="Modal"] div[name="Button"]');

    await page.waitForSelector('div[name="Archive List"]');

    let weaponsLinks = await scrapeInfiniteScrollItems(page)

    const weaponsData = [];
    
    for(const link of weaponsLinks) {
        await page.goto(link);

        await page.waitForSelector('div[name="Column 1"]', {visible: true});

        const weaponData = await page.evaluate(() => {
            const data = {};

            const nameElem = document.querySelector('h1')

            // if(nameElem) {
                const name = nameElem.innerText;
                data['name'] = name;
            // }

            const rarity = document.querySelector('div[name="Header"] .mt-auto').querySelectorAll('span').length
            const img = document.querySelector('div[name="Header"] .absolute > img').src

            const weaponInfo = document.querySelectorAll('div[name="Header"] .font-whitney')

            const weaponType = weaponInfo[0].innerText
            const atk = weaponInfo[1].querySelectorAll('div')[1].innerText

            if (weaponInfo[2]) {
                const mainStat = [weaponInfo[2].querySelectorAll('div')[0].innerText, weaponInfo[2].querySelectorAll('div')[1].innerText]
                data['mainStat'] = mainStat;

                let text = document.querySelector('div[name="Main"] .text-amberBlack').innerText;
                data['description'] = [text]
            }
            
            data['rarity'] = rarity.toString();
            data['image'] = img;
            data['weaponType'] = weaponType;
            data['atk'] = atk;

            return data;
        });

        if(weaponData.description) {
            await page.select('select', '4')

            let desc = await page.evaluate(() => {
                let text = document.querySelector('div[name="Main"] .text-amberBlack').innerText;
                return text
            })

            weaponData.description.push(desc)
        }

        weaponsData.push(weaponData)
    }

    await browser.close();

    try {
        await fs.writeFile('weapons.txt', JSON.stringify(weaponsData, null, 2));
        await fs.writeFile('weapons2.json', JSON.stringify(weaponsData, null, 2));
    } catch (error) {
        console.error('Ошибка при записи в файл:', error);
    }
}

parseWeapons()