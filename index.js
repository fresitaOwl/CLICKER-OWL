const start=document.getElementById("start");
start.innerHTML="GO TO START: 10";
window.addEventListener('keydown', keypress);

var extra=0;
var contador=10;

function keypress(event){
    if(event.repeat==true){
        return;  
    }

    console.log(event.code);
    if(event.code=='Space'){
        contador-=1 + extra;
    start.innerHTML=`GO TO START: ${contador}`;

         if(contador<=0){
            contador=0;
            window.location.replace("./game.html");

        }
        
    }

}