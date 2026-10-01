/*
    Bad Time Framework by Nolan Bazin (ggiver)
 */


let player = new Player(250, 250);
let atkList = []
let attackCooldown = 60;
let level = []
let attackIndex = 0;
let win = false;
let paused = false;
const difmult = 1/prompt("difficulty:")
const playerSpeed = 5;

function createLevel(complexity){
    for(let i = 0;i<complexity;i++){
        for(let j = 0;j<40;j++){
            level.push(rdm(1, 11))
        }level.push(0);
    }
}

function setup(){
    frameRate(60);
    createCanvas(500, 500);         //not for 720p screens... Sorry!
    textSize(20);
    createLevel(3);
}

function generateAttacks(id){
    if(id===0) {
        paused = true;
    }else if(id===1){
        atkList.push(new Attack(450, 250, 10, 150, 5, 0))
        attackCooldown = 30*difmult;
    }else if(id===2){
        atkList.push(new Attack(450, 100, 10, 150, 5, 0))
        attackCooldown = 30*difmult;
    }else if(id===3){
        atkList.push(new Attack(50, 250, 10, 150, 5, 1))
        attackCooldown = 30*difmult;
    }else if(id===4){
        atkList.push(new Attack(50, 100, 10, 150, 5, 1))
        attackCooldown = 30*difmult;
    }else if(id===5){
        atkList.push(new Attack(450, 200, 10, 150, 5, 0))
        attackCooldown = 30*difmult;
    }else if(id===6){
        atkList.push(new Attack(50, 200, 10, 150, 5, 1))
        attackCooldown = 30*difmult;
    }else if(id===7){
        atkList.push(new staticAttack(200, 100, 100, 300, 60*difmult))
        attackCooldown = 100*difmult;
    }else if(id===8){
        atkList.push(new staticAttack(100, 100, 100, 300, 60*difmult))
        attackCooldown = 100*difmult;
    }else if(id===9){
        atkList.push(new staticAttack(100, 100, 300, 100, 60*difmult))
        attackCooldown = 100*difmult;
    }else if(id===10){
        atkList.push(new staticAttack(100, 300, 300, 100, 60*difmult))
        attackCooldown = 100*difmult;
    }else if(id===11){
        let wantedY = rdm(50, 250);
        for(let i = 0;i<20;i++){
            wantedY+=rdm(-10, 10)
            atkList.push(new Attack(450+20*i, 100, 10, wantedY, 5, 0));
            atkList.push(new Attack(450+20*i, 160+wantedY, 10, 300-wantedY, 5, 0));
        }
        attackCooldown = 100*difmult;
    }
}

function keys(){
    if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
        player.move(-playerSpeed, -playerSpeed);
    } else if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
        player.move(-playerSpeed, playerSpeed);
    } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
        player.move(playerSpeed, -playerSpeed);
    } else if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
        player.move(playerSpeed, playerSpeed);
    } else if (keyIsDown(LEFT_ARROW)) {
        player.move(-playerSpeed, 0);
    } else if (keyIsDown(RIGHT_ARROW)) {
        player.move(playerSpeed, 0);
    } else if (keyIsDown(UP_ARROW)) {
        player.move(0, -playerSpeed);
    } else if (keyIsDown(DOWN_ARROW)) {
        player.move(0, playerSpeed);
    }
}//just for reading purposes

function updateLife(){
    for (let i = 0;i<atkList.length;i++){
        if (atkList[i].isColliding(player)) life = max(life-1, 0);
        if(atkList[i].isColliding(player))karma = min(karma+1, life);
    }

    if(frameCount%60===0&&karma>0){
        life--;
        karma--;
    }if(life<=0||karma===life){
        alive = false;
    }
}

function updateAttacks(){
    for(let i = 0;i<atkList.length; i++){
        atkList[i].update();
        atkList[i].draw();
        if(atkList[i].shouldErase()){
            let idx = atkList.indexOf(atkList[i]);
            delete atkList[i];
            atkList.splice(idx, 1);
        }
    }
}

function update(){
    //attack generator
    if(--attackCooldown<=0){
        if(++attackIndex<=level.length){
            generateAttacks(level[++attackIndex]);
        }else{
            alive = false;
            win = true;
        }
    }
    updateAttacks();
    keys();
    updateLife();
}

function draw(){
    background(0);

    if(alive){
        drawLevel();
        drawLife();
        if(paused){
            updateLife();
            fill("#ffffff");
            text("tactical pause", 100, 100);
        }else{
            update();
        }
        player.draw();

    }else{
        fill("#ffffff");
        if(win){
            text("gg you won easy mode", 100, 100);
        }else{
            text("you died u noob", 100, 100);
        }
    }
}

function reset(){
    player.x = 250;
    player.y = 250;
    life = 100;
    karma = 0;
    alive = true;
}

function stopPause(){
    paused = false;
}

function rdm(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}