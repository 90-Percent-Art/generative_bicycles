class FrameComponent{

  constructor(radius, startVec, endVec){

    this.radius = radius;
    this.startVec = startVec;
    this.endVec = endVec;

    this.endVec = p5.Vector.sub(this.endVec, this.startVec);// put it in the right frame.
    this.angle=this.endVec.heading();

  }

  draw(){
    push();
    rectMode(CORNERS);
    translate(this.startVec.x, this.startVec.y);
    rotate(this.angle);
    ellipse(0,0,this.radius*2);
    ellipse(this.endVec.mag(), 0, this.radius*2);
    rect(0,-this.radius, this.endVec.mag(), this.radius);
    pop();
  }

}


function setup(){

  createCanvas(1000,1000);
  strokeWeight(3);
  noLoop();
  fill('black');
  noStroke();

}

function draw(){

  let fc = new FrameComponent(10, createVector(500,500), createVector(250,250));
  fc.draw();

}
