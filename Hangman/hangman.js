const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "ä",
    "ö",
    "ü",
    "ß",
]

// let words = require("all-the-german-words")
const words = [
    'heizölrückstoßabdämpfung',
    'gänsefüßchen',
    'nichtsdestotrotz',
    'portemonnaie',
    'einfaltspinsel',
    'galionsfigur',
    'kernspintomografie'
]

let randomWord = []
let word = []
let used = []
let wrong

window.onload = startUp
document.querySelector('#restart').addEventListener('click', resetWord)

function startUp() {
    document.addEventListener('keydown', handleKeyPress)
    wrongReset()
    randomWord = Array.from(words[Math.floor(Math.random() * words.length)])
    randomWord.forEach(() => word.push('_'))
    movesLeft()
    document.querySelector('.used').innerHTML = (used = [])
    wordUpdate()
}

function handleKeyPress(pressed) {
    if (letters.includes(pressed.key) && !used.includes(pressed.key)) {
        addKey(pressed.key)
        checkInvolvement(pressed.key)
        wordUpdate()
        movesLeft()
        checkStatus()
    }
}

function addKey(pressedKey) {
    used.push(pressedKey)
    document.querySelector('.used').innerHTML = (used.join(' '))
}

function checkInvolvement(pressedKey) {
    if (randomWord.includes(pressedKey)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === pressedKey) {
                word[i] = pressedKey
            }
        }
    } else {
        wrong--
    }
}

function checkStatus() {
    if (!word.includes('_')) {
        document.removeEventListener('keydown', handleKeyPress)
        document.querySelector('#gallows').innerHTML = 'You won!'
        document.querySelector('#gallows').style.color = 'blue'
    }
    if (wrong <= 0) {
        document.removeEventListener('keydown', handleKeyPress)
        document.querySelector('#gallows').innerHTML = 'You lost!'
        document.querySelector('#gallows').style.color = 'red'
    }
}

function wordUpdate() {
    document.querySelector('#word').innerHTML = (word.join(' '))
}

function movesLeft() {
    document.querySelector('#gallows').innerHTML = wrong
}

function wrongReset() {
   wrong = 10
}

function resetWord() {
    document.querySelector('#gallows').style.color = 'black'
    word = []
    startUp()
}