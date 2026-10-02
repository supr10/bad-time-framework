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
        if(this.m===0){
            return (plyr.x+12.5>this.x)&&(plyr.x-12.5<this.x+this.width)&&(plyr.y+12.5>this.y)&&(plyr.y-12.5<this.y+this.height);
        }else{
            return (plyr.x+12.5>this.x)&&(plyr.x-12.5<this.x+this.width)&&(plyr.y+12.5>this.y)&&(plyr.y-12.5<this.y+this.height)&&plyr.isMoving();
        }

    }
    update(){
        if(this.d)this.x+=this.speed;
        else this.x-=this.speed;
    }
    shouldErase(){
        return this.x<110&&this.d===0||this.x>390&&this.d===1
    }
}

class staticAttack{
    constructor(x, y, w, h, wt){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.spawnFrame = frameCount;   //frame where the object was created
        this.warnTime = wt;             //time before the object starts inflicting damage
    }
    update(){

    }
    draw(){
        if(frameCount-this.spawnFrame<=this.warnTime){
            fill("#680000");
        }else{
            fill("#ffffff")
        }rect(this.x, this.y, this.w, this.h);
    }
    isColliding(plyr){
        return (plyr.x+12.5>this.x)&&(plyr.x-12.5<this.x+this.w)&&(plyr.y+12.5>this.y)&&(plyr.y-12.5<this.y+this.h)&&frameCount-this.spawnFrame>this.warnTime
    }
    shouldErase(){
        return frameCount-this.spawnFrame>this.warnTime*2
    }
}