function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let s = ''
    for(let i=arr.length - 1; i >= 0; i--)
    {
        if(i == arr.length - 1) s += arr[i]
        else s += ' ' + arr[i]
    }
    console.log(s)
}