function processData(input) {
    //Enter your code here
    let aInput = input.split('\n')
    let n = Number(aInput[0])
    let phoneBook = {}
    for(let i=1; i<n+1; i++)
    {
        let line = aInput[i].split(' ')
        
        phoneBook[line[0]] = line[1]
    }

    for(let i=n+1; i<aInput.length; i++)
    {
        if(phoneBook[aInput[i]])
        {
            console.log(`${aInput[i]}=${phoneBook[aInput[i]]}`)
        }
        else console.log('Not found')
    }
}