var varaudio = document.getElementById("audio");
function fvolume(){ 
    varaudio.volume = 50/100 ;
    var varinput_volume = document.getElementById("input_volume");
    varaudio.volume = varinput_volume.value / 100;
}



function fcolor1(){
    document.body.style = "background: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)";
}
function fcolor2(){
    document.body.style ="background: linear-gradient(to right, #ef3b36, #ffffff);";
}
function fcolor3(){
    document.body.style = "background: linear-gradient(to right, #fffc00, rgb(249, 242, 175));";
}
function fcolor4(){
    document.body.style = "background:linear-gradient(to right,#ff7e5f, #feb47b)";
}
function fcolor5(){
    document.body.style = "background: linear-gradient(to right, #ed4264, #ffedbc)";
}
function fcolor6(){
    document.body.style = "background:rgba(17, 20, 64, 0.76)";
}
function fcolor7(){
    document.body.style = "background-image: linear-gradient(to right, #feada6 0%, #f5efef 100%)";
}
function fcolor8(){
    document.body.style = "background-image:linear-gradient(to right,black,white)";
}

