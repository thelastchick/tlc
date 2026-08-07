function copyContract(){

const contract =
"0x04B757D7Cb621BFb846d47B161857D5E59F5D40C";


navigator.clipboard.writeText(contract);


alert("Contract address copied!");

}




function changeLanguage(lang){


if(lang==="fa"){

document.documentElement.lang="fa";


alert("نسخه فارسی به زودی فعال می‌شود.");

}


else if(lang==="ar"){


document.documentElement.lang="ar";


alert("Arabic version coming soon.");

}


else{


document.documentElement.lang="en";


}


}




window.addEventListener("load",()=>{


setTimeout(()=>{


const loader=document.getElementById("loader");


if(loader){

loader.style.display="none";

}


},2000);


});