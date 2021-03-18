
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var jace;
var clary;
var valentine;
var demon;
function preload()
{

	claryImg=loadImage("clary.png");
	valImg=loadImage("val.png");
	demonImg=loadImage("demon.png");
	jaceImg=loadImage("jace.png");

	background1img=loadImage("background1.jpg");
	background2Img=loadImage("background2.jpg");
	clarysprisonImg=loadImage("clarysprison.jpg");

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



