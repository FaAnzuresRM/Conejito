
var garden,gardenImage
var rabbit,rabbitImage
var apple,appleImage
var manzanas
var leaf,leafImage
var score = 0
var leaf2,leaf2Image

function preload(){
gardenImage = loadImage("garden.png")
  rabbitImage = loadImage("rabbit.png")
  appleImage = loadImage("apple.png")
  leafImage = loadImage("leaf.png")
  leaf2Image = loadImage("orangeLeaf.png")
}
function setup(){
  rabbit = createSprite(100,300,5,5)
  rabbit.addImage(rabbitImage)
  rabbit.scale= 0.1
  
  
  manzanas = new Group();
 leafs = new Group();
  leafs2 = new Group();
  
  createCanvas(400,400);
}

function draw() {
  background(gardenImage);
  rabbit.x = World.mouseX
  mansanaslokaz();
  killerleafs();
  killerleafs2();
drawSprites();
  textSize(20);
  text(score, 200,100)
 
  if(rabbit.isTouching(manzanas,appleater)){
  score = score +5
}
   if(rabbit.isTouching(leafs2,leaf2eater)){
      score = score -10
    }
  
  if(rabbit.isTouching(leafs,leafeater)){
        score = score -3
}
  

}
 
 function mansanaslokaz(){
    if(frameCount%50 === 0){
       apple = createSprite(Math.round(random(50,300)),30,5,5)
  apple.addImage(appleImage)
  apple.scale = 0.05
  apple.velocityY = 3
      apple.lifetime = 400
      manzanas.add(apple);
    }
  }

function appleater(sprite,manzanas){
  manzanas.remove();
}
  function killerleafs(){
    if(frameCount%75 === 0){
    leaf = createSprite(Math.round(random(50,300)),30,5,5)
    leaf.addImage(leafImage)
    leaf.scale = 0.05
    leaf.velocityY = 3
    leaf.lifetime = 400
    leafs.add(leaf)



  }
  }



function leafeater(sprite,leafs){
  leafs.remove();
}
function killerleafs2(){
  if(frameCount%200 === 0){
    leaf2 = createSprite(Math.round(random(50,300)),30,10,10)
    leaf2.addImage(leaf2Image)
    leaf2.scale = 0.05
    leaf2.velocityY = 3
    leaf2.lifetime = 400
    leafs2.add(leaf2)
   
    
  }
  


}
function leaf2eater(sprites,leafs2){
  leafs2.remove();
}