//to create the sprite objects
var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//to preload the images, animations and sound
function preload(){

	starImg = loadImage("images/star.png"); 
	bgImg = loadImage("images/starNight.png");
	
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {

	//to create the canvas
	createCanvas(800, 750);

	//to play the sound
	fairyVoice.play();
	
    //to create the fairy
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	//to create the star
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	//to create the engine and world 
	engine = Engine.create();
	world = engine.world;

	//to create the star body and add it to the world
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	//to run the engine
	Engine.run(engine);

}

function draw() {

  //to give background
  background(bgImg);

  //to draw the objects
  drawSprites();

}

//to move the objects
function keyPressed() {

	if(keyDown("right")){
		fairy.x = fairy.x+20;
	}

	if(keyDown("left")){
		fairy.x = fairy.x-20;
	}

	if(keyDown("down")){
		Matter.Body.setStatic(starBody,false);
	}

	if(starBody.position.y > 470){
		Matter.Body.setStatic(starBody,true);
	}
	
}
