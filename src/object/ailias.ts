
export default function ailiasSample() {
    //　型エイリアス　同じ型を何度も定義する必要がなくなるので便利
    type Country = {
        capital: string,
        population: number,
        name: string,
        language: string
    }

    const Japan: Country = {
        capital: 'Tokyo',
        population: 130000000,
        name: 'Japan',
        language: 'japanese'
    }
    console.log(Japan);

    const america: Country = {
        capital: 'washington D.C.',
        population: 300000000,
        name: 'America',
        language: 'English'
    }
    console.log(america);


    //合併型(union)と交差型(intersection)を理解する
    type Knight = {
        hp: number,
        sp: number,
        weapon: string,
        swordSkill: string
    }

    type Wizard = {
        hp: number,
        mp: number,
        weapon: string,
        magicSkill: string
    }

    //合併型　騎士か魔法使いのどちらかに成長していく
    type Adventurer = Knight | Wizard

    // 交差型　騎士と魔法使いの特製両方を併せ持つ強い冒険者
    type Paladin = Knight & Wizard

    // Knightよりの冒険者
    const adventurer1: Adventurer = {
        hp: 100,
        sp: 30,
        weapon: '檜のぼう',
        swordSkill: '五月雨ぎり'
    }

    // Wizardよりの冒険者
    const adventurer2: Adventurer = {
        hp: 80,
        mp: 30,
        weapon: '檜の杖',
        magicSkill: 'メラ',
    }

    console.log(adventurer1);
    console.log(adventurer2);

    const paladin: Paladin = {
        hp: 300,
        sp: 100, //Knight と　Wizardにある型がかけてしまうとエラーが出る
        mp: 200,
        weapon: '伝説の剣',
        swordSkill: 'ギガスラッシュ',
        magicSkill: 'メラゾーマ'
    }

    console.log(paladin);

}