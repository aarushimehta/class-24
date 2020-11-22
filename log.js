class Log{
 constructor(x,y,height,angle){
   var options = {
      
    restitution: 0.5,
    friction: 1.5,
    density: 1.0
    
   }
  this.body = Bodies.rectangle(x,y,20,height,options)
  Matter.Body.setAngle(this.body, angle)
  this.width = 20;
  this.height = height;

  World.add(world, this.body);
 }
 display(){
  var pos = this.body.position
  var angle = this.body.angle
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  strokeWeight(5);
  stroke("blue");
  fill("pink");
  rectMode(CENTER);
  rect(0,0,20,this.height)
  pop();

 }

}