function main() {
    const N = parseInt(readLine(), 10);

    if(N%2 === 1) console.log('Weird')
    else if (N >= 2 && N <=5) console.log('Not Weird')
    else N <= 20 ? console.log('Weird') : console.log('Not Weird')
}