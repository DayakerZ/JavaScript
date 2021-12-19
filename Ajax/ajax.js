const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function(){
    const verse = verseChoose.value;
    updateDisplay(verse);
};

function updateDisplay(verse) {
    //constructing url
    verse = verse.replace(" ","");
    verse = verse.toLowerCase();
    let url = verse +'.txt';

    // //XHR part (creating Oject and setting connection)
    // let request = new XMLHttpRequest();
    // request.open('GET',url);
    
    // //setting the response type
    // request.responseType = 'text';

    // //handling asynchronous network result
    // request.onload = function(){
    //     poemDisplay.textContent = request.response;
    // }

    // //sending response
    // request.send();

    // fetch(url).then(function(response){
    //     response.text().then(function(text){
    //         poemDisplay.textContent = text;
    //     })
    // });

    fetch(url).then((response) => response.text()).
    then((text)=>poemDisplay.textContent = text);

}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';