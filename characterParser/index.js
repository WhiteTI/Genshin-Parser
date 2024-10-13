const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

async function parseCharacters() {
    const browser = await puppeteer.launch({
        headless: false, 
        defaultViewport: null, 
        args: ['--start-maximized']
    });

    const page = await browser.newPage();

    await page.goto('https://gi.yatta.moe/en/archive/avatar');

    await page.waitForSelector('div[name="Modal"]');

    await page.click('div[name="Modal"] div[name="Button"]');
    
    await page.waitForSelector('div[name="avatar List"]');

    const characterLinks = await page.$$eval(
        'div[name="avatar List"] a', 
        links => links.map(link => link.href)
    );

    let charactersData = [];
    let errors = []
    
    for(const link of characterLinks.reverse()) {
        try {
            await page.goto(link, {waitUntil: 'networkidle2'});
        } catch (error) {
            console.log(`Не удалось перейти по ссылке ⛔: ${link} - Ошибка: ${error.message}` );
            errors.push({link, error: 'Не удалось перейти по ссылке', message: error.message})
        }

        await page.waitForSelector('div[name="Avatar Info"]',  {visible: true});

        await page.waitForFunction(() => {
            const element = document.querySelector('h1');
            return element && getComputedStyle(element).display !== 'none';
        });

        let characterData;

        try {
            characterData = await page.evaluate(async () => {
                const data = {};
                let level = [];
    
                const nameElem = document.querySelector('h1');
                const range = document.querySelector('div[name="Basic Info"] input');
                
                if(nameElem) {
                    const name = nameElem.innerText;
                    data['name'] = name;
                }
    
                const title = document.querySelector('div[name="Avatar Name"] h2').innerText;
                const rarity = document.querySelector('div[name="Avatar Name"] .mt-auto').querySelectorAll('span').length;
                const bgImage = document.querySelector('div[name="Avatar Info"] div').style.background;
    
    
                const clickEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
    
                let tableBtn = document.querySelector('.duration-400.flex.flex-shrink-0.cursor-pointer.flex-row.items-center.gap-2.rounded-l-md.rounded-r-2xl.bg-amberDark-300.px-2');
    
                tableBtn.dispatchEvent(clickEvent);
    
                await new Promise(resolve => setTimeout(resolve, 500))
    
                let table = document.querySelector('div[name="Modal"] table')
    
                level.push({
                    level: table.querySelector('tr').querySelectorAll('td')[0].innerText,
                    health: table.querySelector('tr').querySelectorAll('td')[1].innerText,
                    attack: table.querySelector('tr').querySelectorAll('td')[2].innerText,
                    defense: table.querySelector('tr').querySelectorAll('td')[3].innerText,
                    additionalStat: [table.querySelectorAll('tbody td')[4].innerText, table.querySelector('tr').querySelectorAll('td')[4].innerText]
                });
    
                const clickEvent2 = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                
                let close = document.querySelector('div[name="Modal"] div[name="Button"]');
    
                close.dispatchEvent(clickEvent2);
    
                let lvl = document.querySelector('div[name="Basic Info"] .flex.w-20.flex-shrink-0.justify-center.rounded-md.bg-amberDark-300.text-xl.text-amberHalfWhite')
                let stats = document.querySelector('div[name="Stats"] table').querySelectorAll('td')
    
                for (let i = 0; i <= 6; i++) {
                    range.value = i;
                    range.dispatchEvent(new Event('input', { bubbles: true }));
                    range.dispatchEvent(new Event('change', { bubbles: true }));
                    
                    await new Promise(resolve => setTimeout(resolve, 500))
    
                    level.push({
                        level: lvl.innerText,
                        health: stats[1].innerText,
                        attack: stats[3].innerText,
                        defense: stats[5].innerText,
                        additionalStat: [stats[6].innerText, stats[7].innerText]
                    })
                }
    
                data['title'] = title;
                data['rarity'] = rarity;
                data['bgImage'] = bgImage;
                data['level'] = level;
    
                return data;
            });

            console.log(`${characterData.name}: base complete ✅`);
        } catch (error) {
            console.log(`Ошибка при парсинге страницы профиль ⛔ - ${error.message}` );
            errors.push({link, error: 'Ошибка при парсинге страницы профиль', message: error.message})
        }
       
        await page.click('a#talent');

        try {
            characterData.skill = await page.evaluate(async () => {
                const arr = [];
    
                let skills = document.querySelectorAll('h2 ~ .grid.gap-4')[0].querySelectorAll('div[name="Avatar Skill"]');
    
                for (let i = 0; i <= skills.length - 1; i++) {
                    const skill = skills[i];
    
                    const image = skill.querySelector('img').src;
                    const name = skill.querySelector('.mr-auto.font-whitney').innerText;
                    const description = skill.querySelector('div[name="Colored Div"]').innerText;
                    const skillStats = [];
    
                    if (description.includes('Alternate Sprint')) {
                        arr.push({name, image, description, skillStats});
                        continue;
                    }
    
                    const input = skill.querySelector('input');
    
                    for (let k = 1; k <= 15; k++) {
                        input.value = k;
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                        
                        await new Promise(resolve => setTimeout(resolve, 500));
    
                        const level = k;
                        let statsElem = skill.querySelector('input ~ div > div').querySelectorAll('.flex.flex-row.gap-1.bg-amberDark-600');
    
                        let value = Array.from(statsElem).map(stat => stat.innerText.replace('\n', ':'));
    
                        skillStats.push({level, value});
                    }
    
    
                    arr.push({name, image, description, skillStats});
                }
    
                return arr;
            })
    
            console.log(`${characterData.name}: skill complete ✅`);
        } catch (error) {
            console.log(`Ошибка при получении навыков персонажа ⛔: ${characterData.name} - Ошибка: ${error.message}` );
            errors.push({link, name: characterData.name, error: 'Ошибка при получении навыков персонажа', message: error.message})
        }

        try {
            characterData.passiveSkill = await page.evaluate(() => {
                const arr = [];
    
                let skills = document.querySelectorAll('h2 ~ .grid.gap-4')[1].querySelectorAll('div[name="Avatar Skill"]')
    
                for (let i = 0; i <= skills.length - 1; i++) {
                    const skill = skills[i];
    
                    const image = skill.querySelector('img').src;
                    const name = skill.querySelector('.mr-auto.font-whitney').innerText;
                    const description = skill.querySelector('div[name="Colored Div"]').innerText;
    
                    arr.push({name, image, description});
                }
    
                return arr;
            })
            console.log(`${characterData.name}: passive skill complete ✅`);
        } catch (error) {
            console.log(`Ошибка при получении пассивных навыков персонажа ⛔: ${characterData.name} - Ошибка: ${error.message}` );
            errors.push({link, name: characterData.name, error: 'Ошибка при получении пассивных навыков персонажа', message: error.message})
        }

        await page.click('a#constellation')
        
        await page.waitForSelector('div[name="Main Column"] h2',  {visible: true});

        try {
            characterData.constellation = await page.evaluate(async () => {
            
                const arr = [];
    
                let skills = document.querySelectorAll('div[name="Avatar Skill"]');
    
                for (let i = 0; i <= skills.length - 1; i++) {
                    const skill = skills[i];
    
                    const image = skill.querySelector('img').src;
                    const name = skill.querySelector('.mr-auto.font-whitney').innerText;
                    const description = skill.querySelector('div[name="Colored Div"]').innerText;
    
                    arr.push({name, image, description});
                }
    
                return arr;
            })
    
            console.log(`${characterData.name}: constellation complete ✅`);
        } catch (error) {
            console.log(`Ошибка при получении созвездий персонажа ⛔: ${characterData.name} - Ошибка: ${error.message}` );
            errors.push({link, name: characterData.name, error: 'Ошибка при получении созвездий персонажа', message: error.message})
        }
        
        charactersData.push(characterData)

        console.log(`${characterData.name}: full complete ✅`);
    }

    console.log(`ambr.top complete ✅`);

    const page2 = await browser.newPage()

    await page2.setRequestInterception(true);
    page2.on('request', request => {
        const url = request.url();
        const resourceType = request.resourceType();
        const blockedScripts = [
            'https://script.wikia.nocookie.net/fandom-ae-assets/platforms/v149.44.0/ucp-desktop/main.bundle.js',
        ];

        if (resourceType === 'script' && blockedScripts.some(pattern => url.includes(pattern))) {
            request.abort();
        } else {
            request.continue();
        }
    });

    for (let character of charactersData) {
        if(character.name === 'Traveler') continue;

        try {
            await page2.goto(`https://genshin-impact.fandom.com/wiki/${character.name.replace(' ', '_')}`)
        } catch (error) {
            console.log(`Не удалось перейти по ссылке ⛔ на персонажа: ${character.name} - Ошибка: ${error.message}` );
            errors.push({name: character.name, error: 'Не удалось перейти по ссылке ⛔ на персонажа', message: error.message})
        }
        
        await page2.waitForSelector('main.page__main');

        console.log(`${character.name}: wiki start`);

        try {
            character.weaponType = await page2.evaluate(() => {
                let element = document.querySelectorAll('aside section')
                return element[0].querySelectorAll('td')[1].innerText;
            })
            console.log(`${character.name}: weapon type complete ✅`);
        } catch (error) {
            console.log(`Ошибка при получении оружия персонажа ⛔: ${character.name} - Ошибка: ${error.message}` );
            errors.push({name: character.name, error: 'Ошибка при получении оружия персонажа', message: error.message})
        }

        try {
            character.region = await page2.evaluate(() => {
                let element = document.querySelector('div[data-source="region"] a').innerText;
                return element
            })
            console.log(`${character.name}: region complete ✅`);
        } catch (error) {
            console.log(`Ошибка при получении региона персонажа ⛔: ${character.name} - Ошибка: ${error.message}` );
            errors.push({name: character.name, error: 'Ошибка при получении региона персонажа', message: error.message})
        }

        try {
            character.element = await page2.evaluate(() => {
                let element = document.querySelectorAll('aside section')

                if(element[0].querySelectorAll('td') === 3) {
                    return element[0].querySelectorAll('td a')[3].innerText;
                }

                return element[1].querySelector('td a+a').innerText;
            })
            console.log(`${character.name}: element complete ✅`);
        } catch (error) {
            console.log(`Ошибка при получении элемента персонажа ⛔: ${character.name} - Ошибка: ${error.message}` );
            errors.push({name: character.name, error: 'Ошибка при получении элемента персонажа', message: error.message})
        }

        try {
            character.description = await page2.evaluate(() => {
                let text = document.querySelector('.mw-parser-output').querySelectorAll('p')
                return text[2].textContent + text[3].textContent;
            })
            console.log(`${character.name}: description complete ✅`);
        } catch (error) {
            console.log(`Ошибка при получении описания персонажа ⛔: ${character.name} - Ошибка: ${error.message}` );
            errors.push({name: character.name, error: 'Ошибка при получении описания персонажа', message: error.message})
        }        

        try {
            let link = await page2.evaluate(() => {
                let link = document.querySelector('.mw-parser-output div').querySelectorAll('span a');
                link = link[link.length - 1].href;
                return link
            })
    
            await page2.goto(link)
    
            await page2.waitForSelector('#gallery-0');
    
            character.image = await page2.evaluate(() => {
                let element = document.querySelector('#gallery-0').querySelectorAll('img')
                return element[0].getAttribute('data-src')
            })
    
            character.listImage = await page2.evaluate(() => {
                let element = document.querySelector('#gallery-0').querySelectorAll('img')
                return element[element.length - 1].getAttribute('data-src')
            })
            console.log(`${character.name}: all image complete ✅`);
        } catch (error) {
            console.log(`Ошибка при получении ссылки на галлерею/изображений персонажа ⛔: ${character.name} - Ошибка: ${error.message}` );
            errors.push({name: character.name, error: 'Ошибка при получении ссылки на галлерею/изображений персонажа ⛔', message: error.message})
        }  

        console.log(`${character.name}: wiki complete ✅`);
    }

    // await browser.close();

    try {
        await fs.writeFile('charactes.json', JSON.stringify(charactersData, null, 2));
        await fs.writeFile('errors.json', JSON.stringify(errors, null, 2));
    } catch (error) {
        console.error('Ошибка при записи в файл:', error);
    }
}

parseCharacters()