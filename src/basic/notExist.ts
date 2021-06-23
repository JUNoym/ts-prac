export default function notExist() {
    let name = null
    console.log("notExist sample 1", typeof name, name)

    name = 'Junya'

    if (name === null) {
        console.log("notExist sample 2", "私の名前は" + name);

    } else {
        console.log("notExist sample 3", '私の名前は' + name);

    }

    let age = undefined
    console.log("notExist sample 4", typeof age, age);

    age = 23
    if (age === undefined) {
        console.log("notExist sample 4", "年齢は秘密です");
    } else {
        console.log('私の年齢は' + age + "歳です。");

    }
}