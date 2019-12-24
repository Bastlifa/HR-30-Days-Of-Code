function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const hourglass = (i,j) =>
    {
        return arr[j][i] + arr[j][i+1] + arr[j][i+2] + arr[j+1][i+1] + arr[j+2][i] +
        arr[j+2][i+1] + arr[j+2][i+2]
    }
    let maxA = hourglass(0,0)
    for(let j=0; j<4; j++)
    {
        for(let i=0; i<4; i++)
        {
            maxA = Math.max(maxA, hourglass(i,j))
        }
    }
    // console.log('a', arr[0][1])
    console.log(maxA)
}