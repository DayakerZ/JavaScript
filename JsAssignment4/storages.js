var localScore = document.querySelector('.local');
var sessionScore = document.querySelector('.session');
var localIncrement = document.querySelector('.inc');

localIncrement.addEventListener('click',function(){
    
    let lScore = Number(localScore.textContent) + 1;
    localScore.textContent = lScore;
    localStorage.setItem("localScore",lScore)

    let sScore = Number(sessionScore.textContent)+1;
    sessionScore.textContent = sScore;
    sessionStorage.setItem("sessionScore",sScore);
});

if(localStorage.getItem('localScore') != null){
    localScore.textContent = localStorage.getItem('localScore');
}
if(sessionStorage.getItem('sessionScore') != null){
    sessionScore.textContent = sessionStorage.getItem('sessionScore');
}
   






