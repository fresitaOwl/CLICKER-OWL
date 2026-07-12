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

var STORE=2.2;
var BUY=1.5;

const seaBackground = document.getElementById('hoot');
seaBackground.volume=1;
seaBackground.loop=false;

const HONK = document.getElementById('honk');
HONK.volume= 0.3;
HONK.loop=false;

const owly=document.getElementById("owly");

function lever(mouseState){
    if(mouseState=="hold" && button!=Owl){

            if(button==Spidy){
                if(contador>=Cost){
                    seaBackground.play();
                    contador-=Cost;
                    extra+=1;
                    Cost*=2;
                    spidy.innerHTML=`${Cost}`;
        puntos.innerHTML=`Insects=Yummy${contador}`;
        
            }

        }

            if(button==Micy){
                 if(contador>=price){
                    seaBackground.play();
                    contador-=price;
                    extra+=9;
                    price*=2;
                    micy.innerHTML=`${price}`;
        puntos.innerHTML=`Mouse=Yummy${contador}`;
        
    }

            }

            if(button==Froggy){
                if(contador>=Pricy){
                    seaBackground.play();
                    contador-=Pricy;
                    extra+=100;
                    Pricy*=2;
                    frogy.innerHTML=`${Pricy}`;
        puntos.innerHTML=`Frog=Yummy${contador}`;
        
    }
            }
            
            if(button==Birdy){
                if(contador>=Costs){
                    seaBackground.play();
                    contador-=Costs;
                    extra+=400;
                    Costs*=2;
                    birdy.innerHTML=`${Costs}`;
        puntos.innerHTML=`Bird=Yummy${contador}`;
        
    }
            }

            if(button==Ribby){
                if(contador>=Costo){
                    seaBackground.play();
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

const spidyprogress=document.getElementById("spidyprogress");
const micyprogress=document.getElementById("micyprogress");
const froggyprogress=document.getElementById("froggyprogress");
const birdyprogress=document.getElementById("birdyprogress");
const ribbyprogress=document.getElementById("ribbyprogress");

const HIDESTORE=document.getElementById("HIDESTORE");
const changestore=document.getElementById("changestore")

var clickHold=false;
var timing=0;
var fullbuy=0;
var fullstore=0;

    //Owl
function keypress(event){
    if(event.code!='Space'){
        return;
    }

    if(clickHold==false){
        clickHold=true;
        timing=performance.now();
        fullbuy = (BUY*1000);
        fullstore = (STORE*1000);
         if(button==Owl){
        contador+=1 + extra;
        
        
        owly.classList.add("click");
        
        if(contador>=kaboom){
            contador=0;
            window.location.replace("./second.html");
    
        }

        puntos.innerHTML=`Food=Yummy${contador}`;
        HONK.pause();
        HONK.currentTime = 0.2;
        HONK.play();
            } 
        }
        
            var byemoney = (performance.now()-timing)/fullstore;
            var mathing = (performance.now()-timing)/fullbuy;
        if (byemoney>=1){
                byemoney=1;
        }

        if (mathing>=1){
            HIDESTORE.style.display="flex";
        }

    changestore.style.width= `${byemoney*100}%`;
            
         if(button==Spidy){
            var maths = (performance.now()-timing)/fullbuy;

            if (maths>=1){
                maths=1;
            }

    spidyprogress.style.width= `${maths*87}%`;
        }

         if(button==Micy){
            var maths = (performance.now()-timing)/fullbuy;

            if (maths>=1){
                maths=1;
            }

    micyprogress.style.width= `${maths*87}%`;
        }

         if(button==Froggy){
            var maths = (performance.now()-timing)/fullbuy;

            if (maths>=1){
                maths=1;
            }

    froggyprogress.style.width= `${maths*87}%`;
        }

         if(button==Birdy){
            var maths = (performance.now()-timing)/fullbuy;

            if (maths>=1){
                maths=1;
            }

    birdyprogress.style.width= `${maths*87}%`;
        }

         if(button==Ribby){
            var maths = (performance.now()-timing)/fullbuy;

            if (maths>=1){
                maths=1;
            }

    ribbyprogress.style.width= `${maths*87}%`;
        }
    }



function keyUP(event){
    if(event.code!='Space'){
        return;
    }

    spidyprogress.style.width= `0%`;
    micyprogress.style.width= `0%`;
    froggyprogress.style.width= `0%`;
    birdyprogress.style.width= `0%`;
    ribbyprogress.style.width= `0%`;
    changestore.style.width= `0%`;
    HIDESTORE.style.display=`none`;

    owly.classList.remove("click");
     clickHold=false;
     let clocktime=(performance.now()-timing)/1000;
    if(clocktime>=STORE){
        lever("Store");
    }
     
    else if(clocktime>=BUY){
        lever("hold");
     }
    
     else{
        lever("click");
     }

    
}