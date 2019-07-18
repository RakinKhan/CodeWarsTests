function digPow(n, p) {
    let digits = n.toString().split('')
    let digitsArray = digits.map((digit) => parseInt(digit))
    let totalNumber = 0
    for(i = p, j = 0; i < p + digitsArray.length; i++, j++) {
        let nextNum = Math.pow(digitsArray[j], i)
        totalNumber = totalNumber + nextNum
    }
    let k = (totalNumber / n)
    console.log(totalNumber)
    if (Number.isInteger(k)) {
        return k
    } else {
        return -1
    }

}
console.log(digPow(92,1))