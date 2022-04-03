let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for(items of buttons){
    items.addEventListener('click',(e)=>{
       let buttonText = e.target.innerText;
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}