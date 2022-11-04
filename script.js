let pcscore=0;
let playerscore=0;
for(let i=0;i<5;i++){
function computerSelection (min,max){
   return (Math.floor(Math.random()*(max - min +1)+min));
   
   

}
function playmech (){
   
    
     if ((playerChoice=='rock'&& choice==3)
   ||(playerChoice=='paper'&& choice==1)||(playerChoice=='scisors'&& choice==2) ){
    console.log('you won!');
    playerscore++;}
    else if ((playerChoice=='rock'&&choice==1)
    ||(playerChoice=='paper'&&choice==2)||(playerChoice==3&&choice==3)){
        console.log("it's a tie")
    }
    else {console.log('you lost!!');
    pcscore++;
}
}

let playerChoice=prompt("choose rock-paper-scisors");

let choice=computerSelection(1,3);







console.log (playerChoice,choice)

playmech(playerChoice,choice)

function pcelections (){
    let election;
    if (choice==1){
    return election="rock"
    }else if (choice==2){
    return election="paper"
    }else if (choice==3){
       return election="scisors"
    }
}




    console.log ("you choose "+playerChoice+" and the pc choose "+pcelections(choice))
    
    


}

console.log("your score is: "+playerscore+" and the pc score is "+pcscore)