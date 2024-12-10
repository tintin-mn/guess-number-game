const input = document.querySelector('.input')
const guessBtn = document.querySelector('.guess-btn')
const guessForm = document.querySelector('.guess-form')
const test = document.querySelector('.show-test')

guessForm.addEventListener('click', function (e) {
    e.preventDefault()
})

guessBtn.addEventListener("click", function () {
    console.log(input.value, 'hey')
    const userGuess = input.value
    test.innerHTML = `${userGuess}`
})

let myGuess = String(Math.round(Math.random() * 20))
console.log(myGuess)

function guessProcess () {

if ( input.value === myGuess ) {
    alert('you won 🎊')
} else if ( input.value > myGuess ) {
    alert('the guessed number is too big ‼️')
} else if ( input.value < myGuess ) {
    alert('the guessed number is too small ‼️')
}
}