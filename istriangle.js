function isTriangle(a,b,c) {
    if (a + b > c) {
        if (a + c > b) {
            if (c + b > a) {
                return true
            } else {
                return false}
        } else {
            return false}
    } else {
        return false
    }
 }

 console.log(isTriangle(4, 8, 11))