class Bird{
  constructor(x,y){
    var options = {

        restitution: 0.8,
        friction: 1.5,
        density: 0.3
    }
 this.body = Bodies.rectangle(x,y,50,50);
 this.x = x;
 this.y = y;
 this.width = 50;
 this.height = 50;

 World.add(world, this.body);
  }
 display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  pos.x = mouseX;
  pos.y = mouseY;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  strokeWeight(4);
  stroke("white");
  fill("red");
  rectMode(CENTER);
  rect(0,0,50,50);
  pop();
  
 }
}