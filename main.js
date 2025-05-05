const input = document.querySelector('.input')
const guessBtn = document.querySelector('.guess-btn')
const guessForm = document.querySelector('.guess-form')
const test = document.querySelector('.show-test')
const againBtn = document.querySelector('.again-btn')
const livesDisplay = document.querySelector('.lives')
const toast = document.querySelector('.toast')
const mainTitle = document.querySelector('.core-title')

let lives = 5
let myGuess = Math.round(Math.random() * 20) + 1
console.log(myGuess)

function updateLives() {
    livesDisplay.innerHTML = '❤️'.repeat(lives)
}

guessForm.addEventListener('click', function (e) {
    e.preventDefault()
})

guessBtn.addEventListener("click", function () {
    console.log(input.value, 'hey')
    const userGuess = input.value
    test.innerHTML = `${userGuess}`
    input.value = ''
})

againBtn.addEventListener('click', function () {
    myGuess = Math.floor(Math.random() * 20) + 1
    test.innerHTML = ''
    lives = 5
    updateLives()
    mainTitle.textContent = 'Start guessing...'
    mainTitle.classList.remove('winText', 'loseText')
    console.log(myGuess, 'new guess')
})

function guessProcess () {
    if ( lives <= 0 ) {
        mainTitle.textContent = "You lose! play again"
        mainTitle.classList.add('loseText')
        guessBtn.disabled = true
        const theNumber = document.createElement('p')
        theNumber.innerHTML = `the main number was ${myGuess}`
    } else if ( Number(input.value) === myGuess ) {
        mainTitle.textContent = 'You won! 🎊🎊🎊'
        mainTitle.classList.add('winText')
        guessBtn.disabled = true
        input.disabled = true
    } else if ( Number(input.value) < myGuess ) {
        showToast('your guess is too Small')
        lives--
        updateLives()
        input.value = ''
        test.innerHTML = input.value
    } else if ( Number(input.value) > myGuess ) {
        showToast('your guess is too Big')
        lives--
        updateLives()
        input.value = ''
        test.innerHTML = input.value
    }
}

function showToast(message) {
    toast.textContent = message
    toast.classList.add('show')

    setTimeout(() => {
        toast.classList.remove('show')
    }, 4000)
}