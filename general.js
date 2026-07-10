const puntos=document.getElementById("puntos");
puntos.innerHTML="Food";
window.addEventListener('keydown', keypress);
window.addEventListener(`keyup`, keyUP)

var extra=0;
var Cost=10;
var price=100;
var Pricy=250;
var Costs=1000;
var Costo=5000;
var contador=0;

const owly=document.getElementById("owly")  

    //Owl
function keypress(event){
    if(event.repeat==true){
        return;
    }
    console.log(event.code);
    if(event.code=='Space'){
        contador+=1 + extra;
        puntos.innerHTML=`Food=Yummy${contador}`;


    } 

if(event.code=='Space'){
        owly.classList.add("click");
}

    //Araña
    if(contador>=Cost && event.code=='KeyB'){
        contador-=Cost;
        extra+=1;
        Cost*=2;
        spidy.innerHTML=`${Cost}`;
        puntos.innerHTML=`Insects=Yummy${contador}`;
        
    }

    //Ratón
    if(contador>=price && event.code=='KeyN'){
        contador-=100;
         extra+=9;
          price*=2;
        micy.innerHTML=`${price}`;
        puntos.innerHTML=`Mouse=Yummy${contador}`;
        
    }

    //Rana
    if(contador>=Pricy && event.code=='KeyM'){
        contador-=250;
         extra+=49;
          Pricy*=2;
        frogy.innerHTML=`${Pricy}`;
        puntos.innerHTML=`Frog=Yummy${contador}`;
        
    }

    //Pájaro
    if(contador>=Costs && event.code=='KeyK'){
        contador-=1000;
         extra+=99;
          Costs*=2;
        birdy.innerHTML=`${Costs}`;
        puntos.innerHTML=`Bird=Yummy${contador}`;
        
    }

    //Conejo
    if(contador>=Costo && event.code=='KeyL'){
        contador-=5000;
         extra+=300;
          Costo*=2;
        bonny.innerHTML=`${Costo}`;
        puntos.innerHTML=`Rabbit=Yummy${contador}`;
        
    }

}

function keyUP(event){
    owly.classList.remove("click");
}