let score = 0;
let playing = false;

const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const mouse = document.getElementById("mouse");
const rock = document.getElementById("rock");
const lantern = document.getElementById("lantern");

const points = document.getElementById("points");
const gameOver = document.getElementById("gameover");


let jumping = false;


// شروع بازی
document.onclick = function(){

    if(!playing){
        playing = true;
        gameOver.style.display="none";
    }

    if(!jumping){

        jumping=true;

        player.classList.add("jump");

        setTimeout(()=>{

            player.classList.remove("jump");
            jumping=false;

        },650);

    }

};



// فقط یک مانع فعال باشد
let objects=[enemy,mouse,rock,lantern];

function spawn(){

    if(!playing) return;


    objects.forEach(o=>{
        o.style.right="-200px";
    });


    let random = Math.floor(Math.random()*4);

    let obj = objects[random];


    let position=-100;

    obj.style.right=position+"px";


    let move=setInterval(()=>{


        if(!playing){

            clearInterval(move);
            return;

        }


        position+=6;

        obj.style.right=position+"px";


        let p=player.getBoundingClientRect();
        let o=obj.getBoundingClientRect();



        // برخورد دقیق‌تر
        if(
        p.left < o.right-20 &&
        p.right > o.left+20 &&
        p.bottom > o.top+20
        ){

            if(obj==lantern){

                score+=10;
                points.innerHTML=score;

                obj.style.right="-500px";

            }

            else{

                playing=false;
                gameOver.style.display="block";

            }


            clearInterval(move);

        }


        if(position>900){

            clearInterval(move);
            obj.style.right="-300px";

        }



    },30);


}



// هر چند ثانیه یک چیز جدید
setInterval(()=>{

    spawn();

},2500);
