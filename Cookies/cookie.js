var selectColor = document.getElementById("select-color");
//cookies are small text files that a browser stores in the visitors computer.
//it is a string of name-value pairs

window.onload = () =>
{
    if(document.cookie.length!=0){
        let cookieArray = document.cookie.split("=");
        document.bgColor = cookieArray[1];
        selectColor.value = cookieArray[1];
    }
}
selectColor.onchange = () => {
    if(selectColor.value != "Select Color"){
        document.bgColor = selectColor.value;
        document.cookie = 'color=' + selectColor.value+';max-age=max-age-in-seconds';
    }
};

// document.cookie = 'color=' + selectColor.value+';max-age=max-age-in-seconds';