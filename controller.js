class Controller {
  constructor(gameScreen, player) {
    this.gameScreen = gameScreen;
    this.left = 100;
    this.top = 0;
    this.width = 65;
    this.height = 65;
    this.element = document.createElement("img");
    this.element.classList.add("controller");
    this.element.src = "/images/enemy.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);
    this.player = player;
  }

  move() {
    this.top += 0.7;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
}
