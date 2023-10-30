var timer = 60;
var score = 0;
var hitrn = 0; 
/*jispe click karoge wo element par event raise hoga, aur event listener
 naa milne par event elemnt ke parent par listener dhundega , waha bhi naa
 milne par event parent ke parent par listener dhundega*/

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
function makeBubble(){
    var clutter = "";

    for(var i=1; i<=70;i++){
        var rn = Math.floor(Math.random()*10)
        clutter +=`<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


function runTimer(){
    var timer1 = setInterval(function (){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timer1);
            document.querySelector("#pbtm").innerHTML = `<h1 id="loser">Game Over.<h1>`;
        }
       
    },1000);
}

document .querySelector("#pbtm")
.addEventListener("click" , function (dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit(); 
    }
});



runTimer();
getNewHit();
makeBubble();
