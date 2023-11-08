class Game {
  // All the elements of the game are here.
  constructor() {
    this.timeoutID = null;
    this.gameEnded = false;
    this.startScreen = document.getElementById("intro-screen");
    this.gameScreen = document.getElementById("train-carriage");
    this.gameOverScreen = document.getElementById("game-over");
    // sss
    this.player = new Player(
      this.gameScreen,
      100,
      550,
      50,
      50,
      "/images/mainCharacter.png"
    );
    this.controller = new Controller(this.gameScreen, this.player);
    this.seatsL = document.querySelector(".seats-left");
    this.seatsR = document.querySelector(".seats-right");
    this.npcs = [
      {
        name: "npc1",
        instance: new npcs(
          this.seatsL.children[6],
          50,
          50,
          "/images/npc11.png"
        ),
      },
      {
        name: "npc2",
        instance: new npcs(
          this.seatsR.children[10],
          50,
          50,
          "/images/npc22.png"
        ),
      },
      {
        name: "npc3",
        instance: new npcs(
          this.seatsR.children[6],
          50,
          50,
          "/images/npc33.png"
        ),
      },
      {
        name: "npc4",
        instance: new npcs(
          this.seatsR.children[5],
          50,
          50,
          "/images/npc55.png"
        ),
      },
    ];

    this.gamesIsOver = false;
  }

  // What happens when you press start.

  start() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    document.getElementById("train-carriage").style.display = "block";
    document.getElementById("game-over").style.display = "none";

    // NPCs are pushed onto the screen. They look pretty s*** - but they're supposed to.

    //  By pressing start, you should be able to move the player's icon.

    setTimeout(() => {
      this.gameScreen.style.animation = "none";
      document.getElementById("story-box").innerHTML =
        "The train has stopped.\n Someone is coming in...";
    }, 7000);

    this.startScreen.style.display = "none";
    this.gameOverScreen.style.display = "none";

    setTimeout(() => {
      document.getElementsByClassName("controller")[0].style.display = "block";
      this.gameLoop();
    }, 10000);
  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }
    this.timeoutID = setTimeout(() => {
      this.update();
    }, 2000);

    document.getElementById("story-box").innerHTML =
      "Here comes the controller. Leave the train! Also, don't trust all passengers next to the doors... they might tell on you!";
    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    this.player.move();
    this.controller.move();
    if (this.gameEnded) {
      return;
    }

    const exit1 = this.seatsL.children[7].getBoundingClientRect();
    const exit2 = this.seatsR.children[9].getBoundingClientRect();
    const exit3 = this.seatsR.children[4].getBoundingClientRect();
    const playerPosition = this.player.element.getBoundingClientRect();
    const controllerPosition = this.controller.element.getBoundingClientRect();

    const tolerance = 10;
    console.log(
      playerPosition.x,
      exit3.x,
      playerPosition.y,
      exit3.y,
      tolerance
    );

    if (
      Math.abs(playerPosition.x - exit3.x) <= tolerance &&
      Math.abs(playerPosition.y - exit3.y) <= tolerance
    ) {
      console.log("winning");
      this.youWon();
      this.gameEnded = true;
      return;
    }
    if (
      Math.abs(playerPosition.x - exit1.x) <= tolerance &&
      Math.abs(playerPosition.y - exit1.y) <= tolerance
    ) {
      console.log("Mistake1");
      this.endGame();
      this.gameEnded = true;
      document.getElementById("betrayed-by-people").style.display = "block";
      document.getElementById("game-screen").style.display = "none";
      document.getElementById("train-carriage").style.display = "none";
      return;
    }

    if (
      Math.abs(playerPosition.x - exit2.x) <= tolerance &&
      Math.abs(playerPosition.y - exit2.y) <= tolerance
    ) {
      console.log("Mistake2");
      this.endGame();
      this.gameEnded = true;
      document.getElementById("betrayed-by-people").style.display = "block";
      document.getElementById("game-screen").style.display = "none";
      document.getElementById("train-carriage").style.display = "none";
    }

    if (Math.abs(playerPosition.y - controllerPosition.y) <= tolerance) {
      console.log("CK");
      this.endGame();
      this.gameEnded = true;
      document.getElementById("got-caught").style.display = "block";
      document.getElementById("game-screen").style.display = "none";
      document.getElementById("train-carriage").style.display = "none";
      return;
    }
  }

  youWon() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("train-carriage").style.display = "none";
    document.getElementById("betrayed-by-people").style.display = "none";
    document.getElementById("screen1victory").style.display = "block";
    document.getElementById("game-over").style.display = "none";
  }

  endGame() {
    this.gameEnded = true;
    this.gameIsOver = true;

    setTimeout(() => {
      document.getElementById("game-screen").style.display = "none";
      document.getElementById("train-carriage").style.display = "none";
      document.getElementById("betrayed-by-people").style.display = "none";
      document.getElementById("got-caught").style.display = "none";

      document.getElementById("game-over").style.display = "block";

      document.getElementById("game-over-message").innerHTML =
        "Now you're left alone, at night, in an abandoned station...";
    }, 5000);
  }
}
