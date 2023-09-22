var timer=60;
var hitrn=0;
var score=0;
function makebubble(){
    var clutter="";
    for (var i=1; i<309; i++){
    var rnm= (Math.floor(Math.random()*10));
    clutter+= `<div class="bubble">${rnm}</div>`
    }
    document.querySelector(".panel-bottom").innerHTML=clutter;
}

function runtime(){
   var timerval= setInterval(function(){
   if(timer>0){
    timer--;
    document.querySelector("#timerval").innerHTML=timer;
   } else{
    clearTimeout(timerval);
    document.querySelector(".panel-bottom").innerHTML="Game Over";
   }
   },1000)
}

function gethit(){
    hitrn= (Math.floor(Math.random()*10));
    document.querySelector("#hitval").innerHTML=hitrn;
}

function getscore(){
   score+=10;
   document.querySelector("#scoreval").innerHTML=score;
}

document.querySelector(".panel-bottom").addEventListener("click",function(dets){
    var clickednum= Number(dets.target.textContent);
    if(clickednum === hitrn){
        getscore();
        makebubble();
        gethit();
    }
})

runtime();
makebubble();
gethit();