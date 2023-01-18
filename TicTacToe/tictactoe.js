const winner = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]
]

let win
let sign = 0

document.addEventListener('click', function () {
    let target = event.target.id

    if (event.target.value == 1) {
        if (sign == 0) {
            document.getElementById(target).innerHTML = "X"
            document.getElementById(target).name = "X"
            document.getElementById('status').innerHTML = "O"
            document.getElementById(target).value = 2
            sign = 1
        } else if (sign == 1) {
            document.getElementById(target).innerHTML = "O"
            document.getElementById(target).name = "O"
            document.getElementById('status').innerHTML = "X"
            document.getElementById(target).value = 2
            sign = 0
        }
        getWinnerX(target)
        getWinnerO(target)
    }
})

function getWinner(player) {
    let x = document.getElementsByName('X')
    for (let j = 0; j < winner.length; j++) {
        for (let i = 0; i < x.length; i++) {
            if (x[i].id == winner[j][0]) {
                for (let l = 0; l < x.length; l++) {
                    if (x[l].id == winner[j][1]) {
                        for (let g = 0; g < x.length; g++) {
                            if (x[g].id == winner[j][2]) {
                                alert("X wins")
                            }
                        }
                    }
                }
            }
        }
    }
}

function getWinnerO(target) {
    let o = document.getElementsByName('O')
    for (let j = 0; j < winner.length; j++) {
        for (let i = 0; i < o.length; i++) {
            if (o[i].id == winner[j][0]) {
                for (let l = 0; l < o.length; l++) {
                    if (o[l].id == winner[j][1]) {
                        for (let g = 0; g < o.length; g++) {
                            if (o[g].id == winner[j][2]) {
                                alert("O wins")
                            }
                        }
                    }
                }
            }
        }
    }
}