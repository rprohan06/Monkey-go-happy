
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var banana;
var score = 0;
var survialtime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  
  
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation( "moving",monkey_running );
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
   ground.velocityX = -6

  invisibleGround = createSprite(400,360,900,20);
  invisibleGround.visible = false;
  
  bananaGroup = createGroup();
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(220);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score :" + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival time :" + survivalTime,100,50);
  
if(keyDown("space")&& monkey.y >= 250){
     monkey.velocityY = -10;
}
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  ground.x = ground.width /2;
    console.log(ground.x);
    monkey.collide(invisibleGround);
   
    ground.depth = monkey.depth;
    monkey.depth = monkey.depth+1;
  
    bananas();
  spawnObstacles();
  
 
  
  drawSprites();
  
}

function bananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    
    
     foodGroup.add(banana);
  }
}

function spawnObstacles (){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(450,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -2;
    obstacleGroup.add(obstacle);
  }
}



