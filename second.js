const back=document.getElementById("back");
back.innerHTML="BACK TO START: 10";
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
    back.innerHTML=`BACK TO START: ${contador}`;

         if(contador<=0){
            contador=0;
            window.location.replace("./index.html");

        }
        
    }

}