const button = document.querySelector('button');

const inputItem = document.querySelector('input');

const unorderedList = document.querySelector('ul');

const addItem = function(){
    const inputValue = inputItem.value;
    document.querySelector('p').style.visibility = 'hidden';
    if(inputValue != ''){
        inputItem.value = '';
    
    const listItem = document.createElement('li');
    const listSpan = document.createElement('span');
    const listButton = document.createElement('button');

    listSpan.textContent = inputValue;
    listButton.textContent = 'Delete';

    listItem.appendChild(listSpan);
    listItem.appendChild(listButton);

    unorderedList.appendChild(listItem);
    inputItem.focus();
    }
    else{
        document.querySelector('p').style.visibility = 'visible';
    }
    listButton.addEventListener('click',function(){
        listItem.remove();
    });
}
button.addEventListener('click',addItem);