var  wall,thickness ;
var bullet,speed , weight ;
var lwall,lbullet;
function setup() {
  var canvas  = createCanvas(1600,400);
thickness=random(22,83);
  speed = random (223,321);
  weight = random (30,52);
  bullet = createSprite(50,200,50,50,);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);
}

function draw() {
  background("white");  
  if(hasCollided(lbullet,lwall)){
    bullet.velocityX =0;
    var damage=0.5*speed *speed/(thickness*thickness*thickness)*weight;

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
      
    {
      wall.shapeColor=color(0,255,0);
    }

  }

  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  {
    return false;
  }
}