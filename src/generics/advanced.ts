export default function genericsAdvanced() {
    // map関数のような物を作る
    type Map<T, U> = {
        (array: T[], fn: (item: T) => U): U[]
    }
    //文字列型の配列を渡したらナンバー型の配列を返してくれるような関数
    const mapStringsToNumbers: Map<string, number> = (array, fn) => {
        const result = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            result[i] = fn(item)
        }
        return result
    }

    const numbers = mapStringsToNumbers(['123', '456', '789'], (item) => Number(item))
    console.log(numbers);

    //数列型の配列を渡したら文字列型の配列を返してくれるような関数
    const mapNumbersToStrings: Map<number, string> = (array, fn) => {
        const result = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            result[i] = fn(item)
        }
        return result
    }
    const strings = mapNumbersToStrings(numbers, (item) => String(item))
    console.log(strings);



}