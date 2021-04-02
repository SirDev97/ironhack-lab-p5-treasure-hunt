class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(200, 500);
    this.score = 0;
  }

  drawGrid() {
    background(150);
    // for(let i= 0; i<=1000; i+=100)
    // {
    //   line(0, i, WIDTH, i); //horizontal lines - y changes
    //   line(i, 0, i, HEIGHT); //vertical lines - x changes    
    // }
    for (let x = 0; x < WIDTH; x += SQUARE_SIDE) {
      for (let y = 0; y < HEIGHT; y += SQUARE_SIDE) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
    // this.player.draw();
  }

  drawGame() {
    game.player.draw();
    game.treasure.drawTreasure();

    if (game.player.col === game.treasure.col && game.player.row === game.treasure.row) {
      game.treasure.setRandomPosition();
      this.score++;
    }
    document.querySelector('h2').querySelector('span').innerText = this.score;
  }

  preload() {
    this.player.preload();
    this.treasure.preloadTreasure();
  }

  drawTreasure() {
    this.treasure.drawTreasure();
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = 100;
    this.height = 100;
    this.image;
  }

  moveUp() {
    this.col -= 100;
    this.image = loadImage('assets/character-up.png');
  }

  moveDown() {
    this.col += 100;
    this.image = loadImage('assets/character-down.png');
  }

  moveLeft() {
    this.row -= 100;
    this.image = loadImage('assets/character-left.png');
  }

  moveRight() {
    this.row += 100;
    this.image = loadImage('assets/character-right.png');
  }

  preload() {
    this.image = loadImage('assets/character-down.png');
  }

  draw() {
    image(this.image, this.row, this.col, this.width, this.height);
  }

}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = 100;
    this.height = 100;
    this.image;
  }

  preloadTreasure() {
    this.image = loadImage('assets/treasure.png');
  }

  drawTreasure() {
    image(this.image, this.row, this.col, this.width, this.height);
  }

  setRandomPosition() {
    this.row = (Math.floor(Math.random() * 10)) * 100;
    this.col = (Math.floor(Math.random() * 10)) * 100;
  }

}