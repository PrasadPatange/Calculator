let display = document.getElementById('display');
console.log(display);
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);
buttons.map( button =>{
    button.addEventListener('click' , (e) =>{
        console.log(e)
        console.log(e.target)
        console.log("Clicked : ",e.target.innerText)
        switch (e.target.innerText) {
            case "C":
                display.innerText = '';
                break;
            case "←":
                if(display.innerText){
                 display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch (error) {
                    display.innerText = "Error! Invalid Operation!"
                }
                break;
            default:
                display.innerText += e.target.innerText;
                break;
        }
    })
})