class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(160, 160);
  }
  drawGrid() {
    background(150);
    for (let x = 0; x < WIDTH; x += SQUARE_SIDE) {
      for (let y = 0; y < HEIGHT; y += SQUARE_SIDE) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
  }
  preload() {
    this.player.preload();
    this.treasure.preloadTreasure();
  }
  drawPlayer() {
    this.player.draw();
  }
  drawTreasure() {
    this.treasure.drawTreasure();
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = 80;
    this.height = 80;
    this.image;
  }
  moveUp() {
    this.col -= 80;
    this.image = loadImage('assets/character-up.png');
  }
  moveDown() {
    this.col += 80;
    this.image = loadImage('assets/character-down.png');
  }
  moveLeft() {
    this.row -= 80;
    this.image = loadImage('assets/character-left.png');
  }
  moveRight() {
    this.row += 80;
    this.image = loadImage('assets/character-right.png');
  }
  preload() {
    this.image = loadImage('assets/character-down.png');
  }
  draw() {
    image(this.image, this.row, this.col, this.width, this.height);
  }
}

class Treasure extends Player {
  constructor(col, row, width, height, image) {
    super(col, row, width, height, image);
  }
  preloadTreasure() {
    this.image = loadImage('assets/treasure.png');
  }
  drawTreasure() {
    image(this.image, this.row, this.col, this.width, this.height);
  }
  setRandomPosition(col, row) {
  }
}