var alien,alienimg,cloud,cloudimg,cloudg,ground,bcloud,bcloudimg,bcloudg,taco,pizza,sushi,sandwich,hotdog,score,food,rand,reset,reset1,hscore
var PLAY=0,END=1,HIT=2,gameState=PLAY
function preload(){

alienimg=loadImage("monster.png");
  reset=loadImage("reset1.png")
cloudimg=loadImage("cloud11.png");
bcloudimg=loadImage("blackcloud2.png");
taco=loadImage("taco.png");
pizza=loadImage("pizza.png");
sushi=loadImage("sushi.jpg");
sandwich=loadImage("sandwich.jpg");
hotdog=loadImage("hotdog.png");
}

function setup() {
  createCanvas(700,400);
  score=0;
  hscore=0;
  reset1=createSprite(350,320);
  reset1.addImage(reset);
  ground=createSprite(350,380,800,10)
 alien=createSprite(40,360)
  alien.addImage(alienimg);
  alien.scale=0.07;
  foodgroup=new Group();
  cloudg=new Group();
  bcloudg=new Group();
}

function draw() {
  if(gameState===PLAY||gameState===HIT){
    reset1.visible=false;
  background("white");
  ground.visible=false;
  if(keyDown("space")&&alien.y>30){
    alien.velocityY=-8;
  }
  alien.velocityY=alien.velocityY+1;
 alien.collide(ground);
  if(alien.isTouching(foodgroup)){
    score+=2;
    foodgroup.destroyEach();
  }
  if(alien.isTouching(cloudg)){
    score+=1;
  cloudg.destroyEach();
  }
  
 if (alien.isTouching(bcloudg))
 {
   if (gameState===PLAY){
   bcloudg.destroyEach();
   alien.scale=0.04;
   score=0;
   gameState=HIT;
 }}
  fooddraw();
  cloudsdraw();
drawSprites();
    fill("blue");
  text("SCORE : "+score,400,20);
    fill("red");
    textSize(15);
    text("High Score : "+ hscore,100,20);
     if(gameState===HIT&&alien.isTouching(bcloudg)){
       bcloudg.destroyEach();
       alien.visible=true;
       alien.scale=0.07;
   gameState=END; 
  }if (score>hscore){
    hscore=score;
  }
     
 switch (score){
    case 10 :alien.scale=0.09;
    
    break;
        case 20 :alien.scale=0.12;
  
    break;
        case 30 :alien.scale=0.14;
    break;
        case 40 :alien.scale=0.16;
       foodgroup.setVelocityXEach(-9);
    cloudg.setVelocityXEach(-9);
    bcloudg.setVelocityXEach(-9);
    break;
    default:break;
  }

}
  if(score>=10&&score<18){
     foodgroup.setVelocityXEach(-5);
    cloudg.setVelocityXEach(-5);
    bcloudg.setVelocityXEach(-5);
     text("Wow..keep going",300,40); 
     }
   if(score>=20&&score<28){
     foodgroup.setVelocityXEach(-6);
    cloudg.setVelocityXEach(-6);
    bcloudg.setVelocityXEach(-6);
     text("You're awesome",300,40); 
     }
   if(score>=30&&score<38){
     foodgroup.setVelocityXEach(-8);
    cloudg.setVelocityXEach(-8);
    bcloudg.setVelocityXEach(-8);
     text("That's awesome",300,40); 
     }
   if(score>=40){
     foodgroup.setVelocityXEach(-8);
    cloudg.setVelocityXEach(-8);
    bcloudg.setVelocityXEach(-8);
     text("Hurray!!You did it",300,40); 
     }
 if (gameState===END){
    background("RED");
    textSize(20);  
 
    text("GAME OVER !!"+"press K to continue",200,150);
     if(keyDown("k")) {
       gameState=PLAY;
       score=0;
     }       
       
  }}
function fooddraw(){
if(World.frameCount%100===0)  {
  rand=Math.round(random(1,5));
var  food=createSprite(500,Math.round(random(100,250)));
  food.lifetime=300;
  food.velocityX=-3;
  foodgroup.add(food);
  switch(rand){
    case 1: food.addImage(taco);
      food.scale=0.1;
      break;
      case 2: food.addImage(pizza);
      food.scale=0.2;
      break;
      case 3 : food.addImage(sandwich);
      food.scale=0.2;
      break;
      case 4: food.addImage(hotdog);
      food.scale=0.2;
      break;
      case 5: food.addImage(sushi);
      food.scale=0.2;
      break;
      default : break;
  }
}
  
  
}
function cloudsdraw(){
  if(World.frameCount%200===0){
    cloud=createSprite(500,Math.round(random(100,200)));
    cloud.addImage(cloudimg);
    cloud.velocityX=-3;
    cloud.lifetime=300;
    cloudg.add(cloud);
    cloud.scale=0.3;
  }
  if (World.frameCount%250===0){
    bcloud=createSprite(500,Math.round(random(100,200)));
       bcloud.addImage(bcloudimg);
    bcloud.velocityX=-3;
    bcloud.lifetime=300;
    bcloudg.add(bcloud);
    bcloud.scale=0.1;
  }
}