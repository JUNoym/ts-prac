// import World from './world'

// const root = document.getElementById('root')
// const world = new World('反映されるかテスト')

// world.sayHello(root)

//基本の型定義
// import { unknown, any, notExist, primitiveSample } from './basic'

// unknown()
// any()
// notExist()
// primitiveSample()

//関数の型定義
import { logMessage, logMessage2, logMessage3 } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumPrice, logmessage } from './function/parms'

logMessage('hello TS')
logMessage2('私の名前はログメッセージ')
logMessage3('私の名前はログメッセージ3')
isUserSignedIn('abc', "JUNoym")
isUserSignedIn('def', "JUNoym")
isUserSignedIn2('abc')
isUserSignedIn2('def', "JUNYA")
let result = sumPrice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(result);
logmessage('hello！！！')

