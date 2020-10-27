let doorImage1=document.getElementById('door1');
let doorImage2=document.getElementById('door2');
let doorImage3=document.getElementById('door3');
let numClosedDoors=3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath="https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let startButton=document.getElementById('start');

let resetButton=document.getElementById('reset');
let currentlyPlaying=true;

let botDoorPath="https://content.codecademy.com/projects/chore-door/images/robot.svg";

let beachDoorPath="https://content.codecademy.com/projects/chore-door/images/beach.svg";

let spaceDoorPath="https://content.codecademy.com/projects/chore-door/images/space.svg";


let yourScore=document.getElementById("yourScore");

let botScore=document.getElementById("botScore");
let yourCount=0;
let botCount=0;



doorImage1.onclick=()=>{
  
  if(!isClicked(doorImage1) && currentlyPlaying) {
  doorImage1.src=openDoor1;
  playDoor(doorImage1);
  }
}

doorImage2.onclick=()=>{

  if(!isClicked(doorImage2) && currentlyPlaying) {
  doorImage2.src=openDoor2;
  playDoor(doorImage2);
  
  }
}
doorImage3.onclick=()=>{
  if(!isClicked(doorImage3) && currentlyPlaying) {
  doorImage3.src=openDoor3;
  playDoor(doorImage3);
  
  }
}

const startRound=()=>{
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  numClosedDoors=3;
  startButton.innerHTML='Good luck!'
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};


startButton.onclick = () => {
  if(!currentlyPlaying){
 startRound();
  }
 
}

const gameOver=(status)=>{
  if(status === "win"){
    startButton.innerHTML="You win! Play again?";

  }
  else{
    startButton.innerHTML="Game Over! Play again?";

  }
  currentlyPlaying= false;
  winningStreak();

}


const randomChoreDoorGenerator=()=>{
  let choreDoor=Math.floor(Math.random(2)*numClosedDoors);

  if(choreDoor===0){
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath;

  }
  else if(choreDoor===1){
    openDoor2=botDoorPath;
    openDoor3=beachDoorPath;
    openDoor1=spaceDoorPath;
    
  }
  else if(choreDoor===2){
    openDoor3=botDoorPath;
    openDoor1=beachDoorPath;
    openDoor2=spaceDoorPath;
  }
}

startRound();

const isBot=(door)=>{
  if(door.src === botDoorPath){
  return true;
  }
 
  else {
    return false;
}
}

const isClicked=(door)=>{
  if(door.src===closedDoorPath){
    return false
  }
  else{
    return true;
  }

}

const playDoor=(door)=>{
  numClosedDoors--;
  if(numClosedDoors===0){
    gameOver('win');
  }
  else if(isBot(door)){
    gameOver();
    
  }
}




const winningStreak=()=>{
    
    

    if(startButton.innerHTML==="You win! Play again?"){
    yourCount+=1;
    
    
  }
  else if(startButton.innerHTML==="Game Over! Play again?"){
    botCount+=1

  }
  yourScore.innerHTML=yourCount;
  botScore.innerHTML=botCount;

}



resetButton.onclick = () => {
  yourScore.innerHTML=0;
  botScore.innerHTML=0;
  yourCount=0;
  botCount=0;
  startRound();
  

 
}
