const puntos=document.getElementById("puntos");
puntos.innerHTML="Food";
window.addEventListener('keydown', keypress);

var contador=0;
function keypress(event){
    if(event.repeat==true){
        return;
    }
    console.log(event.code);
    if(event.code=='Space'){
        contador+=1;
        puntos.innerHTML=`Mice=Yummy${contador}`;

    } 
    if(contador>=10 && event.code=='KeyB'){
        contador-=10;
        puntos.innerHTML=`Mice=Yummy${contador}`;
        
    }

}