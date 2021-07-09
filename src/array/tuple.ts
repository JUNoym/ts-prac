export default function tupleSample() {
    // 通常のタプルの型定義 厳密な配列＝tuple
    let response: [number, string] = [200, 'ok']
    // response = [400, 'bad', 'hoge'] // number と　stringしか定義されていないためそれ以上入れようとするとerrorを出す
    // response = ['400', 'Bad Request']
    console.log(response)

    // 可変長引数を使ったタプル
    const friends: [number, string, ...string[]] = [5, 'suzuki', 'tanaka', 'sato', 'ota', 'hayashi']
    console.log(friends)

    // イミュータブルな配列を作る
    const commands: readonly string[] = ['git add', 'git commit', 'git push']
    // commands.push('git pull') // readonly 修飾をつけることで書き換え不可能にしている
    // commands[2] = 'hello'
    console.log(commands);

}