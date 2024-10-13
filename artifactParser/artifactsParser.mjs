
async function parseArtifacts() {
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();

    await page.goto('https://gi.yatta.moe/en/archive/reliquary');

    await page.waitForSelector('div[name="Modal"]');

    await page.click('div[name="Modal"] div[name="Button"]');
    
    await page.waitForSelector('div[name="Archive List"]');

    const artifactLinks = await page.$$eval(
        'div[name="Archive List"] a', 
        links => links.map(link => link.href)
    );

    const artifactsData = [];
    
    for(const link of artifactLinks) {
        await page.goto(link);

        await page.waitForSelector('div[name="COLUMN 1"]');

        const artifactData = await page.evaluate(() => {
            const data = {};

            const nameElem = document.querySelector('div[name="COLUMN 1"] h1')

            if(nameElem) {
                const name = nameElem.innerText;
                data['name'] = name;
            }

            const rarity = document.querySelector('div[name="Header"] .mt-auto').querySelectorAll('span').length
            const img = document.querySelector('div[name="Header"] .absolute > img').src
            const text = document.querySelector('div[name="Main"] .flex-col.gap-2').innerText
            
            data['rarity'] = rarity
            data['img'] = img
            data['desc'] = text
            return data;
        });

        artifactsData.push(artifactData)
    }

    await browser.close();

    console.log(artifactsData);
}

// parseArtifacts()

