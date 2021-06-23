export default function unknown() {
    const maybeNumber: unknown = 10
    console.log("sample 1", typeof maybeNumber, maybeNumber);

    const isFoo = maybeNumber === "foo"
    console.log("sample 2 ", typeof isFoo, isFoo);

    //const sum = maybeNumber + 10 //エラーが出る

    if (typeof maybeNumber === 'number') {
        const sum = maybeNumber + 10
        console.log("sample 3 ", typeof sum, sum);
    }
}