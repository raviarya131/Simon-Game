
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
let gameseq=[];
let userseq=[];
let level=0;
let started=false;

const sounds = {
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    purple: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
    error: new Audio("https://s3.amazonaws.com/adam-recvlohe-sounds/error.wav")
}

let btns =["yellow","red","purple","green"];
document.addEventListener("keypress",()=>{  
    if(started==false)
        {
            reset();
            console.log("game started");
            started=true;
            levelUp();

           //Omitted code here
           //Write your code here
        }

})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
        //Omitted code here
           //Write your code here
    },400);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
       //Omitted code here
           //Write your code here
    },300);
}

function levelUp(){
   //Omitted code here
           //Write your code here
    level++;
    h3.innerText=`Level = ${level}`;
    // random button choose
    let randInx= Math.floor(Math.random()*4);
    let randColor=btns[randInx];
    let randbtn =document.querySelector(`.${randColor}`);

    gameseq.push(randColor);

    for (let i=0;i<gameseq.length;i++)
    {

        setTimeout(function(){
         gameFlash(document.querySelector(`.${gameseq[i]}`));
            playSound(gameseq[i]);
        },500*i);
    }
   //Omitted code here
  //Write your code here
}





function checkAns(idx){
    // let idx=level-1;
    
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length===gameseq.length)
            {
                userseq=[];
                setTimeout(levelUp,1000);
               //Omitted code here
           //Write your code here
            }
        console.log("correct");

    }
    else
    {
        playSound("error");
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        
        h3.innerHTML=`Game Over ! Your score was <b>${level}</b><br> Press any key to start again`;
        started=false;
        // reset();
    }
}

function btnPress()
{
    let btn =this;
    userFlash(this);
    let userColor = this.classList[1];
    playSound(userColor);
    console.log(userColor);
    userseq.push(userColor);

    if (userseq.length<=gameseq.length)
    {
        checkAns(userseq.length-1);
    }
   
    console.log(gameseq);
    console.log(userseq);
    //Omitted code here
           //Write your code here
}

function playSound(color){
    let audio = sounds[color];
    audio.play();
}

let allBtns= document.querySelectorAll('.btn');
for(let btn of allBtns)
{
    btn.addEventListener("click",btnPress);
    // userseq.push(btn);
    // console.log(userseq);
    //Omitted code here
           //Write your code here
}

function reset()
{
    level=0;
    gameseq=[];
    userseq=[];
    started=false;
    h3.innerText=`Level = ${level}`;

    //Omitted code here
           //Write your code here
}
