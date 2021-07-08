export default function arraySample() {
    // シンプルな配列の型定義
    const colors: string[] = ['red', 'bule']
    colors.push('pink')
    // colors.push(1234)
    console.log(colors);

    const ids: (string | number)[] = ['ABC', 123]
    ids.push('DEF')
    ids.push('456')
    console.log(ids);
    // ids.push(true)

    //配列の型推論
    const generateSomeArray = (): (string | number)[] => {
        const _someArray = [] // any型
        _someArray.push(123) // number
        _someArray.push('abc') // number | string
        return _someArray
    }

    const someArray = generateSomeArray()
    someArray.push(456)
    someArray.push('こんにちは')
    // someArray.push(true)
    console.log(someArray);



}   
