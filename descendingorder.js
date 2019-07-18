function descendingOrder(n) {
    let digits = n.toString().split('')
    digits.sort((a,b) => b-a)
    
    return parseInt(digits.join(''))
}
  
console.log(descendingOrder(354821))