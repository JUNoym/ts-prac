//オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
    if (userId === 'abc') {
        console.log('sample 1 : user is signed in ! username is ', userName);
        return true
    } else {
        console.log('sample 1 : user is not signed in ! username is ', userName);
        return false
    }
}

// デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (userId: string, userName: string = "No Name"): boolean => {
    if (userId === 'abc') {
        console.log('sample 1 : user is signed in ! username is ', userName);
        return true
    } else {
        console.log('sample 1 : user is not signed in ! username is ', userName);
        return false
    }
}


//レストパラメータを持つ関数
export const sumPrice = (...price: number[]): number => {
    return price.reduce((prevTotal: number, price: number) => {
        return prevTotal + price
    }, 0)
}

//呼び出しシグネチャ（省略記法）
type LogMessage = (message: string) => void
export const logmessage: LogMessage = (message) => {
    console.log('sample message', message);
}