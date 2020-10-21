
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint;
const Mouse = Matter.Mouse;
var canvas;
var sling1,sling2,sling3,sling4,sling5;
var canvasmouse,mconstraint

function setup() {
canvas = createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt)
	canvasmouse.pixelRatio = pixelDensity();
	let options= {
		mouse:canvasmouse
	}
	mConstraint=MouseConstraint.create(engine,options);
	World.add(world,mConstraint);
	


	//Create the Bodies Here.
	pendulum1 = new pendulum (300,250,30);
	pendulum2 = new pendulum (360,250,30);
	pendulum3= new pendulum (420,250,30);
	pendulum4 = new pendulum (480,250,30);
	pendulum5 = new pendulum (540,250,30);
	
	sling1 = new sling(pendulum1.body,{x:300,y:100});
	sling2 = new sling(pendulum2.body,{x:360,y:100});
	sling3 = new sling(pendulum3.body,{x:420,y:100});
	sling4 = new sling(pendulum4.body,{x:480,y:100});
	sling5 = new sling(pendulum5.body,{x:540,y:100});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  

  

  drawSprites();
 
}

function mouseDragged(){
	
	Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});

  }

