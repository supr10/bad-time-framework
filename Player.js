class Player{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.ix = x;
        this.iy = y;
    }
    resetPos(){
        this.x = this.ix;
        this.y = this.iy;
    }

    draw(){
        fill("#FF0000");
        ellipse(this.x, this.y, 25, 25);
    }
    move(x, y){
        if((this.x+x>115)&&(this.x+x<385)){
            this.x+=x;
        }if((this.y+y>115)&&(this.y+y<385)){
            this.y+=y;
        }
    }
    isMoving(){
        return keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(LEFT_ARROW)||keyIsDown(RIGHT_ARROW);
    }
}