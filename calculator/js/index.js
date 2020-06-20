let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');//selects all the buttons
let screenValue = '';//initially screen value is blank
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;//gets the text inside the button
        console.log('Button text is ', buttonText);//this text will be show on console rather than the screen ,this is done to check whether the button text is being get or not
        if (buttonText == 'X') {                                        //checking if sign is multiplication
            buttonText = '*';
            screenValue += buttonText;//screenValue is a variable and contains the button text of the button clicked
            screen.value = screenValue;// value of the screenValue assigned to screen and visible to user
        }
        else if (buttonText == 'C') {
            screenValue = "";//if user presses clear screen it clears the screen .
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);/// eval javascript function for evaluating  arithmetic expression on the screen.
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

