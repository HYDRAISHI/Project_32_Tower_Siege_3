const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var ground,ground2, ground3;
var ball,point, sling, ballImg,backgroundImg;
var bg = "day.png";

function preload(){
  ballImg = loadImage("ball.png");
  getTime();
}

function setup() {
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Stand(400, 300, 150, 20);
  ground2 = new Stand(800,150,120,20);
  ground3 = new Stand(600,400,1200,20);

  
  block1 = new Box(800,100,30,40);
  block2 = new Box(770,100,30,40);
  block3 = new Box(830,100,30,40);
  block4 = new Box(800,50,30,40);
  block5 = new Box(340,100,30,40);
  block6 = new Box(370,100,30,40);
  block7 = new Box(400,100,30,40);
  block8 = new Box(430,100,30,40);
  block9 = new Box(460,100,30,40);
  block10 = new Box(370,60,30,40);
  block11 = new Box(400,60,30,40);
  block12 = new Box(430,60,30,40);
  block13 = new Box(400,20,30,40);

  var options = {
    density : 1
  }
  ball = Bodies.circle(50,200,20,options);
  World.add(world, ball);
  
  sling = new Shooter(this.ball, {x:100, y: 150});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
 }
  Engine.update(engine);
  
  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display(); 
  block12.display();
  block13.display();
  sling.display();

  imageMode(CENTER);
  image(ballImg, ball.position.x, ball.position.y, 40,40);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}



function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(this.ball);
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  //console.log(hour);
  if(hour > 6 && hour < 19 ){
      bg = "day.png";
  }
  else{
      bg = "night.png";
  }
  backgroundImg = loadImage(bg);
}