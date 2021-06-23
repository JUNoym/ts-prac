//　アロー関数
export const logMessage = (message: string): void => {
    console.log('basic sample 1', message)
}

// 名前つき関数
export function logMessage2(message: string): void {
    console.log('basic sample 2', message);
}

//　関数式
export const logMessage3 = function (message: string): void {
    console.log('basic sample 3', message);
}

//戻り値never
export const alwaysThrowError = (message: string): void => {
    throw new Error(message)
}