fills = ['red', 'green', 'blue', 'brown']

function setup(){

  createCanvas(1000,1000, SVG);
  noFill();
  rectMode(CORNERS);
  frameRate(1);
  //noLoop();

}

// function mousePressed(){
//   save('bicycleWheels.svg');
// }

function draw(){
  background(255);

  frontLoc = createVector(random(450,550), 500)
  rearLoc = createVector(random(300,350),500)
  chainLoc = createVector(random(375,425),random(475,525))

  frame = new Frame(
    frontLoc,
    rearLoc,
    chainLoc,
    random(PI/6,PI/8),
    100,
    random(PI/12,PI/8),
    random(60,100),
    //random(0.4,0.6),
    0.5,
    //random(0.6,0.8),
    0.7,
    //random(0.55,0.65),
    0.6,
    random(2,4),
    random(fills)
  );

  frontWheel = new Wheel(
    frontLoc.x,frontLoc.y,
    5,
    5,
    25,
    2,
    2,
    1,
    40,
    80,
    1,
    1
  )

  rearWheel = new Wheel(
    rearLoc.x,rearLoc.y,
    5,
    5,
    25,
    2,
    2,
    1,
    40,
    80,
    1,
    1
  )

  frontWheel.draw();
  rearWheel.draw();
  frame.draw();
}


// function draw(){
//   for(f=1;f<=4;f++){
//     for(z=1;z<=4;z++){
//       let wheel = new Wheel(
//         450*(f),450*(z), //x,y
//         random(0,15), // axleRadius
//         random(0,15), // hubWidth
//         random(75,175), // spoke width
//         random(0,25), // rim width
//         random(3,17), // tire width
//         random(0,1)>0.5?0:random(0,5), // tread width
//         floor(random(5,30)), // spoke set treadCount
//         floor(random(10,80)), //tread count
//         random(2,10), //nub width
//         random(0,5), // nub length
//       );
//       console.log(wheel);
//       wheel.draw();
//     }
//   }
// }




// function draw(){
//   for(f=1;f<=4;f++){
//     for(z=1;z<=4;z++){
//       let wheel = new Wheel(
//         450*(f),450*(z), //x,y
//         random(0,15), // axleRadius
//         random(0,15), // hubWidth
//         random(75,175), // spoke width
//         random(0,25), // rim width
//         random(3,17), // tire width
//         random(0,1)>0.5?0:random(0,5), // tread width
//         floor(random(5,30)), // spoke set treadCount
//         floor(random(10,80)), //tread count
//         random(2,10), //nub width
//         random(0,5), // nub length
//       );
//       console.log(wheel);
//       wheel.draw();
//     }
//   }
// }
