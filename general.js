const puntos=document.getElementById("puntos");
puntos.innerHTML="Food";
window.addEventListener('keydown', keypress);
window.addEventListener(`keyup`, keyUP)

var extra=0;
var Cost=10;
var price=100;
var Pricy=500;
var Costs=5000
var Costo=50000;
var contador=0;
var kaboom=1000000;

const owly=document.getElementById("owly")  

    //Owl
function keypress(event){
    if(event.repeat==true){
        return;  
    }
    console.log(event.code);
    if(event.code=='Space'){
        contador+=1 + extra;
        
        owly.classList.add("click");
        
        if(contador>=kaboom){
            contador=0;
            window.location.replace("./second.html");

        }

        puntos.innerHTML=`Food=Yummy${contador}`;
        


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
        contador-=price;
         extra+=9;
          price*=2;
        micy.innerHTML=`${price}`;
        puntos.innerHTML=`Mouse=Yummy${contador}`;
        
    }

    //Rana
    if(contador>=Pricy && event.code=='KeyM'){
        contador-=Pricy;
         extra+=100;
          Pricy*=2;
        frogy.innerHTML=`${Pricy}`;
        puntos.innerHTML=`Frog=Yummy${contador}`;
        
    }

    //Pájaro
    if(contador>=Costs && event.code=='KeyK'){
        contador-=Costs;
         extra+=400;
          Costs*=2;
        birdy.innerHTML=`${Costs}`;
        puntos.innerHTML=`Bird=Yummy${contador}`;
        
    }

    //Conejo
    if(contador>=Costo && event.code=='KeyL'){
        contador-=Costo;
         extra+=5000;
          Costo*=2;
        bonny.innerHTML=`${Costo}`;
        puntos.innerHTML=`Rabbit=Yummy${contador}`;
        
    }

}

function keyUP(event){
    owly.classList.remove("click");

}