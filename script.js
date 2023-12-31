'use strict';

let secretNumber =Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value) ;
    console.log(guess);
    // When there is no input
    if (!guess) {
        //document.querySelector('.message').textContent = "⛔ No number!";
        displayMessage("⛔ No number!");
        //When player wins 
    } else if (guess === secretNumber){
        //document.querySelector('.message').textContent = '🎉Correct Number ';
        displayMessage('🎉Correct Number! ');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        //When guess is wrong
    }else if(guess !== secretNumber){
         if (score > 1){
            //document.querySelector('.message').textContent =  guess > secretNumber ? '📈 Too high!' : '📉 To low !';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 To low !');
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            //document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }   
        //When guess is too high 
    // }else if ( guess > secretNumber){
       
    //     //When guess is too low
    // }else if ( guess < secretNumber){
    //     if (score > 1){
    //         document.querySelector('.message').textContent = '📉 To low !';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }


});

//Implement a reset functionality, so that the player can make a new guess

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;


    document.querySelector('.score').textContent = score;

    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';


    document.querySelector('.guess').value = "";
    
    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('number').style.width = '15rem';

});
