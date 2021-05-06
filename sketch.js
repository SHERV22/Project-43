var hr,mn,sc;



function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)

}

function draw() {
  background("black");  
  translate(250,250)
  rotate(-90)
  hr=hour();
  mn=minute();
  sc=second();
  noFill()
  strokeWeight(8)
  stroke("green")
  var a=map(sc,0,60,0,360)
  arc(0,0,300,300,0,a)
  stroke("blue")
  var b=map(mn,0,60,0,360)
  arc(0,0,280,280,0,b)
  stroke("red")
  var c=map(hr%12,0,12,0,360)
  arc(0,0,260,260,0,c)

  push();
  rotate(a)
  stroke("green")
  line(0,0,100,0);
  pop();

  push();
  rotate(b)
  stroke("blue")
  line(0,0,75,0);
  pop();

  push();
  rotate(c)
  stroke("red")
  line(0,0,50,0);
  pop();
}