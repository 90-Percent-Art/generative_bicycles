const spokeType = {
  SINGLE: 'single', //
  DOUBLE: 'double'
}


class Wheel{

  constructor(x, y, axleRadius, hubWidth, spokeWidth, rimWidth, tireWidth, treadWidth, spokeSetCount, treadCount, spokeNubWidth, spokeNubLength){

    // Center
    this.x = x;
    this.y = y;

    // Parts of the wheel sizes
    this.axleRadius = axleRadius; // where do we start
    this.hubWidth = hubWidth;
    this.spokeWidth = spokeWidth;
    this.rimWidth = rimWidth;
    this.tireWidth = tireWidth;
    this.treadWidth =  treadWidth;

    // Spokes
    this.spokeSetCount = spokeSetCount; // how many sets of single/double spokes?
    this.treadCount = treadCount; // how many treads...
    this.spokeNubWidth=spokeNubWidth;
    this.spokeNubLength=spokeNubLength;

    this.thetaSpokeOffset = 0;

  }

  draw(){
    push();
    translate(this.x, this.y); //
    this.drawHub();
    this.drawSpokes();
    this.drawRim();
    this.drawTire();
    this.drawTreads();
    pop();
  }

  drawHub(){

    push();
    stroke('black');
    for(let i=this.axleRadius; i<=(this.axleRadius + this.hubWidth);i++){
      ellipse(0,0,2*i,2*i);
    }
    pop();

  }

  drawSpokes(){

    let spokeSeparation = 2*PI/this.spokeSetCount; // in radians
    console.log(spokeSeparation);
    let innerR = (this.axleRadius + this.hubWidth);
    let outerR = innerR + this.spokeWidth;

    // single spokes
    push();
    rotate(random(0,2*PI));
    for(let i=0; i<this.spokeSetCount; i++){
      push();
      fill('black');
      rotate(i*spokeSeparation);
      console.log(i, i*spokeSeparation);
      line(innerR,0, outerR*cos(this.thetaSpokeOffset), outerR*sin(this.thetaSpokeOffset));
      lineRect(outerR-this.spokeNubWidth,this.spokeNubLength,outerR,-this.spokeNubLength);
      //lineRect(outerR*cos(this.thetaSpokeOffset)-this.spokeNubWidth,outerR*sin(this.thetaSpokeOffset)+this.spokeNubLength,outerR*cos(this.thetaSpokeOffset),outerR*sin(this.thetaSpokeOffset)-this.spokeNubLength);
      pop();
    }
    pop();

  }

  drawDoubledSpokes(){
    let spokeSetSeparation = 2*PI/this.spokeSetCount; // in radians

  }


  drawRim(){
    let innerR = this.axleRadius + this.hubWidth + this.spokeWidth;
    ellipse(0,0,2*innerR, 2*innerR);
  }

  drawTire(){

    let innerR = (this.axleRadius + this.hubWidth + this.spokeWidth + this.rimWidth);

    for(let i=0; i < this.tireWidth; i++){
      ellipse(0,0,2*(innerR+i), 2*(innerR+i));
    }

  }

  drawTreads(){

    let innerR = (this.axleRadius + this.hubWidth + this.spokeWidth + this.rimWidth + this.tireWidth);
    let treadSeparation = PI/(this.treadCount) // each tread has same width and separation...

    push();
    rotate(random(0,2*PI));
    for(let i=0; i < this.treadCount; i++){
      let thetaStart = i*2*treadSeparation;
      let thetaEnd = thetaStart + treadSeparation;
      for(let j=0; j < this.treadWidth;j++){
        arc(0,0,2*(innerR+j), 2*(innerR+j), thetaStart, thetaEnd,OPEN);
      }
    }
    pop();

  }

}


function lineRect(x1,y1,x2,y2){

  let numLines = x2-x1;
  for(i=0;i<numLines;i++){
    line(x1+i,y1, x1+i,y2);
  }

}
