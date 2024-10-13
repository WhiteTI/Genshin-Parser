import stats from "./data.mjs"

const character = {
    "name": "Sucrose",
    "title": "Harmless Sweetie",
    "rarity": 4,
    "bgImage": "url(\"https://gi.yatta.moe/assets/UI/UI_Gacha_AvatarImg_Sucrose.sm.png\") center center no-repeat",
    "level": [
      {
        "level": "1",
        "health": " 775 ",
        "attack": " 14 ",
        "defense": " 59 ",
        "additionalStat": [
          " Anemo DMG Bonus ",
          " 0% "
        ]
      },
      {
        "level": "Lv. 20",
        "health": "1991",
        "attack": "37",
        "defense": "151",
        "additionalStat": [
          "Anemo DMG Bonus",
          "0%"
        ]
      },
      {
        "level": "Lv. 40",
        "health": "3850",
        "attack": "71",
        "defense": "293",
        "additionalStat": [
          "Anemo DMG Bonus",
          "0.0%"
        ]
      },
      {
        "level": "Lv. 50",
        "health": "4901",
        "attack": "90",
        "defense": "373",
        "additionalStat": [
          "Anemo DMG Bonus",
          "6.0%"
        ]
      },
      {
        "level": "Lv. 60",
        "health": "6090",
        "attack": "112",
        "defense": "463",
        "additionalStat": [
          "Anemo DMG Bonus",
          "12.0%"
        ]
      },
      {
        "level": "Lv. 70",
        "health": "7141",
        "attack": "131",
        "defense": "543",
        "additionalStat": [
          "Anemo DMG Bonus",
          "12.0%"
        ]
      },
      {
        "level": "Lv. 80",
        "health": "8192",
        "attack": "151",
        "defense": "623",
        "additionalStat": [
          "Anemo DMG Bonus",
          "18.0%"
        ]
      },
      {
        "level": "Lv. 90",
        "health": "9244",
        "attack": "170",
        "defense": "703",
        "additionalStat": [
          "Anemo DMG Bonus",
          "24.0%"
        ]
      }
    ],
    "skill": [
      {
        "name": "Normal Attack: Wind Spirit Creation",
        "image": "https://gi.yatta.moe/assets/UI/Skill_A_Catalyst_MD.png?vh=2024082600",
        "description": "Normal Attack\nPerforms up to 4 attacks using Wind Spirits, dealing Anemo DMG.\n\nCharged Attack\nConsumes a certain amount of Stamina and deals AoE Anemo DMG after a short casting time.\n\nPlunging Attack\nCalling upon the power of her Wind Spirits, Sucrose plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Anemo DMG upon impact with the ground.",
        "skillStats": [
          {
            "level": 1,
            "value": [
              "1-Hit DMG:33.5%",
              "2-Hit DMG:30.6%",
              "3-Hit DMG:38.4%",
              "4-Hit DMG:47.9%",
              "Charged Attack DMG:120%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:56.8%",
              "Low/High Plunge DMG:114%/142%"
            ]
          },
          {
            "level": 2,
            "value": [
              "1-Hit DMG:36%",
              "2-Hit DMG:32.9%",
              "3-Hit DMG:41.3%",
              "4-Hit DMG:51.5%",
              "Charged Attack DMG:129%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:61.5%",
              "Low/High Plunge DMG:123%/153%"
            ]
          },
          {
            "level": 3,
            "value": [
              "1-Hit DMG:38.5%",
              "2-Hit DMG:35.2%",
              "3-Hit DMG:44.2%",
              "4-Hit DMG:55.1%",
              "Charged Attack DMG:138%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:66.1%",
              "Low/High Plunge DMG:132%/165%"
            ]
          },
          {
            "level": 4,
            "value": [
              "1-Hit DMG:41.8%",
              "2-Hit DMG:38.3%",
              "3-Hit DMG:48.1%",
              "4-Hit DMG:59.9%",
              "Charged Attack DMG:150%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:72.7%",
              "Low/High Plunge DMG:145%/182%"
            ]
          },
          {
            "level": 5,
            "value": [
              "1-Hit DMG:44.3%",
              "2-Hit DMG:40.6%",
              "3-Hit DMG:50.9%",
              "4-Hit DMG:63.5%",
              "Charged Attack DMG:159%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:77.3%",
              "Low/High Plunge DMG:155%/193%"
            ]
          },
          {
            "level": 6,
            "value": [
              "1-Hit DMG:46.9%",
              "2-Hit DMG:42.9%",
              "3-Hit DMG:53.8%",
              "4-Hit DMG:67.1%",
              "Charged Attack DMG:168%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:82.6%",
              "Low/High Plunge DMG:165%/206%"
            ]
          },
          {
            "level": 7,
            "value": [
              "1-Hit DMG:50.2%",
              "2-Hit DMG:45.9%",
              "3-Hit DMG:57.7%",
              "4-Hit DMG:71.9%",
              "Charged Attack DMG:180%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:89.9%",
              "Low/High Plunge DMG:180%/224%"
            ]
          },
          {
            "level": 8,
            "value": [
              "1-Hit DMG:53.5%",
              "2-Hit DMG:49%",
              "3-Hit DMG:61.5%",
              "4-Hit DMG:76.7%",
              "Charged Attack DMG:192%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:97.1%",
              "Low/High Plunge DMG:194%/243%"
            ]
          },
          {
            "level": 9,
            "value": [
              "1-Hit DMG:56.9%",
              "2-Hit DMG:52%",
              "3-Hit DMG:65.4%",
              "4-Hit DMG:81%",
              "Charged Attack DMG:204%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:104.4%",
              "Low/High Plunge DMG:209%/261%"
            ]
          },
          {
            "level": 10,
            "value": [
              "1-Hit DMG:60.2%",
              "2-Hit DMG:55.1%",
              "3-Hit DMG:69.2%",
              "4-Hit DMG:86%",
              "Charged Attack DMG:216%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:112.3%",
              "Low/High Plunge DMG:225%/281%"
            ]
          },
          {
            "level": 11,
            "value": [
              "1-Hit DMG:63.6%",
              "2-Hit DMG:58.2%",
              "3-Hit DMG:73.1%",
              "4-Hit DMG:91%",
              "Charged Attack DMG:228%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:120.3%",
              "Low/High Plunge DMG:240%/300%"
            ]
          },
          {
            "level": 12,
            "value": [
              "1-Hit DMG:66.9%",
              "2-Hit DMG:61.2%",
              "3-Hit DMG:76.9%",
              "4-Hit DMG:96%",
              "Charged Attack DMG:240%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:128.2%",
              "Low/High Plunge DMG:256%/320%"
            ]
          },
          {
            "level": 13,
            "value": [
              "1-Hit DMG:71.1%",
              "2-Hit DMG:65.1%",
              "3-Hit DMG:82%",
              "4-Hit DMG:102%",
              "Charged Attack DMG:255%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:136.1%",
              "Low/High Plunge DMG:272%/340%"
            ]
          },
          {
            "level": 14,
            "value": [
              "1-Hit DMG:75.3%",
              "2-Hit DMG:68.9%",
              "3-Hit DMG:87%",
              "4-Hit DMG:108%",
              "Charged Attack DMG:270%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:144.1%",
              "Low/High Plunge DMG:288%/360%"
            ]
          },
          {
            "level": 15,
            "value": [
              "1-Hit DMG:79.5%",
              "2-Hit DMG:72.7%",
              "3-Hit DMG:91%",
              "4-Hit DMG:114%",
              "Charged Attack DMG:285%",
              "Charged Attack Stamina Cost:50",
              "Plunge DMG:152%",
              "Low/High Plunge DMG:304%/380%"
            ]
          }
        ]
      },
      {
        "name": "E. Astable Anemohypostasis Creation - 6308",
        "image": "https://gi.yatta.moe/assets/UI/Skill_S_Sucrose_01.png?vh=2024082600",
        "description": "Creates a small Wind Spirit that pulls opponents and objects towards its location, launches opponents within its AoE, and deals Anemo DMG.\n\nThis is a little embarrassing, but though the elemental lifeforms birthed through this procedure dissipate very rapidly, they are incredibly useful when adventuring. Even failed experiments can have practical applications.",
        "skillStats": [
          {
            "level": 1,
            "value": [
              "Skill DMG:211%",
              "CD:15s"
            ]
          },
          {
            "level": 2,
            "value": [
              "Skill DMG:227%",
              "CD:15s"
            ]
          },
          {
            "level": 3,
            "value": [
              "Skill DMG:243%",
              "CD:15s"
            ]
          },
          {
            "level": 4,
            "value": [
              "Skill DMG:264%",
              "CD:15s"
            ]
          },
          {
            "level": 5,
            "value": [
              "Skill DMG:280%",
              "CD:15s"
            ]
          },
          {
            "level": 6,
            "value": [
              "Skill DMG:296%",
              "CD:15s"
            ]
          },
          {
            "level": 7,
            "value": [
              "Skill DMG:317%",
              "CD:15s"
            ]
          },
          {
            "level": 8,
            "value": [
              "Skill DMG:338%",
              "CD:15s"
            ]
          },
          {
            "level": 9,
            "value": [
              "Skill DMG:359%",
              "CD:15s"
            ]
          },
          {
            "level": 10,
            "value": [
              "Skill DMG:380%",
              "CD:15s"
            ]
          },
          {
            "level": 11,
            "value": [
              "Skill DMG:401%",
              "CD:15s"
            ]
          },
          {
            "level": 12,
            "value": [
              "Skill DMG:422%",
              "CD:15s"
            ]
          },
          {
            "level": 13,
            "value": [
              "Skill DMG:449%",
              "CD:15s"
            ]
          },
          {
            "level": 14,
            "value": [
              "Skill DMG:475%",
              "CD:15s"
            ]
          },
          {
            "level": 15,
            "value": [
              "Skill DMG:502%",
              "CD:15s"
            ]
          }
        ]
      },
      {
        "name": "Q. Forbidden Creation - Isomer 75 / Type II",
        "image": "https://gi.yatta.moe/assets/UI/Skill_E_Sucrose_01.png?vh=2024082600",
        "description": "Sucrose hurls an unstable concoction that creates a Large Wind Spirit.\nWhile it persists, the Large Wind Spirit will continuously pull in surrounding opponents and objects, launch nearby opponents, and deal Anemo DMG.\n\nElemental Absorption\nIf the Wind Spirit comes into contact with Hydro/Pyro/Cryo/Electro energy, it will deal additional elemental DMG of that type.\nElemental Absorption may only occur once per use.\n\nSucrose used to give names to her volatile Anemo Hypostases, but their line of heirs quickly grew to surpass Baron Bunny the 893rd.",
        "skillStats": [
          {
            "level": 1,
            "value": [
              "DoT:148%",
              "Additional Elemental DMG:44%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 2,
            "value": [
              "DoT:159%",
              "Additional Elemental DMG:47.3%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 3,
            "value": [
              "DoT:170%",
              "Additional Elemental DMG:50.6%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 4,
            "value": [
              "DoT:185%",
              "Additional Elemental DMG:55%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 5,
            "value": [
              "DoT:196%",
              "Additional Elemental DMG:58.3%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 6,
            "value": [
              "DoT:207%",
              "Additional Elemental DMG:61.6%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 7,
            "value": [
              "DoT:222%",
              "Additional Elemental DMG:66%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 8,
            "value": [
              "DoT:237%",
              "Additional Elemental DMG:70.4%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 9,
            "value": [
              "DoT:252%",
              "Additional Elemental DMG:74.8%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 10,
            "value": [
              "DoT:266%",
              "Additional Elemental DMG:79.2%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 11,
            "value": [
              "DoT:281%",
              "Additional Elemental DMG:83.6%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 12,
            "value": [
              "DoT:296%",
              "Additional Elemental DMG:88%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 13,
            "value": [
              "DoT:315%",
              "Additional Elemental DMG:93.5%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 14,
            "value": [
              "DoT:333%",
              "Additional Elemental DMG:99%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          },
          {
            "level": 15,
            "value": [
              "DoT:352%",
              "Additional Elemental DMG:105%",
              "Duration:6s",
              "CD:20s",
              "Energy Cost:80"
            ]
          }
        ]
      }
    ],
    "passiveSkill": [
      {
        "name": "Catalyst Conversion",
        "image": "https://gi.yatta.moe/assets/UI/UI_Talent_S_Sucrose_05.png?vh=2024082600",
        "description": "When Sucrose triggers a Swirl reaction, all characters in the party with the matching element (excluding Sucrose) have their Elemental Mastery increased by 50 for 8s."
      },
      {
        "name": "Mollis Favonius",
        "image": "https://gi.yatta.moe/assets/UI/UI_Talent_S_Sucrose_06.png?vh=2024082600",
        "description": "When Astable Anemohypostasis Creation - 6308 or Forbidden Creation - Isomer 75 / Type II hits an opponent, increases all party members' (excluding Sucrose) Elemental Mastery by an amount equal to 20% of Sucrose's Elemental Mastery for 8s."
      },
      {
        "name": "Astable Invention",
        "image": "https://gi.yatta.moe/assets/UI/UI_Talent_Combine_Material.png?vh=2024082600",
        "description": "When Sucrose crafts Character and Weapon Enhancement Materials, she has a 10% chance to obtain double the product."
      }
    ],
    "constellation": [
      {
        "name": "1. Clustered Vacuum Field",
        "image": "https://gi.yatta.moe/assets/UI/UI_Talent_S_Sucrose_01.png?vh=2024082600",
        "description": "Astable Anemohypostasis Creation - 6308 gains 1 additional charge."
      },
      {
        "name": "2. Beth: Unbound Form",
        "image": "https://gi.yatta.moe/assets/UI/UI_Talent_S_Sucrose_02.png?vh=2024082600",
        "description": "The duration of Forbidden Creation - Isomer 75 / Type II is increased by 2s."
      },
      {
        "name": "3. Flawless Alchemistress",
        "image": "https://gi.yatta.moe/assets/UI/UI_Talent_U_Sucrose_01.png?vh=2024082600",
        "description": "Increases the Level of Astable Anemohypostasis Creation - 6308 by 3.\nMaximum upgrade level is 15."
      },
      {
        "name": "4. Alchemania",
        "image": "https://gi.yatta.moe/assets/UI/UI_Talent_S_Sucrose_03.png?vh=2024082600",
        "description": "Sucrose will reduce the CD of Astable Anemohypostasis Creation - 6308 by 1-7s for every 7 Normal or Charged Attack hits she scores against opponents.\nOne hit may be counted every 0.1s."
      },
      {
        "name": "5. Caution: Standard Flask",
        "image": "https://gi.yatta.moe/assets/UI/UI_Talent_U_Sucrose_02.png?vh=2024082600",
        "description": "Increases the Level of Forbidden Creation - Isomer 75 / Type II by 3.\nMaximum upgrade level is 15."
      },
      {
        "name": "6. Chaotic Entropy",
        "image": "https://gi.yatta.moe/assets/UI/UI_Talent_S_Sucrose_04.png?vh=2024082600",
        "description": "If Forbidden Creation - Isomer 75 / Type II triggers an Elemental Absorption, all party members gain a 20% Elemental DMG Bonus for the corresponding absorbed element during its duration."
      }
    ],
    "weaponType": " Catalyst",
    "region": "Mondstadt",
    "element": "Anemo",
    "description": "Sucrose is a playable Anemo character in Genshin Impact.\nAn alchemist specializing in bio-alchemy, she also serves as an assistant for Albedo, the head alchemist of the Knights of Favonius.\n",
    "image": "https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Sucrose_Icon.png/revision/latest/scale-to-width-down/185?cb=20210213163209",
    "listImage": "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Sucrose_Multi_Wish.png/revision/latest/scale-to-width-down/57?cb=20201119223938"
}

function bgImageUrlParse(str) {
      let index = str.indexOf('"') + 1;
      let secondIndex = str.indexOf('"', index);
      return str.slice(index, secondIndex);
}

function imageUrlParse(str) {
    let index = str.indexOf('scale');
    return str.slice(0, index);
}

function levelFix(arr) {
    const regex = /Lv\. (\d+)/;

    return arr.map(({level, health, attack, defense, additionalStat}, i) => {
        for (const element of Object.values(stats)) {
            if(additionalStat[0].trim().includes(element.name)) {
                additionalStat.unshift(element.image)
            }
        } 

        if (i === 0) {
            return {level: +level, health: +health.trim(), attack: +attack.trim(), defense: +defense.trim(), additionalStat: [additionalStat[0], additionalStat[1].trim(), additionalStat[2].trim()]}
        }

        return {level: +level.match(regex)[1], health: +health.trim(), attack: +attack.trim(), defense: +defense.trim(), additionalStat}
  })
}

character.bgImage = bgImageUrlParse(character.bgImage)
character.image = imageUrlParse(character.image)
character.listImage = imageUrlParse(character.listImage)

character.level = levelFix(character.level)

// console.log(character.level);

function replaceSubstrings(text, substrings, color) {
    // Сортируем подстроки по убыванию длины
    substrings.sort((a, b) => b.length - a.length);

    // Создаем массив для хранения результата
    let result = [];

    // Проходим по тексту и заменяем подстроки
    let i = 0;
    while (i < text.length) {
        let found = false;

        for (let substring of substrings) {
            if (text.startsWith(substring, i)) {
                // Добавляем открывающий тег <b>
                result.push(`<b style="color: ${color}">${substring}</b>`);
                // Перемещаем указатель на длину подстроки
                i += substring.length;
                found = true;
                break;
            }
        }

        if (!found) {
            // Если не нашли подстроку, добавляем текущий символ
            result.push(text[i]);
            i++;
        }
    }

    // Объединяем результат в строку
    return result.join('');
}

function decorateText(char) {
	let elements = [['Pyro', '#FF6640'], ['Hydro', '#00c0ff'], ['Electro', '#cc80ff'], ['Cryo', '#7af2f2'], ['Dendro', '#9be53d'], ['Anemo', '#33d7a0'], ['Geo', '#ffb00d']]
	let withSkill = [
		'Normal Attack',
		'Charged Attack',
		'Plunging Attack',
		'Press',
		'Hold',
		'Hold (Short)',
		'Elemental Absorption',
		'Alternate Sprint',
		'Aimed Shot',
		'Tap',
		'Arkhe: Pneuma',
		'Arkhe: Ousia',
		'Nightsoul\'s Blessing:'
	]
	let withUnicForChar = []

	const createWithElement = (element) => ([
			`${element}`,
			`${element} DMG`,
			`AoE ${element} DMG`,
			`${element} DMG Bonus`,
			`${element} element`,
			`${element} Construct`,
			`${element} RES`,
			`${element}-Charged`,
			`${element} Infusion`,
			`${element} attacks`,
			`${element}-related reaction`
	])

	char.skill.forEach(item => {
		if (item.name.includes('Normal Attack: ')) {
			withUnicForChar.push(item.name.replace('Normal Attack: ', ''))
		}
		
		if (item.name.includes('E. ')) {
			withUnicForChar.push(item.name.replace('E. ', ''))
		}

		if (item.name.includes('Q. ')) {
			withUnicForChar.push(item.name.replace('Q. ', ''))
		}
	});

  	char.passiveSkill.forEach(item => {
    	withUnicForChar.push(item.name)
	});	

	char.constellation.forEach((item, i) => {
    	withUnicForChar.push(item.name.replace(`${i+1}. `, ''))
	});

	for (const [element, color] of elements) {
		if (char.description.includes(element)) {
			char.description = char.description.replace(element, `<b styly="color: ${color}">${element}</b>`)
		}
		
		char.description = char.description.replaceAll('\n', '<br>')
	}

	char.skill = char.skill.map(item => {
		for (const [element, color] of elements) {
			
			const withElement = createWithElement(element)

			item.description = replaceSubstrings(item.description, withElement, color)
		}

		item.description = replaceSubstrings(item.description, withSkill, '#FFCC33')
		item.description = replaceSubstrings(item.description, withUnicForChar, '#FFCC33')
		item.description = item.description.replaceAll('\n', '<br>')

		return {...item}
	})

	char.passiveSkill = char.passiveSkill.map(item => {
		for (const [element, color] of elements) {
			
			const withElement = createWithElement(element)

			item.description = replaceSubstrings(item.description, withElement, color)
		}

		item.description = replaceSubstrings(item.description, withSkill, '#FFCC33')
		item.description = replaceSubstrings(item.description, withUnicForChar, '#FFCC33')
		item.description = item.description.replaceAll('\n', '<br>')
		
		return {...item}
	})

	char.constellation = char.constellation.map(item => {
		for (const [element, color] of elements) {
			
			const withElement = createWithElement(element)

			item.description = replaceSubstrings(item.description, withElement, color)
		}

		item.description = replaceSubstrings(item.description, withSkill, '#FFCC33')
		item.description = replaceSubstrings(item.description, withUnicForChar, '#FFCC33')
		item.description = item.description.replaceAll('\n', '<br>')
		
		return {...item}
	})
}

decorateText(character)

console.log(character.description);
