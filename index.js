/*
    Bad Time Framework by Nolan Bazin (ggiver)
 */


let player = new Player(250, 250, 99);
const playerSpeed = 5;

function setup(){
    frameRate(60);
    createCanvas(500, 500);         //not for 720p screens... Sorry!
    textSize(20);
}

function draw(){
    background(0);
    fill(255);
    drawLevel();
    player.draw();
    player.displayLife();

    {
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


}
