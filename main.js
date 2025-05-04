const input = document.querySelector('.input')
const guessBtn = document.querySelector('.guess-btn')
const guessForm = document.querySelector('.guess-form')
const test = document.querySelector('.show-test')
const againBtn = document.querySelector('.again-btn')
const livesDisplay = document.querySelector('.lives')

guessForm.addEventListener('click', function (e) {
    e.preventDefault()
})

guessBtn.addEventListener("click", function () {
    console.log(input.value, 'hey')
    const userGuess = input.value
    test.innerHTML = `${userGuess}`
    input.value = ''
})

let lives = 5
function updateLives() {
    livesDisplay.innerHTML = '❤️'.repeat(lives)
}

function showToast(message) {
    const toast = document.getElementById('toast')
    toast.textContent = message
    toast.classList.add('show')

    setTimeout(() => {
        toast.classList.remove('show')
    }, 2000)
}

let myGuess = Math.round(Math.random() * 20)
console.log(myGuess)

function guessProcess () {
    if ( Number(input.value) === myGuess ) {
        showToast('you won 🎊')
    } else {
        lives--
        updateLives()

        if (lives < 0) {
            showToast('loosing, guess again')
            playAgain()
        } else {
            showToast(Number(input.value) > myGuess ? 'Too Big' : 'Too Small')
        }
    }
}

function playAgain () {
    againBtn.addEventListener('click', function () {
        myGuess = Math.floor(Math.random() * 20) + 1
        input.value = ''
        test.innerHTML = ''
        lives = 5
        updateLives()
        console.log(myGuess, 'new guess')
    })
}