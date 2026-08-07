let score=0;

let playing=true;

let player=document.getElementById("player");

let enemy=document.getElementById("enemy");

let lantern=document.getElementById("lantern");

let points=document.getElementById("points");

let gameOver=document.getElementById("gameover");


let jumping=false;



// پرش با کلیک

document.onclick=function(){


if(!jumping){

jumping=true;


player.classList.add("jump");


setTimeout(()=>{


player.classList.remove("jump");

jumping=false;


},650);


}


};





function spawn(){


if(!playing)return;



let item;



// بیشتر گربه، گاهی فانوس

if(Math.random()<0.75){

item=enemy;

}else{

item=lantern;

}



let x=-100;


item.style.right=x+"px";



let move=setInterval(()=>{


x+=6;


item.style.right=x+"px";



let p=player.getBoundingClientRect();

let e=item.getBoundingClientRect();



// برخورد دقیق

if(

p.left < e.right-25 &&

p.right > e.left+25 &&

p.bottom-30 < e.top+20

){



// فانوس

if(item===lantern){


score+=10;

points.innerHTML=score;


item.style.right="-300px";


}



// گربه

else{


playing=false;

gameOver.style.display="block";


}



clearInterval(move);


}




if(x>1000){


clearInterval(move);


item.style.right="-300px";


}


},30);



}





// هر 3 ثانیه یک آیتم

setInterval(()=>{


spawn();


},3000);
