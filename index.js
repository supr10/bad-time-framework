/*
    Bad Time Framework by Nolan Bazin (ggiver)
 */


let attack1 = new Attack(300, 300, 10, 100, 5, 1);
let player = new Player(250, 250);
const playerSpeed = 5;


function setup(){
    frameRate(60);
    createCanvas(500, 500);         //not for 720p screens... Sorry!
    textSize(20);
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
    if (attack1.isColliding(player)) life = max(life-1, 0);
    if(attack1.isColliding(player))karma = min(karma+1, life);
    if(frameCount%60===0&&karma>0){
        life--;
        karma--;
    }if(life<=0||karma===life){
        alive = false;
    }
}

function update(){
    attack1.draw();
    attack1.update();
    player.draw();

    keys();
    updateLife();

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