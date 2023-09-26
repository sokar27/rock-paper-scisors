let pcscore=0;
let playerscore=0;
let round=0;
let choice;
const selecpiedra=document.querySelector('#imagenpiedra');
const selecpapel=document.querySelector('#imagenpapel');
const selecttijera=document.querySelector('#imagentijera');
const seleccuerpo=document.getElementById("cuerpo");
const seleccoment=document.querySelector('#comentarios');


function computerSelection (min,max){
   return (Math.floor(Math.random()*(max - min +1)+min));
   
   

}




selecpiedra.addEventListener('click',funsionpiedra);
selecpapel.addEventListener('click',funsionpapel);
selecttijera.addEventListener('click',funsiontijera);


function funsionpiedra(){
   let playerchoice='piedra';
 playmech(playerchoice,choice);
 fround();
}


function funsionpapel(){
   let playerchoice='papel';
   playmech(playerchoice,choice);
   ;
    fround();
}


function funsiontijera(){
   let playerchoice='tijeras';
   
    playmech(playerchoice,choice);
    fround();
}























function playmech (playerchoice,choice){
    choice=computerSelection(1,3);
    console.log(choice);
    console.log(playerchoice);
    let victoria
    
     if ((playerchoice=='piedra'&& choice==3)
   ||(playerchoice=='papel'&& choice==1)||(playerchoice=='tijeras'&& choice==2) ){
    console.log('you won!');
    playerscore++;
    pcelections(choice);
    victoria ="ganaste!"
    log(playerchoice,choice, victoria);
    round++;
    
}
    else if ((playerchoice=='piedra'&&choice==1)
    ||(playerchoice=='papel'&&choice==2)||(playerchoice==3&&choice==3)){
        console.log("it's a tie")
        pcelections(choice);
        
        round++;
        victoria="es un empate!"
        log(playerchoice,choice,victoria);
    }
    else {console.log('you lost!!');
    pcscore++;
    round++
    pcelections(choice);
    victoria="perdiste!"
    log(playerchoice,choice,victoria);
    
}
}
function fround(){
    if (round==5){
       seleccuerpo.style.display="none";
       if (pcscore>playerscore){
        seleccoment.textContent=`tu tienes ${playerscore} puntos y la pc tiene ${pcscore} puntos, perdiste`
   } else if(pcscore<playerscore){
    seleccoment.textContent=`tu tienes ${playerscore} puntos y la pc tiene ${pcscore} puntos, ganaste`
   }
    } 

}













function pcelections (choice){
    let election;
    if (choice==1){
    return election="rock"
    }else if (choice==2){
    return election="paper"
    }else if (choice==3){
       return election="scisors"
    }
}



function log(playerchoice,choice,victoria){
    if (choice==1){
        seleccoment.textContent=`tu eliges ${playerchoice} y la pc elige piedra, ${victoria}`;
    }
    else if(choice==2){
        seleccoment.textContent=`tu eliges ${playerchoice} y la pc elige papel, ${victoria}`;
    }
    else if(choice==3){
        seleccoment.textContent=`tu eliges ${playerchoice} y la pc elige tijeras, ${victoria}`;
    }
}





//console.log("your score is: "+playerscore+" and the pc score is "+pcscore)