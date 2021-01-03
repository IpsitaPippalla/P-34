var dog, happyDog, foodS, foodStock, dog_img, happyDog_img
var database
function preload()
{
dog_img = loadImage("images/dogImg.png")

happyDog_img = loadImage("images/dogImg1.png")	
}

function setup() {  
  database = firebase.database();
  createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

  dog = createSprite(250,250)
  dog.addImage("dog", dog_img)
  dog.scale=0.2

}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage("dog",happyDog_img)
}
  drawSprites();




fill("white");
textSize(18);
text("Press The Up Arrow Key To Feed The Dog Milk", 50, 50);



}

function readStock(data){
  foodS = data.val();
 
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else {
    x=x-1;
  }

  database.ref(" / ").set({
  Food:x 
})
}

 function getFoodInfo(){
  var  foodInfoRef = database.ref("Food")
  foodInfoRef.on("value",(data)=>{
      allFood= data.val()
  } )
  
}


