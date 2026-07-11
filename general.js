const puntos=document.getElementById("puntos");
puntos.innerHTML="Im hungry :[";
window.addEventListener('keydown', keypress);
window.addEventListener(`keyup`, keyUP)

const SPIDER=document.getElementById("SPIDER");
const MOUSE=document.getElementById("MOUSE");
const FROG=document.getElementById("FROG");
const BIRD=document.getElementById("BIRD");
const RABBIT=document.getElementById("RABBIT");

const Spidy="Spidy";
const Micy="Micy";
const Froggy="Froggy";
const Birdy="Birdy";
const Ribby="Ribby";
const Owl="Owl";

var button=Owl;
var lastUpgrade=Spidy;


var extra=0;
var Cost=10;
var price=100;
var Pricy=500;
var Costs=5000
var Costo=50000;
var contador=0;
var kaboom=1000000;

const seaBackground = document.getElementById('hoot');
seaBackground.volume=1;
seaBackground.loop=true;

const owly=document.getElementById("owly");

function lever(mouseState){
    seaBackground.play();
    if(mouseState=="hold" && button!=Owl){

            if(button==Spidy){
                if(contador>=Cost){
                    contador-=Cost;
                    extra+=1;
                    Cost*=2;
                    spidy.innerHTML=`${Cost}`;
        puntos.innerHTML=`Insects=Yummy${contador}`;
        
            }

        }

            if(button==Micy){
                 if(contador>=price){
                    contador-=price;
                    extra+=9;
                    price*=2;
                    micy.innerHTML=`${price}`;
        puntos.innerHTML=`Mouse=Yummy${contador}`;
        
    }

            }

            if(button==Froggy){
                if(contador>=Pricy){
                    contador-=Pricy;
                    extra+=100;
                    Pricy*=2;
                    frogy.innerHTML=`${Pricy}`;
        puntos.innerHTML=`Frog=Yummy${contador}`;
        
    }
            }
            
            if(button==Birdy){
                if(contador>=Costs){
                    contador-=Costs;
                    extra+=400;
                    Costs*=2;
                    birdy.innerHTML=`${Costs}`;
        puntos.innerHTML=`Bird=Yummy${contador}`;
        
    }
            }

            if(button==Ribby){
                if(contador>=Costo){
                    contador-=Costo;
                    extra+=5000;
                    Costo*=2;
                    bonny.innerHTML=`${Costo}`;
        puntos.innerHTML=`Rabbit=Yummy${contador}`;
        
    }
            }
    }
        console.log(mouseState);
    if(mouseState=="Store"){
        if(button==Owl){
        button=lastUpgrade;
    }
        else{
            button=Owl;
            SPIDER.classList.remove("select");
            MOUSE.classList.remove("select");
            FROG.classList.remove("select");
            BIRD.classList.remove("select");
            RABBIT.classList.remove("select");
            return;
        }
    }
    
    if(button!=Owl){
        
    if(button==Spidy){
        if(mouseState == "click"){
        button=Micy;
        SPIDER.classList.remove("select");
        }
        else {
            SPIDER.classList.add("select");
        }
        lastUpgrade=button;
    }

      else if(button==Micy){
         if(mouseState == "click"){
        button=Froggy;
        MOUSE.classList.remove("select");
        }
        else {
            MOUSE.classList.add("select");
        }
        lastUpgrade=button;
    }

      else if(button==Froggy){
         if(mouseState == "click"){
        button=Birdy;
        FROG.classList.remove("select");
        }
        else {
            FROG.classList.add("select");
        }
        lastUpgrade=button;
        
    }
      else if(button==Birdy){
         if(mouseState == "click"){
        button=Ribby;
        BIRD.classList.remove("select");
        }
        else {
            BIRD.classList.add("select");
        }
        lastUpgrade=button;
    }

      else if(button==Ribby){
         if(mouseState == "click"){
        button=Spidy;
        RABBIT.classList.remove("select");
        }
        else {
            RABBIT.classList.add("select");
        }
        lastUpgrade=button;
    }

    
    if(mouseState!="animation"){
    lever("animation");
    }

    }

}

var clickHold=false;
var timing=0;

    //Owl
function keypress(event){
    if(event.code!='Space'){
        return;
    }

    if(clickHold==false){
        clickHold=true;
        timing=performance.now();
         if(button==Owl){
        contador+=1 + extra;
        
        owly.classList.add("click");
        
        if(contador>=kaboom){
            contador=0;
            window.location.replace("./second.html");

        }

        puntos.innerHTML=`Food=Yummy${contador}`;
        
            } 
        }

    }



function keyUP(event){
    if(event.code!='Space'){
        return;
    }
    owly.classList.remove("click");
     clickHold=false;
     let clocktime=(performance.now()-timing)/1000;
    if(clocktime>=1.7){
        lever("Store");
    }
     
    else if(clocktime>=0.2){
        lever("hold");
     }
    
     else{
        lever("click");
     }

    
}