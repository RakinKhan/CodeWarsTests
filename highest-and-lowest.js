function highAndLow(numbers){
    let numbersArray = numbers.split(' ')
    numbersArray.sort((a,b) => b - a)
    return `${numbersArray[0]} ${numbersArray[numbersArray.length-1]}`
}

console.log(highAndLow('1 2 3 4 -5'))