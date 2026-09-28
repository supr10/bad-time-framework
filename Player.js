class Player{
    constructor(x, y, life){
        this.x = x;
        this.y = y;
        this.ix = x;
        this.iy = y;
        this.life = life;
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
    displayLife(){
        fill("#FFFFFF");
        text(this.life.toString(), 250, 450)
    }
}