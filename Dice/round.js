let round=1
let wins1=0
let wins2=0
function roll(){
    if (round>3)
        return;
    const d1=Math.floor(Math.random()*6)+1;
    const d2=Math.floor(Math.random()*6)+1;
    document.getElementById("dice1").src=`dice${d1}.jpg`;
    document.getElementById("dice2").src=`dice${d2}.jpg`;

    let name1=document.getElementById("name1Label").textContent;
    let name2=document.getElementById("name2Label").textContent;
    let resultText=" ";
    if(d1>d2){
        wins1++;
        resultText=`${name1} wins the Round ${round}!`;
    }
    else if (d1<d2){
             wins2++;
             resultText=`${name2} wins the Round ${round}`;
    }
    else{
        resultText=`Round ${round} is a tie`;
    }

    document.getElementById("score1").textContent=`Rounds won: ${wins1}`;
    document.getElementById("score2").textContent=`Rounds won: ${wins2}`;
    document.getElementById("result").textContent=resultText;
    round++;
    document.getElementById("round").textContent=`Round:${round<=3?round:3}/3`;
    
    if(round>3){
        document.getElementById("rollbtn").disabled=true;
        setTimeout(declarewinner,1000);
    }
}   
function declarewinner(){
    const name1=document.getElementById("name1Label").textContent;
    const name2=document.getElementById("name2Label").textContent;
    let msg=" ";

    if(wins1>wins2){
        msg=`${name1} is the final winner`;
    
    }
    else if(wins2>wins1){
        msg=`${name2} is the final winner`;
    }
    else
        msg=`It's a tie`;
    document.getElementById("result").textContent=msg;
}

function editName(player){
    const input=document.getElementById(`input${player}`);
    const label=document.getElementById(`name${player}Label`);
    if(input.value.trim()!==" "){
        label.textContent=input.value.trim();
        input.value="" ;
    }
}

