function DNAStrand(dna){
    let dnaSymbol = dna.split('')
    let matchingPair = dnaSymbol.map((strand) => {
        if (strand === 'A') {
            return 'T'
        } else if (strand === 'T') {
            return 'A'
        } else if (strand === 'G') {
            return 'C'
        } else if (strand === 'C') {
            return 'G'
        } else {
            return 'none'
        }
    }).join('')

    return matchingPair
  }

  console.log(DNAStrand('AAAA'))