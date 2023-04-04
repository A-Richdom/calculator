let display2 =document.getElementById('display2');
let display1 =document.getElementById('display1');
let canClear = false

// clear the screen to zero
function clearScreen(){
    display2.innerHTML='0'
    display1.innerHTML=''
}
//for display on the screen
function display(message) {
    if (display2.innerHTML=='0') {
        display2.innerHTML=''
    }
        display2.innerHTML+=message
}
//to clear the screen after the operator sign has been entered
function display(message){
    if (canClear) {
        canClear=false
        display2.innerHTML=''
    }
    display2.innerHTML+=message
}

//operators function
function operator(message){
    canClear=true
    display1.innerHTML= display2.innerHTML + message
}
//backspace function
function backspace() {
    let val = document.getElementById('display2').innerHTML
    val.toString
    display2.innerHTML =val.slice(0, -1)
    if (display2.innerHTML==''){
        display2.innerHTML='0'
    }
}
