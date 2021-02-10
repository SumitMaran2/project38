var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var bothPlayers;
var distance = 0;
var database;

var form, game;


var bike1,bike2;
var road, bike1_img, bike_img;

function preload(){
  road = loadImage("images/road.png");
  bike1_img = loadImage("images/bike1.jpg");
  bike2_img = loadImage("images/bike1.png");
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
   if(playerCount === 2){
     game.update(1);
   }
   if(gameState === 2){
    game.end();
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
