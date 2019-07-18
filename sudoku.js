let doneOrNot = (board) => {
    let sudokuBoard = board
    let nonInt = 0
    let outOfBounds = 0
    let repeats = 0
    let length = 0
    let sameRow = 0
    let misOrder = 0
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
        if (item.length !== 9) {
            length = length + 1
        }
        for (let i = 0; i <sudokuBoard.length; i++) {
            if ((JSON.stringify(item) === JSON.stringify(sudokuBoard[i])) && (item !== sudokuBoard[i])) {
                sameRow = sameRow + 1
            }
            if ((i >=0 && i <=2) && sudokuBoard[i] === item) {
                let indivline = sudokuBoard[i]
                for (let i = 0; i < indivline.length; i++) {
                    if (i >= 0 && i <= 2) {
                        blockRow.push(indivline[i])
                    } else if (i >= 3 && i <= 5) {
                        blockRow2.push(indivline[i])
                    } else if(i >= 6 && i <= 8) {
                        blockRow3.push(indivline[i])
                    }  
                }                
            } else if ((i >=3 && i <=5) && sudokuBoard[i] === item) {
                let indivline = sudokuBoard[i]
                for (let i = 0; i < indivline.length; i++) {
                    if (i >= 0 && i <= 2) {
                        blockRow4.push(indivline[i])
                    } else if (i >= 3 && i <= 5) {
                        blockRow5.push(indivline[i])
                    } else if(i >= 6 && i <= 8) {
                        blockRow6.push(indivline[i])
                    }  
                }                
            } else if ((i >=6 && i <=8) && sudokuBoard[i] === item) {
                let indivline = sudokuBoard[i]
                for (let i = 0; i < indivline.length; i++) {
                    if (i >= 0 && i <= 2) {
                        blockRow7.push(indivline[i])
                    } else if (i >= 3 && i <= 5) {
                        blockRow8.push(indivline[i])
                    } else if(i >= 6 && i <= 8) {
                        blockRow9.push(indivline[i])
                    }  
                }                
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

    if (sameRow !== 0) {
        return 'Try again!'
    } else if ((nonInt !== 0 || length !== 0) || (repeats !== 0 || outOfBounds !== 0)) {
        return 'Try again!'
    } else {
        return 'Finished!'
     }
}

console.log(doneOrNot())
