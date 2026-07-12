const start=document.getElementById("start");
start.innerHTML="GO TO START: 10";
window.addEventListener('keydown', keypress);

const HONK = document.getElementById('honk');
HONK.volume= 0.3;
HONK.loop=false;

var extra=0;
var contador=10;

function keypress(event){
    if(event.repeat==true){
        return;  
    }

    console.log(event.code);
    if(event.code=='Space'){
        contador-=1 + extra;
        HONK.pause();
        HONK.currentTime = 0.2;
        HONK.play();
    start.innerHTML=`GO TO START: ${contador}`;

         if(contador<=0){
            contador=0;
            window.location.replace("./game.html");

        }
        
    }

}

let canvas = document.getElementById('confetti');

canvas.width = 1100;
canvas.height = 595;

let ctx = canvas.getContext('2d');
let pieces = [];
let numberOfPieces = 50;
let lastUpdateTime = Date.now();

function randomColor () {
    let colors = ['#6a7e61', 'rgb(147, 173, 147)', 'rgb(178, 178, 222)', 'rgb(125, 175, 175)', 'rgb(133, 119, 133)', 'rgb(193, 193, 155)'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function update () {
    let now = Date.now (),
        dt = now - lastUpdateTime;

    for (let i = pieces.length - 1; i>= 0; i--) {
    let p = pieces[i];

    if (p.y > canvas.height){
        pieces.splice(i, 1);
        continue;
    }

    p.y += p.gravity;
    p.rotation += p.rotationSpeed + dt;

    }

    while (pieces.length < numberOfPieces){
    pieces.push(new Piece(Math.random() * canvas.width, -20));
    }

    lastUpdateTime = now;

    setTimeout(update, 1);

}

function draw () {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(function (p){
        ctx.save();

        ctx.fillStyle = p.color;

        ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
        ctx.rotate(p.rotation);

        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);

        ctx.restore();
    });

    requestAnimationFrame(draw);

}

function Piece (x, y){
    this.y = y;
    this.x = x;
    this.size = (Math.random() * 0.5 + 0.75) * 7.5;
    this.gravity = (Math.random() * 0.5 + 0.75) * 0.25;
    this.rotation = (Math.PI * 2) * Math.random();
    this.rotationSpeed = (Math.PI * 2) * Math.random() * 0.1;
    this.color = randomColor();

}

while (pieces.length < numberOfPieces){
    pieces.push(new Piece(Math.random() * canvas.width, Math.random() * canvas.height));
}

update();
draw();