let score=0;
let playing=true;

let cat=document.getElementById("cat");
let lantern=document.getElementById("lantern");
let light=document.getElementById("light");


let catPosition=-80;


function moveCat(){

if(!playing)return;


catPosition+=3;

cat.style.right=catPosition+"px";


if(catPosition>650){

gameOver();

}


requestAnimationFrame(moveCat);

}



function throwLantern(){

if(!playing)return;


lantern.style.display="block";
light.style.display="block";


let x=150;


let move=setInterval(()=>{


x+=15;


lantern.style.left=x+"px";
light.style.left=x+"px";


let catX=cat.offsetLeft;


if(x>catX-40){


score++;


document.getElementById("points").innerHTML=score;


catPosition=-80;


cat.style.right=catPosition+"px";


lantern.style.display="none";
light.style.display="none";


clearInterval(move);


}


if(x>900){

clearInterval(move);

lantern.style.display="none";
light.style.display="none";

}


},30);


}



document.getElementById("game").onclick=function(){

throwLantern();

}



function gameOver(){

playing=false;

document.getElementById("over").style.display="block";

}



function restart(){

score=0;

document.getElementById("points").innerHTML=0;

catPosition=-80;

cat.style.right=catPosition+"px";


document.getElementById("over").style.display="none";

playing=true;

moveCat();

}


moveCat();