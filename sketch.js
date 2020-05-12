var cars1,cars2,cars3,cars4;
var colls1,colls2,colls3,colls4;
var speed;
var speed2;
var speed3;
var speed4;
var weight;
var deformation;
var deformation2;
var deformation3;
var deformation4;
function setup()
{
    createCanvas(1600,600);

    speed = random(1,290);
    speed2 = random(1,230);
    speed3= random(1,230);
    speed4= random(1,230);
    weight = random(500,1200);
    cars1 = createSprite(200,200,30,30);
    cars1.shapeColor = "white";

    cars2 = createSprite(200,300,30,30);
    cars2.shapeColor = "white";

    cars3 = createSprite(200,400,30,30);
    cars3.shapeColor = "white";

    cars4 = createSprite(200,500,30,30);
    cars4.shapeColor = "white";

    colls1 = createSprite(1400,200,10,50);
    colls1.shapeColor = "grey";

    colls2 = createSprite(1400,300,10,50);
    colls2.shapeColor = "grey";

    colls3 = createSprite(1400,400,10,50);
    colls3.shapeColor = "grey";

    colls4 = createSprite(1400,500,10,50);
    colls4.shapeColor = "grey";

    cars1.velocityX = speed;
    cars2.velocityX = speed2;
    cars3.velocityX = speed3;
    cars4.velocityX = speed4;
}
function draw(){
  background("black");

  if(colls1.x-cars1.x < (cars1.width+colls1.width)/2)
  {
    cars1.velocityX = 0;
    var deformation = 0.5 * weight * speed/245;
    console.log(deformation);
    if(deformation>180){
      cars1.shapeColor = "red";
    }
    if(deformation<180&&deformation>100){
      cars1.shapeColor = "yellow";
    }
    if(deformation<100){
      cars1.shapeColor = "green";
    }
    
  }

  if(colls2.x-cars2.x < (cars2.width+
    colls2.width)/2)
  {
    cars2.velocityX = 0;
    var deformation2 = 0.5 * weight * speed2/245;
    if(deformation2>180){
      cars2.shapeColor = "red";
    }
    if(deformation2<180&&deformation2>100){
      cars2.shapeColor = "yellow";
    }
    if(deformation2<100){
      cars2.shapeColor = "green";
    }
  }
    if(colls3.x-cars3.x < (cars3.width+colls3.width)/2)
  {
    cars3.velocityX = 0;
    var deformation3 = 0.5 * weight * speed3/245;
    if(deformation3>180){
      cars3.shapeColor = "red";
    }
    if(deformation3<180&&deformation3>100){
      cars3.shapeColor = "yellow";
    }
    if(deformation3<100){
      cars3.shapeColor = "green";
    }
  }

  if(colls4.x-cars4.x < (cars4.width+colls4.width)/2)
  {
    cars4.velocityX = 0;
    var deformation4 = 0.5 * weight * speed4/245;
    if(deformation4>180){
      cars4.shapeColor = "red";
    }
    if(deformation4<180&&deformation4>100){
      cars4.shapeColor = "yellow";
    }
    if(deformation4<100){
      cars4.shapeColor = "green";
    }
  }

  drawSprites();
}