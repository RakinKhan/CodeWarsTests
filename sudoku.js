let doneOrNot = (board) => {
    let sudokuBoard = board
    let zeros = 0
    let repeats = 0
    sudokuBoard.forEach((item) => {
        item.sort((a,b) => {
            return a - b
        })
        item.forEach((digit) => {
            if (digit === 0) {
                zeros = zeros + 1
            }
        })
        for (i = 0; i < item.length; i ++) {
            if (item[i] === item[i + 1]) {
                repeats = repeats + 1
            }
        }
    })
    
    if (zeros !== 0 || repeats !== 0) {
        return 'Try again!'
    } else if (zeros === 0 && repeats === 0){
        return 'Finished!'
    } else {
        return 'Try again!'
    }
}

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]))