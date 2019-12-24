function main() {
    let n = parseInt(readLine(), 10);

    let maxOnes = 0
    let curOnes = 0
    let onOnes = false
    let remainder
    let binaryString = []
    while(n>0)
    {
        remainder = n%2
        n = Math.floor(n/2)
        binaryString.unshift(remainder)
        if(remainder === 1)
        {
            curOnes++
            maxOnes = Math.max(maxOnes, curOnes)
        }
        else curOnes = 0
    }
    console.log(maxOnes)
}