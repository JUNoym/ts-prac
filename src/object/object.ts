export default function objectSample() {
    const a: object = {
        name: "Junya",
        age: 23
    }
    // a.name //エラーが出る

    // オブジェクトリテラル記法で型定義をする
    let country: {
        langeage: string,
        name: string
    } = {
        langeage: 'Japanese',
        name: 'Japan'
    }
    console.log('Sample1', country)

    country = {
        langeage: 'English',
        name: 'America'
    }

    console.log('sample2', country)

    //オプショナルとreadonly
    let Junya: {
        age: number,
        lastName: string,
        readonly firstName: string,
        gender?: string
    } = {
        age: 23,
        lastName: 'Oyama',
        firstName: 'Junya',
    }

    console.log('sampel4', Junya);

    Junya.gender = 'male'
    console.log(Junya);
    Junya.lastName = '佐藤'
    // Junya.firstName = 'tanjiro'　//read-onlyなので上書きできない
    console.log(Junya);

    // インデックスシグネチャ
    const capitals: {
        [countryName: string]: string
    } = {
        America: 'Wachington',
        Japan: 'Tokyo',
        canada: 'Otawa'
    }

    const capitals2: {
        [countryId: number]: string
    } = {
        1: 'Japan',
        2: 'America',
        3: 'Noname'
    }

    console.log(capitals);
    console.log(capitals2);


}

