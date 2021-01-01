var ground,li,ob1,ob2,ob3,ob4,pla1,pla2,b1,b2,b3,bl1,bl2,dir = "d",
di = "a",pla1Img,pla2Img,p2la1Img,p2la2Img,he1,he2,go,p1w,p2w;  
var Play = 1,End  = 0,GameState = Play;
function preload() {
pla1Img = loadImage("player1.png");
pla2Img = loadImage("player2.png");  
p2la1Img = loadImage("2player1.png");
p2la2Img = loadImage("2player2.png");
b = loadImage("back.jpg");

}

function setup() {
  
    createCanvas(650, 450);

  ground = createSprite(325,440,650,20);
  ground.shapeColor = "green";

  li = createSprite(325,282,10,400);
  li.shapeColor = "brown";
  
  ob1 = createSprite(325,80,200,10);
  ob1.shapeColor = "brown";
  
  ob2 = createSprite(325,310,200,10);
  ob2.shapeColor = "brown";
  
  ob3 = createSprite(100,210,200,10);
  ob3.shapeColor = "brown";
  
  ob4 = createSprite(550,210,200,10);
  ob4.shapeColor = "brown";
  
  pla1 = createSprite(100,345,20,40);
  pla1.addImage(pla1Img);
  pla1.scale = 0.4;
  
  pla2 = createSprite(500,345,20,40);
  pla2.addImage(p2la2Img)
  pla2.scale = 0.4;
  
  b1 =createSprite(1,200,1,600);
  b2 =createSprite(649,200,1,600);
  b3 =createSprite(300,1,750,1);
  
  bl1 =createSprite(100,100,13,3);
  bl1.shapeColor  = "white";
  bl1.visible = false;
  
  bl2 =createSprite(100,100,13,3);
  bl2.shapeColor  = "purple";
  bl2.visible = false;
 
  pla1.setCollider("rectangle",0,0,pla1.width,pla1.height);
  
  he1 = 100;
  he2 = 100;
}

function draw() {
    background(b);
  fill(0);
  text("Player 1 Health:"+he1,10,30);
  text("Player 2 Health:"+he2,480,30);
    
  if(GameState === Play){
  if(keyDown("w")) {
        pla1.velocityY = -12;
     
    }
    pla1.velocityY = pla1.velocityY + 0.8;
  
  
  
  if(keyDown("up_arrow")) {
        pla2.velocityY = -12;
     
    }
    pla2.velocityY = pla2.velocityY + 0.8;
  
  if(keyDown("a")){
    pla1.x = pla1.x -2;
    dir = "a";
    pla1.addImage(p2la1Img);
    
  }
  if(keyDown("d")){
    pla1.x = pla1.x +2;
    dir = "d";
    pla1.addImage(pla1Img);
  }
    
  if(keyDown("left")){
    pla2.x = pla2.x -2;
    di= "a";
    pla2.addImage(p2la2Img);
  }
  if(keyDown("right")){
    pla2.x = pla2.x +2;
    di = "d";
    pla2.addImage(pla2Img);
  }
  
  if(dir === "d"){
  if (keyDown("s")){
    bl1.visible = true;
    bl1.x = pla1.x;
    bl1.y = pla1.y;
    bl1.velocityX = 4;
    
  }
  }
  if(dir === "a"){
  if (keyDown("s")){
    bl1.visible = true;
    bl1.x = pla1.x;
    bl1.y = pla1.y;
    bl1.velocityX = -4;
  }
  }
  if(di === "d"){
  if (keyDown("down")){
    bl2.visible = true;
    bl2.x = pla2.x;
    bl2.y = pla2.y;
    bl2.velocityX = 4;
  }
  }
  if(di === "a"){
  if (keyDown("down")){
    bl2.visible = true;
    bl2.x = pla2.x;
    bl2.y = pla2.y;
    bl2.velocityX = -4;
  }
  }
  if(bl1.isTouching(ob1)  ){
    bl1.visible = false;
    bl1.velocityX = 0;
  }
   if(bl1.isTouching(ob2)  ){
    bl1.visible = false;
     bl1.velocityX = 0;
  }
   if(bl1.isTouching(ob3)  ){
    bl1.visible = false;
     bl1.velocityX = 0;
  }
   if(bl1.isTouching(ob4)  ){
    bl1.visible = false;
     bl1.velocityX = 0;
  }
   if(bl1.isTouching(li)  ){
    bl1.visible = false;
     bl1.velocityX = 0;
  }
  if(bl2.isTouching(ob1)  ){
    bl2.visible = false;
    bl2.visible = false;
     bl2.velocityX = 0;
  }
   if(bl2.isTouching(ob2)  ){
    bl2.visible = false;
     bl2.visible = false;
     bl2.velocityX = 0;
  }
   if(bl2.isTouching(ob3)  ){
    bl2.visible = false;
     bl2.visible = false;
     bl2.velocityX = 0;
  }
   if(bl2.isTouching(ob4)  ){
    bl2.visible = false;
     bl2.visible = false;
     bl2.velocityX = 0;
  }
   if(bl2.isTouching(li)  ){
    bl2.visible = false;
     bl2.visible = false;
     bl2.velocityX = 0;
  }
  if(bl1.isTouching(pla2)  ){
    bl1.x = pla1.x;
    he2 = he2 - 10;
    bl1.visible = false;
    bl1.velocityX = 0;
  }
   if(bl2.isTouching(pla1)  ){
     bl2.x = pla2.x;
     he1 = he1 - 10;
     bl2.visible = false;
     bl2.velocityX = 0;
  }
  if(bl1.isTouching(b1)  ){
    bl1.visible = false;
    bl2.visible = false;
     bl2.velocityX = 0;
  }
   if(bl2.isTouching(b1)  ){
    bl2.visible = false;
     bl2.visible = false;
     bl2.velocityX = 0;
  }
  if(bl1.isTouching(b2)  ){
    bl1.visible = false;
    bl1.velocityX = 0;
  }
   if(bl2.isTouching(b2)  ){
    bl2.visible = false;
     bl2.visible = false;
     bl2.velocityX = 0;
  }
  if(bl1.isTouching(b3)  ){
    bl1.visible = false;
    bl1.velocityX = 0;
  }
   if(bl2.isTouching(b3)  ){
    bl2.visible = false;
     bl2.visible = false;
     bl2.velocityX = 0;
  }
  if(bl1.isTouching(bl2)  ){
    bl1.visible = false;
    bl1.velocityX = 0;
    
  }
   if(bl2.isTouching(bl1)  ){
    bl2.visible = false;
     bl2.visible = false;
     bl2.velocityX = 0;
  
   }
  if(he1  <0){
    GameState =End;
    pla1.visible = false;
  }
     if(he2  <0){
    GameState =End;
    pla2.visible = false;
  }
  }
  
   
   pla1.collide(ground);
   pla1.collide(ob1);
   pla1.collide(ob2);
   pla1.collide(ob3);
   pla1.collide(b1);
   pla1.collide(b2);
   pla1.collide(b3);
   pla1.collide(ob4);
   pla2.collide(li);
   pla1.collide(li);
   pla2.collide(ground);
   pla2.collide(ob1);
   pla2.collide(ob2);
   pla2.collide(ob3);
   pla2.collide(b1);
   pla2.collide(b2);
   pla2.collide(b3);
   pla2.collide(ob4);
   pla1.collide(pla2);
   pla2.collide(pla1);
    drawSprites();

    }