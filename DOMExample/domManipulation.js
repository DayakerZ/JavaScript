// console.log(document.querySelector(".p").textContent);
// document.querySelector(".p").textContent = 'Hello Daya';

// document.querySelector('.number-input').value = 10;

const number = Math.trunc(Math.random()*20) + 1;
console.log(number);
document.querySelector('.number').textContent = number;

let score = 20;
document.querySelector('.score').textContent = score;
// var highScore = 10;
// document.querySelector('.high-score').textContent = highScore;
document.querySelector('.btn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.number-input').value);

    //no number
    if (!guess) {
        document.querySelector('.output-message').textContent = 'No number entered';   
    }

    //when number is entered
    else{
        
        //when the guess is correct
        if(guess === number){
            if (score > 0) {
                document.querySelector('.output-message').textContent = 'Correct number';
                document.querySelector('body').style.backgroundColor = ' rgb(112, 185, 118)';
                document.querySelector('.number').style.visibility = 'visible';
            }

        }


        //when guess is greater
        else if(guess > number){
            if(score > 0){
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('.output-message').textContent = 'number is too high';
            }
            else{
                document.querySelector('.output-message').textContent = 'You lost the game';
                document.querySelector('body').style.backgroundColor = 'rgb(250, 28, 12)';
            }
        }
            

        //when the guess is lesser
        else if(guess < number){
            if(score > 0){
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('.output-message').textContent = 'number is too low';
            }
            else{
                document.querySelector('.output-message').textContent = 'You lost the game';
                document.querySelector('body').style.backgroundColor = 'rgb(250, 28, 12)';
            }
        }
    }
});

//implementing again functionality
document.querySelector('.a-btn').addEventListener('click',function(){
    window.location.reload();
});
