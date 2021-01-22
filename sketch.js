const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dground,tree,treeImg;
var boy,boyImg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dground = new Ground();
	
    stones=new Stone(235,420,30); 

	mango1=new Mango(1100,100,30);
    mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1120,50,40);
	mango12=new Mango(900,160,40);

	// stones = new Stone(100,460,23);

	// mango1 = new Mango(600,290,34);
	// mango2 = new Mango(855,325,35);
	// mango3 = new Mango(670,260,35);
	// mango4 = new Mango(730,200,35);
	// mango5 = new Mango(710,320,35);
	// mango6 = new Mango(780,250,35);
	// mango7 = new Mango(825,170,33);
	// mango8 = new Mango(880,260,35);
	// mango9 = new Mango(940,220,35);
	// mango10 = new Mango(980,305,35);

	launcher = new Throw(stones.body, {x:235,y:420});

	tree = new Tree(1000,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boyImg ,200,340,200,300);
 // image(boy ,200,340,200,300);

//   fill("black");
//   textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);
  
  drawSprites();

  dground.display();
  stones.display();
  launcher.display();
  tree.display();
  //dground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function detectCollision(lstones,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstones.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
		if(distance<=lmango.r+lstones.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }

// 	if(lstones.body.position.x - lmango.body.position.x < lmango.diameter + lstones.diameter
// 		&& lmango.body.position.x - lstones.body.position.x < lmango.diameter + lstones.diameter
// 		&& lstones.body.position.y - lmango.body.position.y < lmango.diameter + lstones.diameter
// 		&& lmango.body.position.y - lstones.body.position.y < lmango.diameter + lstones.diameter);
// 		Matter.Body.setStatic(lmango.body, false);
        
   }

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stones.body, {x:235, y:420});
		launcher.Launch(stones.body);
	}
}

