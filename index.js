/*
    Bad Time Framework by Nolan Bazin (ggiver)
 */


let player = new Player(250, 250);
let atkList = []
let attackCooldown = 60;
const difmult = 1/prompt("difficulty:")
const playerSpeed = 5;


function setup(){
    frameRate(60);
    createCanvas(500, 500);         //not for 720p screens... Sorry!
    textSize(20);
}


function generateAttacks(id){
    if(id===0){
        atkList.push(new Attack(450, 250, 10, 150, 5, 0))
        attackCooldown = 30*difmult;
    }else if(id===1){
        atkList.push(new Attack(450, 100, 10, 150, 5, 0))
        attackCooldown = 30*difmult;
    }else if(id===2){
        atkList.push(new Attack(50, 250, 10, 150, 5, 1))
        attackCooldown = 30*difmult;
    }else if(id===3){
        atkList.push(new Attack(50, 100, 10, 150, 5, 1))
        attackCooldown = 30*difmult;
    }else if(id===4){
        atkList.push(new Attack(450, 200, 10, 150, 5, 0))
        attackCooldown = 30*difmult;
    }else if(id===5){
        atkList.push(new Attack(50, 200, 10, 150, 5, 1))
        attackCooldown = 30*difmult;
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
        if((atkList[i].x<110&&atkList[i].d===0)||(atkList[i].x>390&&atkList[i].d===1)){
            let idx = atkList.indexOf(atkList[i]);
            delete atkList[i];
            atkList.splice(idx, 1);
        }
    }
}



function update(){
    //attack generator
    if(--attackCooldown<=0){
        generateAttacks(Math.floor(Math.random() * 6));
    }
    updateAttacks();
    keys();
    updateLife();

    player.draw();
}

function draw(){
    background(0);

    if(alive){
        drawLevel();
        drawLife();
        update();

    }else{
        fill("#ffffff");
        text("you died u noob", 100, 100);
    }
}

function reset(){
    player.x = 250;
    player.y = 250;
    life = 100;
    karma = 0;
    alive = true;
}