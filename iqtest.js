let iqTest = (numbers) => {
    let numbersArray = numbers.split(' ').map((number) => {
        return parseInt(number)
    })
    console.log(numbersArray)
}
iqTest("2 4 7 8 10")