export default function genericsBasinSample() {
    //ジェネリック型を使わない
    const stringFunc = (array: string[], initialValue: string): string => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }

    console.log(stringFunc([' ', 'Oyama', ' ', 'Junya'], 'My name is'))

    const numberFunc = (array: number[], initialValue: number): number => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    console.log(numberFunc([100, 200, 300], 0))

    // 上記のコードをジェネリック型で書く
    type GenericFunction<T> = {
        (array: T[], initialValue: T): T
    }

    const GenericStringFunction: GenericFunction<string> = (array, initialValue) => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }

    const GenericNumberFunc: GenericFunction<number> = (array, initialValue) => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }

    console.log(GenericNumberFunc([1000, 2000, 3000], 200))
    console.log(GenericStringFunction(['Hi'], 'HI'));

}