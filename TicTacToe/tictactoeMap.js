const winner = [
    ['1', '2', '3'],
    ['1', '4', '7'],
    ['1', '5', '9'],
    ['2', '5', '8'],
    ['3', '5', '7'],
    ['3', '6', '9'],
    ['4', '5', '6'],
    ['7', '8', '9']
]
const field = document.querySelectorAll('.field')

let sign = 0

field.forEach(element => element.addEventListener('click', cellClick))
document.querySelector('#reset').addEventListener('click', resetField)

function cellClick(clickedCellEvent) {
    if (sign == 0 && clickedCellEvent.target.innerHTML == '') {
        clickedCellEvent.target.innerHTML = 'X'
        document.querySelector('#status').innerHTML = 'O'
        sign = 1
    } else if (sign == 1 && clickedCellEvent.target.innerHTML == '') {
        clickedCellEvent.target.innerHTML = 'O'
        document.querySelector('#status').innerHTML = 'X'
        sign = 0
    }

    checkStatus()
}

function checkStatus() {
    let x = []
    let o = []

    field.forEach(element => {
        if (element.innerHTML == 'X') {
            x.push(element.id)
        } else if (element.innerHTML == 'O') {
            o.push(element.id)
        }
    })

    if (x.length + o.length == 9) {
        endGame('Unentschieden')
    }

    for (let i = 0; i < winner.length; i++) {
        if (x.includes(winner[i][0]) && x.includes(winner[i][1]) && x.includes(winner[i][2])) {
            endGame('X gewinnt')
        }
        if (o.includes(winner[i][0]) && o.includes(winner[i][1]) && o.includes(winner[i][2])) {
            endGame('O gewinnt')
        }
    }
}

function endGame(result) {
    document.querySelector('#status').innerHTML = result
    field.forEach(element => element.disabled = true)
    if (result == 'X gewinnt') {
        document.querySelector('#status').innerHTML = result
        document.querySelector('#status').style.color = 'green'
    } else if (result == 'O gewinnt') {
        document.querySelector('#status').innerHTML = result
        document.querySelector('#status').style.color = 'green'
    } else {
        document.querySelector('#status').innerHTML = result
        document.querySelector('#status').style.color = 'blue'
    }
}

function resetField() {
    field.forEach(element => {
        element.innerHTML = ''
        element.disabled = false
    })
    document.querySelector('#status').innerHTML = 'X'
    document.querySelector('#status').style.color = 'black'
    sign = 0
}