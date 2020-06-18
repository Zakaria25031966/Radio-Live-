    if (screen.width < 700){
        document.getElementById("granddiv").style.width = screen.width + "px";
    }
    
    if (screen.height < 900){
        document.getElementById("granddiv").style.height = screen.height + "px" ;
        }
    if (screen.width < 700){
            document.getElementById("divinpetitdiv2").style.width = screen.width + "px";
        }

    document.getElementById("petitdiv2").style.height = screen.height -33 + "px";


var vtest = 1 ;
function f1(){
    if(vtest == 1){
        var v1 = document.getElementById("audio");
        v1.play();
        document.getElementById("playimg").setAttribute("src","pause.png");
        vtest = 2 ;
       }
    else{
        document.getElementById("audio").pause();
        document.getElementById("playimg").setAttribute("src","play.png");
        vtest = 1 ;
    }
}


    var namesofradios=[];
    namesofradios[0]= "Hit Radio";
    namesofradios[1]= "Med Radio";
    namesofradios[2]= "Medi 1";
    namesofradios[3]= "Quran";

    var urlofradios=[];
        urlofradios[0] = " http://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3?_=0.5832020096175536";
        urlofradios[1] = " http://medradio-maroc.ice.infomaniak.ch/medradio-maroc-64.mp3?_=0.7133263613029148";
        urlofradios[2] = " http://live.medi1.com/medi1#.mp3";
        urlofradios[3] = " http://158.69.4.171:8087/;stream/1";
        
        

    var counter = 0 ;
function f2(){

        document.getElementById("audio").src = urlofradios[counter];
        document.getElementById("p").innerHTML = namesofradios[counter];
}
onload = new f2();




function f3(){
    if(counter < 3){ 
    ++counter;
    document.getElementById("audio").src = urlofradios[counter];
    document.getElementById("p").innerHTML = namesofradios[counter];
    document.getElementById("audio").play();
    }

}
function f4(){
    if(counter > 0){ 
        --counter;
        document.getElementById("audio").src = urlofradios[counter];
        document.getElementById("p").innerHTML = namesofradios[counter];
        document.getElementById("audio").play();
        } 
    }





