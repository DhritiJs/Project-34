class pendulum{
    constructor(x,y,r){
        var options={
           isStatic:false,
           restitution:1,
           friction:0,
           frictionAir:0.0,
           slop:1,
           density:0.8,
           inertia:Infinity
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
        
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("#7D7DFF");
        fill("black");
        ellipse(0, 0, this.r,this.r);
        pop();
      }
    }