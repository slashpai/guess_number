var actualValue= Math.floor((Math.random() * 100) + 1);
var attempts = 0
var maxAttempts = 5

function clickGuess() {
    attempts++
    if (attempts <= maxAttempts) {
        userValue = document.getElementById('inp').value
        if (userValue < actualValue) {
            document.getElementById('display').innerHTML = 'Enter value greater than value entered ' + (maxAttempts - attempts) + ' attempts remaining'
        }
        else if(userValue > actualValue) {
            document.getElementById('display').innerHTML = 'Enter value lesser than value entered ' + (maxAttempts - attempts) + ' attempts remaining'
        }
        else {
            document.getElementById('display').innerHTML =  'Guess is correct, Congratulations!! You guessed it right in ' + attempts + ' attempts'
        }
    }
    else {
        document.getElementById('display').innerHTML =  'Maximum attempts reached!! Try again'
    }
}
