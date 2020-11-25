
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,240);
  
  monkey = createSprite(50,200,40,50);
  monkey.scale = 0.1;
  monkey.addAnimation("running", monkey_running);
  ground=createSprite(10,230,7000,10)
  foodGroup = createGroup();  
score=0;










}


function draw() {
  background("lightblue");
  if(keyDown("space")){
  monkey.velocityY=-10  
  }    
 monkey.velocityY= monkey.velocityY + 0.8;   
 monkey.collide(ground)   
    
 if(monkey.isTouching(foodGroup)) {
   foodGroup.destroyEach()
   score=score+1
   
   
   
 }  
    
    
    
    
    
  
  food();
 
  drawSprites();
text(score,450,30)










}

function food(){
  if(frameCount%150===0){
    var fd=createSprite(400,50,10,10);
    fd.addImage(bananaImage);
    fd.scale=0.1;
    fd.velocityX = -3;
    fd.lifetime=200;
    foodGroup.add(fd);
  }
}
function obstacles(){
  
}

































