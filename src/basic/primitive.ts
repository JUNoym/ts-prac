export default function primitiveSample() {
    let name: string = '大山純矢'
    // name = 123 エラーが起きる
    console.log("Sample1", typeof name, name)

    let age = 23
    // age = "23"
    console.log("Sample2", typeof age, age)

    let isSingle: boolean = true
    console.log("Sample3", typeof isSingle, isSingle)

    const isOver20: boolean = age >= 20
    console.log("sample4,", typeof isOver20, isOver20)
}