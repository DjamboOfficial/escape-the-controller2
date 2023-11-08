const player = document.getElementById("player");

class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.id = "player";
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.gameScreen.appendChild(this.element);
    this.gameEndScreen = document.getElementById("game-end");
  }

  move() {
    // this.left += this.directionX;
    // this.top += this.directionY;
    this.left += this.directionX;
    this.top += this.directionY;

    if (this.left < 5) {
      this.left = 5;
    }

    if (this.left > this.gameScreen.offsetWidth - this.width - 5) {
      this.left = this.gameScreen.offsetWidth - this.width - 5;
    }

    // handles bottom side
    if (this.top > this.gameScreen.offsetHeight - this.height - 5) {
      this.top = this.gameScreen.offsetHeight - this.height - 5;
    }
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
