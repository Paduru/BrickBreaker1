var PLAY = 1;
var END = 0;

var gameState;

var backgroundImg;
var paddle;
var ball;
var tiles;

function preload() {
  backgroundImg = loadImage("Images/bg.png");
}

function setup() {
  gameState = PLAY;
  createCanvas(windowWidth, windowHeight);
  tiles = [];
  ball = new Ball(0.5 * windowWidth, 0.6 * windowHeight);
  paddle = new Paddle(0.5 * windowWidth, 0.9 * windowHeight);
  for (var i = 0.05; i <= 1; i += 0.1) {
    for (var x = 0.05; x < 0.5; x += 0.05) {
      tiles.push(new Tile(i * windowWidth, x * windowHeight));
    }
  }
  for (var z = 0; z < tiles.length; z++) {
    tiles[z].tileImage();
  }
}

function draw() {
  background(backgroundImg);

  paddle.sprite.x = mouseX;

  drawSprites();
}
