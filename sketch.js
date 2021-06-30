const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;
function preload()
{}

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;
	ball= new PaperClass (100,500,40);
	ground = new Ground (400,590,800,10);
	dustbin1 = new DustbinClass (570,540,10,70);
	dustbin2 = new DustbinClass (430,540,10,70);
	dustbin3 = new DustbinClass (500,580,150,10);

	Engine.run(engine);
}

function draw() {
  background(100);
  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed(){ 
	if(keyCode === UP_ARROW){
	  
	 Matter.Body.applyForce( ball.body, ball.body.position ,{x:200,y:-200});
	}
}
