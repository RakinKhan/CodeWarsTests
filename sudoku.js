let doneOrNot = (board) => {
    let sudokuBoard = board
    let nonInt = 0
    let outOfBounds = 0
    let repeats = 0
    let length = 0
    let sameRow = 0
    let block = []   
    let blockRow = []
    let blockRow2 =[]
    let blockRow3 = []
    let blockRow4 = []
    let blockRow5 = []
    let blockRow6 = []
    let blockRow7 = []
    let blockRow8 = []
    let blockRow9 = []

    sudokuBoard.forEach((item) => {
        for (i = 0; i < item.length; i ++) {
            if ((JSON.stringify(item) === JSON.stringify(block[i])) && (item !== block[i])) {
                sameRow = sameRow + 1
            }
        }   
    })

    sudokuBoard.forEach((item) => {
        if (item.length !== 9) {
            length = length + 1
        }
        let itemArray = item
        for (let i = 0; i <itemArray.length; i++) {
            if (i === 0) {
                blockRow.push(itemArray[i])
            } else if (i === 1) {
                blockRow2.push(itemArray[i])
            } else if (i === 2) {
                blockRow3.push(itemArray[i])
            } else if (i === 3) {
                blockRow4.push(itemArray[i])
            } else if (i === 4) {
                blockRow5.push(itemArray[i])
            } else if (i === 5) {
                blockRow6.push(itemArray[i])
            } else if (i === 6) {
                blockRow7.push(itemArray[i])
            } else if (i === 7) {
                blockRow8.push(itemArray[i])
            } else if (i === 8) {
                blockRow9.push(itemArray[i])
            }
        }
    })

    block.push(blockRow,blockRow2,blockRow3,blockRow4,blockRow5,blockRow6,blockRow7,blockRow8,blockRow9)
    block.forEach((item) => {
        for (i = 0; i < item.length; i ++) {
            if ((JSON.stringify(item) === JSON.stringify(block[i])) && (item !== block[i])) {
                sameRow = sameRow + 1
            }
        }   
    })
    block.forEach((item) => {
        item.sort((a,b) => {
            return a - b
        })
        item.forEach((digit) => {
            if (!Number.isInteger(digit)) {
                nonInt = nonInt + 1
            } else if (digit <= 0 || digit >= 10) {
                outOfBounds = outOfBounds + 1
            }
        })
        for (i = 0; i < item.length; i ++) {
            if (item[i] === item[i + 1]) {
                repeats = repeats + 1
            }
        }    
    })

    sudokuBoard.forEach((item) => {
        for (i = 0; i < item.length; i ++) {
            if ((JSON.stringify(item) === JSON.stringify(block[i])) && (item !== block[i])) {
                sameRow = sameRow + 1
            }
        }   
    })
    sudokuBoard.forEach((item) => {
        item.sort((a,b) => {
            return a - b
        })
        item.forEach((digit) => {
            if (!Number.isInteger(digit)) {
                nonInt = nonInt + 1
            } else if (digit <= 0 || digit >= 10) {
                outOfBounds = outOfBounds + 1
            }
        })
        for (i = 0; i < item.length; i ++) {
            if (item[i] === item[i + 1]) {
                repeats = repeats + 1
            }
        }    
    })

    if (sameRow !== 0) {
        return 'Try again!'
    } else if ((nonInt !== 0 || length !== 0) || (repeats !== 0 || outOfBounds !== 0)) {
        return 'Try again!'
    } else {
        return 'Finished!'
     }
}

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]))
