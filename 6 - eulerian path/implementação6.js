var grafoa = [
    [0, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],

]



function caminho() {
    
    var totalImpares = 0
    let grau
    let i = 0
    var n = grafoa[i].length

    while (totalImpares <= 2 && i < n) {
        grau = 0
        for (let j = 0; j < n; j++) {
            grau = grau + grafoa[i][j]
        }
        if (grau % 2 !== 0) {
            totalImpares++
        }
        i++
    }

    if (totalImpares <= 2) {
        console.log('tem caminho de euler\nTotal: ' + totalImpares)
        return
    }
    else {
        console.log('não tem camiho de euler\nTotal: ' + totalImpares)
        return
    }

}
caminho()