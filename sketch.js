
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(400,785,800,30)
	box1= new Box(300,25,50,50)
	box2= new Box(300,25,50,50)
	box3= new Box(300,25,50,50)
	box4= new Box(300,25,50,50)
	box5= new Box(275,50,50,50)
	box6= new Box(275,50,50,50)
	box7= new Box(275,50,50,50)
	box8= new Box(275,50,50,50)

	ball=new Ball(700,400,50)
	rope=new Rope(ball.body,{x:400,y:600})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
   ground.display()
   box1.display()
   box2.display()
   box3.display()
   box4.display()
   box5.display()
   box6.display()
   box7.display()
   box8.display()
   ball.display()
   rope.display()
 
}
function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY})
}


