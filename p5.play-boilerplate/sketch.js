var hasDocked=false;

function preload(){
  bgImage=loadImage("Images/spacebg.jpg");
  spaceCraftImage1=loadImage("Images/spacecraft1.png");
  spaceCraftImage2=loadImage("Images/spacecraft2.png");
  spaceCraftImage3=loadImage("Images/spacecraft3.png");
  spaceCraftImage4=loadImage("Images/spacecraft4.png");
  issImage=loadImage("Images/iss.png");
}

function setup() {
  createCanvas(600,350);
  spaceCraft=createSprite(285, 240, 50, 50);
  spaceCraft.addImage(spaceCraftImage1);
  spaceCraft.scale=0.15;
  iss=createSprite(330,130,50,50);
  iss.addImage(issImage);
  iss.scale=0.25;
}

function draw() {
  background(bgImage);
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1);
  }
  text(mouseX+","+mouseY,100,100);
 if(keyIsDown(LEFT_ARROW)){
   spaceCraft.x=spaceCraft.x-2;
   spaceCraft.addImage(spaceCraftImage3);
 }
 if(keyIsDown(RIGHT_ARROW)){
  spaceCraft.x=spaceCraft.x+2;
  spaceCraft.addImage(spaceCraftImage4);
}
if(keyIsDown(UP_ARROW)){
  spaceCraft.y=spaceCraft.y-2;
  spaceCraft.addImage(spaceCraftImage2);
}
if(keyIsDown(DOWN_ARROW)){
  spaceCraft.y=spaceCraft.y+2;
  spaceCraft.addImage(spaceCraftImage1);
}
if(spaceCraft.x<=(iss.x-15)&&spaceCraft.y<=(iss.y+70)){
  hasDocked=true;
  text("Docking Succesfull",250,300);
}
  drawSprites();
}