const arts = [
    {
      name: 'Adventurer',
      rarity: 3,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10010_4.png?vh=2024082600',
      desc: '2-Pieces : Max HP increased by 1000.\n' +
        '4-Pieces : Opening a chest regenerates 30% Max HP over 5s.'
    },
    {
      name: 'Lucky Dog',
      rarity: 3,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10011_4.png?vh=2024082600',
      desc: '2-Pieces : DEF increased by 100.\n' +
        '4-Pieces : Picking up Mora restores 300 HP.'
    },
    {
      name: 'Traveling Doctor',
      rarity: 3,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10013_4.png?vh=2024082600',
      desc: '2-Pieces : Increases incoming healing by 20%.\n' +
        '4-Pieces : Using Elemental Burst restores 20% HP.'
    },
    {
      name: 'Resolution of Sojourner',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10001_4.png?vh=2024082600',
      desc: '2-Pieces : ATK +18%.\n4-Pieces:Increases Charged Attack CRIT Rate by 30%.'
    },
    {
      name: 'Tiny Miracle',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10004_4.png?vh=2024082600',
      desc: '2-Pieces : All Elemental RES increased by 20%.\n' +
        '4-Pieces : Incoming elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.'
    },
    {
      name: 'Berserker',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10005_4.png?vh=2024082600',
      desc: '2-Pieces : CRIT Rate +12%\n' +
        '4-Pieces : When HP is below 70%, CRIT Rate increases by an additional 24%.'
    },
    {
      name: 'Instructor',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10007_4.png?vh=2024082600',
      desc: '2-Pieces : Increases Elemental Mastery by 80.\n' +
        "4-Pieces : Upon triggering an Elemental Reaction, increases all party members' Elemental Mastery by 120 for 8s."
    },
    {
      name: 'The Exile',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10009_4.png?vh=2024082600',
      desc: '2-Pieces : Energy Recharge +20%\n' +
        '4-Pieces : Using an Elemental Burst regenerates 2 Energy for all party members (excluding the wearer) every 2s for 6s. This effect cannot stack.'
    },
    {
      name: "Defender's Will",
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10003_4.png?vh=2024082600',
      desc: '2-Pieces : DEF +30%\n' +
        "4-Pieces : For each different element present in your own party, the wearer's Elemental RES to that corresponding element is increased by 30%."
    },
    {
      name: 'Brave Heart',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10002_4.png?vh=2024082600',
      desc: '2-Pieces : ATK +18%.\n' +
        '4-Pieces : Increases DMG by 30% against opponents with more than 50% HP.'
    },
    {
      name: 'Martial Artist',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10006_4.png?vh=2024082600',
      desc: '2-Pieces : Normal and Charged Attack DMG +15%\n' +
        '4-Pieces : After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s.'
    },
    {
      name: 'Gambler',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10008_4.png?vh=2024082600',
      desc: '2-Pieces : Increases Elemental Skill DMG by 20%.\n' +
        '4-Pieces : Defeating an opponent has a 100% chance to remove Elemental Skill CD. Can only occur once every 15s.'
    },
    {
      name: 'Scholar',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_10012_4.png?vh=2024082600',
      desc: '2-Pieces : Energy Recharge +20%\n' +
        '4-Pieces : Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s.'
    },
    {
      name: 'Prayers for Illumination',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15009_3.png?vh=2024082600',
      desc: '2-Pieces : Affected by Pyro for 40% less time.'
    },
    {
      name: 'Prayers for Destiny',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15010_3.png?vh=2024082600',
      desc: '2-Pieces : Affected by Hydro for 40% less time.'
    },
    {
      name: 'Prayers for Wisdom',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15011_3.png?vh=2024082600',
      desc: '2-Pieces : Affected by Electro for 40% less time.'
    },
    {
      name: 'Prayers to Springtime',
      rarity: 4,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15013_3.png?vh=2024082600',
      desc: '2-Pieces : Affected by Cryo for 40% less time.'
    },
    {
      name: 'Blizzard Strayer',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_14001_4.png?vh=2024082600',
      desc: '2-Pieces : Cryo DMG Bonus +15%\n' +
        '4-Pieces : When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%.'
    },
    {
      name: 'Thundersoother',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_14002_4.png?vh=2024082600',
      desc: '2-Pieces : Electro RES increased by 40%.\n' +
        '4-Pieces : Increases DMG against opponents affected by Electro by 35%.'
    },
    {
      name: 'Lavawalker',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_14003_4.png?vh=2024082600',
      desc: '2-Pieces : Pyro RES increased by 40%.\n' +
        '4-Pieces : Increases DMG against opponents affected by Pyro by 35%.'
    },
    {
      name: 'Maiden Beloved',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_14004_4.png?vh=2024082600',
      desc: '2-Pieces : Character Healing Effectiveness +15%\n' +
        '4-Pieces : Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.'
    },
    {
      name: "Gladiator's Finale",
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15001_4.png?vh=2024082600',
      desc: '2-Pieces : ATK +18%.\n' +
        '4-Pieces : If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.'
    },
    {
      name: 'Viridescent Venerer',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15002_4.png?vh=2024082600',
      desc: '2-Pieces : Anemo DMG Bonus +15%\n' +
        "4-Pieces : Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s."
    },
    {
      name: "Wanderer's Troupe",
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15003_4.png?vh=2024082600',
      desc: '2-Pieces : Increases Elemental Mastery by 80.\n' +
        '4-Pieces : Increases Charged Attack DMG by 35% if the character uses a Catalyst or a Bow.'
    },
    {
      name: 'Thundering Fury',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15005_4.png?vh=2024082600',
      desc: '2-Pieces : Electro DMG Bonus +15%\n' +
        '4-Pieces : Increases DMG caused by Overloaded, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%. When Quicken or the aforementioned Elemental Reactions are triggered, Elemental Skill CD is decreased by 1s. Can only occur once every 0.8s.'
    },
    {
      name: 'Crimson Witch of Flames',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15006_4.png?vh=2024082600',
      desc: '2-Pieces : Pyro DMG Bonus +15%\n' +
        '4-Pieces : Increases Overloaded, Burning, and Burgeon DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.'  
    },
    {
      name: 'Noblesse Oblige',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15007_4.png?vh=2024082600',
      desc: '2-Pieces : Elemental Burst DMG +20%\n' +
        "4-Pieces : Using an Elemental Burst increases all party members' ATK by 20% for 12s. This effect cannot stack."
    },
    {
      name: 'Bloodstained Chivalry',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15008_4.png?vh=2024082600',
      desc: '2-Pieces : Physical DMG +25%\n' +
        '4-Pieces : After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.'
    },
    {
      name: 'Archaic Petra',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15014_4.png?vh=2024082600',
      desc: '2-Pieces : Gain a 15% Geo DMG Bonus.\n' +
        '4-Pieces : Upon obtaining an Elemental Shard created through a Crystallize Reaction, all party members gain a 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time.'
    },
    {
      name: 'Retracing Bolide',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15015_4.png?vh=2024082600',
      desc: '2-Pieces : Increases Shield Strength by 35%.\n' +
        '4-Pieces : While protected by a shield, gain an additional 40% Normal and Charged Attack DMG.'
    },
    {
      name: 'Heart of Depth',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15016_4.png?vh=2024082600',
      desc: '2-Pieces : Hydro DMG Bonus +15%\n' +
        '4-Pieces : After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.'
    },
    {
      name: 'Tenacity of the Millelith',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15017_4.png?vh=2024082600',
      desc: '2-Pieces : HP +20%\n' +
        '4-Pieces : When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.'
    },
    {
      name: 'Pale Flame',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15018_4.png?vh=2024082600',
      desc: '2-Pieces : Physical DMG is increased by 25%.\n' +
        '4-Pieces : When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.'
    },
    {
      name: "Shimenawa's Reminiscence",
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15019_4.png?vh=2024082600',
      desc: '2-Pieces : ATK +18%.\n' +
        '4-Pieces : When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s. This effect will not trigger again during that duration.'
    },
    {
      name: 'Emblem of Severed Fate',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15020_4.png?vh=2024082600',
      desc: '2-Pieces : Energy Recharge +20%\n' +
        '4-Pieces : Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.'
    },
    {
      name: 'Husk of Opulent Dreams',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15021_4.png?vh=2024082600',
      desc: '2-Pieces : DEF +30%\n' +
        '4-Pieces : A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions: When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s. When off the field, the character gains 1 stack every 3s. Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus. When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost.'
    },
    {
      name: 'Ocean-Hued Clam',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15022_4.png?vh=2024082600',
      desc: '2-Pieces : Healing Bonus +15%.\n' +
        '4-Pieces : When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing). At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing. (This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses). Only one Sea-Dyed Foam can be produced every 3.5 seconds. Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing). There can be no more than one Sea-Dyed Foam active at any given time. This effect can still be triggered even when the character who is using this artifact set is not on the field.'
    },
    {
      name: 'Vermillion Hereafter',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15023_4.png?vh=2024082600',
      desc: '2-Pieces : ATK +18%.\n' +
        "4-Pieces : After using an Elemental Burst, this character will gain the Nascent Light effect, increasing their ATK by 8% for 16s. When the character's HP decreases, their ATK will further increase by 10%. This further increase can occur this way a maximum of 4 times. This effect can be triggered once every 0.8s. Nascent Light will be dispelled when the character leaves the field. If an Elemental Burst is used again during the duration of Nascent Light, the original Nascent Light will be dispelled."
    },
    {
      name: 'Echoes of an Offering',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15024_4.png?vh=2024082600',
      desc: '2-Pieces : ATK +18%.\n' +
        '4-Pieces : When Normal Attacks hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK. This effect will be dispelled 0.05s after a Normal Attack deals DMG. If a Normal Attack fails to trigger Valley Rite, the odds of it triggering the next time will increase by 20%. This trigger can occur once every 0.2s.'
    },
    {
      name: 'Deepwood Memories',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15025_4.png?vh=2024082600',
      desc: '2-Pieces : Dendro DMG Bonus +15%.\n' +
        "4-Pieces : After Elemental Skills or Bursts hit opponents, the targets' Dendro RES will be decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field."
    },
    {
      name: 'Gilded Dreams',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15026_4.png?vh=2024082600',
      desc: '2-Pieces : Increases Elemental Mastery by 80.\n' +
        '4-Pieces : Within 8s of triggering an Elemental Reaction, the character equipping this will obtain buffs based on the Elemental Type of the other party members. ATK is increased by 14% for each party member whose Elemental Type is the same as the equipping character, and Elemental Mastery is increased by 50 for every party member with a different Elemental Type. Each of the aforementioned buffs will count up to 3 characters. This effect can be triggered once every 8s. The character who equips this can still trigger its effects when not on the field.'
    },
    {
      name: 'Desert Pavilion Chronicle',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15027_4.png?vh=2024082600',
      desc: '2-Pieces : Anemo DMG Bonus +15%\n' +
        "4-Pieces : When Charged Attacks hit opponents, the equipping character's Normal Attack SPD will increase by 10% while Normal, Charged, and Plunging Attack DMG will increase by 40% for 15s."
    },
    {
      name: 'Flower of Paradise Lost',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15028_4.png?vh=2024082600',
      desc: '2-Pieces : Increases Elemental Mastery by 80.\n' +
        "4-Pieces : The equipping character's Bloom, Hyperbloom, and Burgeon reaction DMG are increased by 40%. Additionally, after the equipping character triggers Bloom, Hyperbloom, or Burgeon, they will gain another 25% bonus to the effect mentioned prior. Each stack of this lasts 10s. Max 4 stacks simultaneously. This effect can only be triggered once per second. The character who equips this can still trigger its effects when not on the field."
    },
    {
      name: "Nymph's Dream",
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15029_4.png?vh=2024082600',
      desc: '2-Pieces : Hydro DMG Bonus +15%\n' +
        '4-Pieces : After Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts hit opponents, 1 stack of Mirrored Nymph will be triggered, lasting 8s. When under the effect of 1, 2, or 3 or more Mirrored Nymph stacks, ATK will be increased by 7%/16%/25%, and Hydro DMG Bonus will be increased by 4%/9%/15%. Mirrored Nymph stacks created by Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts exist independently.'
    },
    {
      name: "Vourukasha's Glow",
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15030_4.png?vh=2024082600',
      desc: '2-Pieces : HP +20%\n' +
        '4-Pieces : Elemental Skill and Elemental Burst DMG will be increased by 10%. After the equipping character takes DMG, the aforementioned DMG Bonus is increased by 80% for 5s. This effect increase can have 5 stacks. The duration of each stack is counted independently. These effects can be triggered even when the equipping character is not on the field.'
    },
    {
      name: 'Marechaussee Hunter',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15031_4.png?vh=2024082600',
      desc: '2-Pieces : Normal and Charged Attack DMG +15%\n' +
        '4-Pieces : When current HP increases or decreases, CRIT Rate will be increased by 12% for 5s. Max 3 stacks.'
    },
    {
      name: 'Golden Troupe',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15032_4.png?vh=2024082600',
      desc: '2-Pieces : Increases Elemental Skill DMG by 20%.\n' +
        '4-Pieces : Increases Elemental Skill DMG by 25%. Additionally, when not on the field, Elemental Skill DMG will be further increased by 25%. This effect will be cleared 2s after taking the field.'
    },
    {
      name: 'Song of Days Past',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15033_4.png?vh=2024082600',
      desc: '2-Pieces : Healing Bonus +15%.\n' +
        '4-Pieces : When the equipping character heals a party member, the Yearning effect will be created for 6s, which records the total amount of healing provided (including overflow healing). When the duration expires, the Yearning effect will be transformed into the "Waves of Days Past" effect: When your active party member hits an opponent with a Normal Attack, Charged Attack, Plunging Attack, Elemental Skill, or Elemental Burst, the DMG dealt will be increased by 8% of the total healing amount recorded by the Yearning effect. The "Waves of Days Past" effect is removed after it has taken effect 5 times or after 10s. A single instance of the Yearning effect can record up to 15,000 healing, and only a single instance can exist at once, but it can record the healing from multiple equipping characters. Equipping characters on standby can still trigger this effect.'
    },
    {
      name: 'Nighttime Whispers in the Echoing Woods',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15034_4.png?vh=2024082600',
      desc: '2-Pieces : ATK +18%.\n' +
        '4-Pieces : After using an Elemental Skill, gain a 20% Geo DMG Bonus for 10s. While under a shield granted by the Crystallize reaction, the above effect will be increased by 150%, and this additional increase disappears 1s after that shield is lost.'
    },
    {
      name: 'Fragment of Harmonic Whimsy',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15035_4.png?vh=2024082600',
      desc: '2-Pieces : ATK +18%.\n' +
        '4-Pieces : When the value of a Bond of Life increases or decreases, this character deals 18% increased DMG for 6s. Max 3 stacks.'
    },
    {
      name: 'Unfinished Reverie',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15036_4.png?vh=2024082600',
      desc: '2-Pieces : ATK +18%.\n' +
        '4-Pieces : After leaving combat for 3s, DMG dealt increased by 50%. In combat, if no Burning opponents are nearby for more than 6s, this DMG Bonus will decrease by 10% per second until it reaches 0%. When a Burning opponent exists, it will increase by 10% instead until it reaches 50%. This effect still triggers if the equipping character is off-field.'
    },
    {
      name: 'Scroll of the Hero of Cinder City',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15037_4.png?vh=2024082600',
      desc: '2-Pieces : When a nearby party member triggers a Nightsoul Burst, the equipping character regenerates 6 Elemental Energy.\n' +
        "4-Pieces : After the equipping character triggers a reaction related to their Elemental Type, all nearby party members gain a 12% Elemental DMG Bonus for the Elemental Types involved in the elemental reaction for 15s. If the equipping character is in the Nightsoul's Blessing state when triggering this effect, all nearby party members gain an additional 28% Elemental DMG Bonus for the Elemental Types involved in the elemental reaction for 20s. The equipping character can trigger this effect while off-field, and the DMG bonus from Artifact Sets with the same name do not stack."
    },
    {
      name: 'Obsidian Codex',
      rarity: 5,
      img: 'https://gi.yatta.moe/assets/UI/reliquary/UI_RelicIcon_15038_4.png?vh=2024082600',
      desc: '2-Pieces : While the equipping character is in Nightsoul\'s Blessing and is on the field, their DMG dealt is increased by 15%.\n' +
        '4-Pieces : After the equipping character consumes 1 Nightsoul point while on the field, CRIT Rate increases by 40% for 6s. This effect can trigger once every second.'
    }
  ];


function boldingText(text) {
    text = text.replace('2-Pieces :', '<b>2-Pieces :</b>')
    text = text.replace('4-Pieces :', '<b>4-Pieces :</b>')
    return text
}

// console.log(arts.map(art => ({...art, desc: boldingText(art.desc)})));

console.log('abc'.replace('123', 'rtc'));
