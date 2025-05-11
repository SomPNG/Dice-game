const head = document.querySelector('[header]');
const dice1 =document.querySelector('.img1');
const dice2 =document.querySelector('.img2');
const rollbtn = document.querySelector('.btn');
function refresh(){
    head.innerText = "Ready To Roll";
    dice1.src="./images/dice1.png";
    dice2.src="./images/dice1.png";
}
refresh();



function decision(n1,n2){
    if(n1>n2){
        head.innerText = "🚩 Player 1 Wins!";
    }
    else if(n1==n2){
        head.innerText = "Draw 😶";
    }
    else{
        head.innerText = "Player 2 Wins! 🚩";
    }
}

function rollDice(){
    const dice1out = Math.floor((Math.random() * 6)+1);
    const dice2out = Math.floor((Math.random() * 6)+1);
    dice1.src=`./images/dice${dice1out}.png`;
    dice2.src=`./images/dice${dice2out}.png`;
    decision(dice1out,dice2out);
}

rollbtn.addEventListener('click',()=>{
    rollDice();
})