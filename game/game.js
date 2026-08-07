let player=document.getElementById("player");

let enemy=document.getElementById("enemy");
let mouse=document.getElementById("mouse");
let rock=document.getElementById("rock");
let lantern=document.getElementById("lantern");

let points=document.getElementById("points");

let score=0;
let running=true;



document.onclick=function(){

if(!running)return;

player.classList.remove("jump");

void player.offsetWidth;

player.classList.add("jump");

}




function moveObject(obj,speed){


let x=parseInt(obj.style.right || -50);


x+=speed;


obj.style.right=x+"px";


if(x>1000){

obj.style.right="-100px";


if(obj==lantern){

score+=10;

points.innerHTML=score;


}


}


}




setInterval(()=>{


if(!running)return;


moveObject(enemy,8);

moveObject(mouse,10);

moveObject(rock,9);

moveObject(lantern,7);



},30);





setInterval(()=>{


let p=player.getBoundingClientRect();


let enemies=[
enemy,
mouse,
rock
];


enemies.forEach(e=>{


let a=e.getBoundingClientRect();


if(
p.left<a.right &&
p.right>a.left &&
p.bottom>a.top
)

{

running=false;

document.getElementById("gameover").style.display="block";

}


});



let l=lantern.getBoundingClientRect();


if(
p.left<l.right &&
p.right>l.left
){

score+=10;

points.innerHTML=score;

lantern.style.right="-600px";

}


},50);






function restartGame(){

location.reload();

}
