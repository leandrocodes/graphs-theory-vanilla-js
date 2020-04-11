function warshall(grafo) {
    var temp = [];
    var temp2 = [];
    var temp3 = [];

    for (var k = 0; k < grafo.length; k++) {
        for (var i = 0; i < grafo.length; i++) {
            for (var j = 0; j < grafo.length; j++) {
                temp.push(grafo[j][i] * grafo[k][j]);
            }
            if (soma(temp) > 0) {
                temp2.push(1);
            } else {
                temp2.push(0);
            }
            temp = [];
        }
        temp3.push(temp2);
        temp2 = [];
    }
    return temp3;
}

function soma(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    }, 0);
}



var grafo = [
    [1, 0, 1, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1]
];

console.log(warshall(grafo));