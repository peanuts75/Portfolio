gridSquares = []

for (var row = 0; row < 20; row++){
    for (var column = 0; column < 20; column++){
        if(row%2==0){
            gridSquares.push([column, row, true])
        } else {
            gridSquares.push([column+0.5, row, false])
        }
    }
}

var scale = 50

function draw() {
    var canvas = document.getElementById("game")
    if (canvas.getContext) {
        var cursor = canvas.getContext('2d')

        cursor.fillStyle = 'rgb(150,150,150)'
        
        // for (i = 0; i < gridSquares.length; i++){
        //     console.log(gridSquares[i])
        //     cursor.fillRect(
        //         (gridSquares[i][0]+0.1)*scale,
        //         (gridSquares[i][1]+0.1)*scale,
        //         (0.8)*scale,
        //         (0.8)*scale)
        // }

        for (i = 0; i < gridSquares.length; i++){
            console.log(gridSquares[i])
            cursor.beginPath()
            cursor.arc(
                (gridSquares[i][0]+0.5)*scale,
                (gridSquares[i][1]+0.5)*scale,
                (0.4)*scale,
                0,
                2*Math.PI)
            if(gridSquares[i][2]){cursor.fill()}
            cursor.stroke()
        }
    }
}