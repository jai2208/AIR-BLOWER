class Ball
 {
   constructor(x,y,r)
 {
    let options = {
      isStatic:true 
     }
    
    this.body = Bodies.circle(x,y,r,options)
    this.r = r;
    World.add(engine.world,this.body)
    }

 Show()
 {

let pos = this.body.position

push();
ellipseMode(CENTER);
noStroke();
fill(148,127,146);
ellipse(pos.x,pos.y, this.r);
pop();
 
}
 }