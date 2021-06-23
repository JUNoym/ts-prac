export default function anySample() {
    let name: any = "Junya" //string型で代入
    console.log("any sample 1", typeof name, name);

    name = 23
    console.log("sample 2", typeof name, name);
}