class Attack{
    constructor(x, y, w, h, s, d ,m=0){
        this.x = x;         //self-explanatory
        this.y = y;
        this.width = w;
        this.height = h;
        this.m = m;         //move dependant or not
        this.speed = s
        this.d = d;         //direction (1 = right 0 = left)
    }
    draw(){
        if(!this.m)         //move dependant must be blue
        {
            fill("#FFFFFF");
        }else{
            fill("#00b3cb");
        }
        rect(this.x, this.y, this.width, this.height);
    }
    isColliding(plyr){
        //I'm a bad coder, so I just assume the hitbox was a rectangle
        return (plyr.x+12.5>this.x)&&(plyr.x-12.5<this.x+this.width)&&(plyr.y+12.5>this.y)&&(plyr.y-12.5<this.y+this.height)
    }
    update(){
        if(this.d)this.x+=this.speed;
        else this.x-=this.speed;
    }
}