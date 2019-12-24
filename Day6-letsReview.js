function processData(input) {
    //Enter your code here
    let aInput = input.split('\n')
    let len = Number(input[0])

    for(let i=1; i<len + 1 || i < aInput.length; i++)
    {
        let aS = aInput[i].split('')
        let oddS = ''
        let evenS = ''
        aS.forEach((el, index) =>
        {
            if(index%2 === 0) evenS += el
            else oddS += el
        })
        console.log(evenS + ' ' + oddS)   
    }
} 