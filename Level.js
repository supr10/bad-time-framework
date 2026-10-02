let life = 100;
let karma = 0;
let alive = true;
let paused = false;


function drawLevel(){
    fill("#FFFFFF");
    rect(100, 100, 300, 300);
    fill(0)
    rect(110, 110, 280, 280)
}

function drawLife(){
    fill("#FF0000");
    rect(150, 430, 200, 30);
    fill("#FFFFFF");
    rect(150, 430, life*2, 30);
    text(life.toString()+"/100", 130, 430);
    if(karma>0){
        fill("#b540ff");
        rect((150+life*2)-karma*2, 430, karma*2, 30);
    }
}

function togglePause(){
    paused = !paused;
}

function getLevel(){
    level = []
    let level2 = prompt("level list:").replace("[", "").replace("]", "").split(",");
    for (let i = 0; i < level2.length; i++){
        level.push(Number(level2[i]));
    }
}