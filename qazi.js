let purplediv = document.getElementById('confidence')
let reddiv = document.getElementById('my')
let greendiv = document.getElementById('lover')

/* purplediv.onclick = () => console.log('you clicked purple')

reddiv.onclick = () => console.log('you clicked red')

greendiv.onclick = () => console.log('you clicked green') */

const squares = document.querySelectorAll('.colorSquare')

const timesClicked = {'purple':0, 'red': 0, 'green': 0}
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
    }
})


function clearscores() {
    timesClicked.purple = 0
    timesClicked.red = 0
    timesClicked.green = 0
    squares.forEach(square => square.innerText='0')
}

const cleardiv = document.getElementById('clear')
cleardiv.onclick = () => clearscores()