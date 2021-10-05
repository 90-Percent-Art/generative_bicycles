class Frame{

  constructor(
    // Key locations
    frontVec,
    rearVec,
    chainVec,
    // Rest
    thetaFrontFork,
    lenFrontFork,
    thetaSeatTube,
    lenSeatTube,
    // Proportions
    downTubeFrontConnectionP, // Ps are proportions and in 0,1
    topTubeFrontConnectionP,
    topTubeSeatConnectionP,
    //
    tubeRadius,
    fillColor
    ){



    // key locations
    this.frontVec = frontVec;
    this.rearVec = rearVec;
    this.chainVec = chainVec;
    // Rest
    this.thetaFrontFork = thetaFrontFork;
    this.lenFrontFork = lenFrontFork;
    this.thetaSeatTube = thetaSeatTube;
    this.lenSeatTube = lenSeatTube;
    this.downTubeFrontConnectionP = downTubeFrontConnectionP;
    this.topTubeFrontConnectionP = topTubeFrontConnectionP;
    this.topTubeSeatConnectionP = topTubeSeatConnectionP;

    this.tubeRadius = tubeRadius;
    this.fillColor = fillColor;

  }

  draw(){
    push();
    fill(this.fillColor);
    noStroke();
    this.drawFrontFork();
    this.drawSeatTube();
    this.drawDownTube();
    this.drawTopTube();
    console.log(this.rearVec);
    this.drawBackStays();
    pop();
  }

  drawFrontFork(){
    let endVec = this.getVectorByAngleDist(this.frontVec, this.thetaFrontFork, this.lenFrontFork);
    let ff = new FrameComponent(this.tubeRadius, this.frontVec, endVec);
    ff.draw();
  }

  drawSeatTube(){

    let endVec = this.getVectorByAngleDist(this.chainVec, this.thetaSeatTube, this.lenSeatTube);
    let st = new FrameComponent(this.tubeRadius, this.chainVec, endVec);
    st.draw();

  }

  drawTopTube(){
    let endVec = this.getVectorByAngleDist(this.chainVec, this.thetaSeatTube, this.lenSeatTube*this.topTubeSeatConnectionP);
    let startVec = this.getVectorByAngleDist(this.frontVec, this.thetaFrontFork, this.lenFrontFork*this.topTubeFrontConnectionP);
    let tt = new FrameComponent(this.tubeRadius, startVec, endVec);
    tt.draw();

  }

  drawDownTube(){

    let endVec = this.getVectorByAngleDist(this.frontVec, this.thetaFrontFork, this.lenFrontFork*this.downTubeFrontConnectionP);
    let dt = new FrameComponent(this.tubeRadius, this.chainVec, endVec);
    dt.draw();

  }

  drawBackStays(){

    let setFrontConn = this.getVectorByAngleDist(this.chainVec, this.thetaSeatTube, this.lenSeatTube*this.topTubeSeatConnectionP);
    let bs1 = new FrameComponent(this.tubeRadius, this.chainVec, this.rearVec);
    let bs2 = new FrameComponent(this.tubeRadius, setFrontConn, this.rearVec);

    bs1.draw();
    bs2.draw();

  }

  getVectorByAngleDist(startVec, theta,length){
    return(createVector(startVec.x-length*sin(theta), startVec.y-length*cos(theta)));
  }

}
