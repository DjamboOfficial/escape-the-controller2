window.onload = function () {
  console.log("page has correctly loaded!");
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("train-carriage").style.display = "none";
  document.getElementById("game-over").style.display = "none";
  document.getElementById("betrayed-by-people").style.display = "none";
  document.getElementById("got-caught").style.display = "none";
  document.getElementById("screen1victory").style.display = "none";

  const game = new Game();

  const startButton = document.getElementById("start-button");
  document
    .getElementById("start-button")
    .addEventListener("click", function () {
      startGame();
    });

  const restartButton = document.getElementById("restart-button");
  document
    .getElementById("restart-button")
    .addEventListener("click", function () {
      restartGame();
    });

  function startGame() {
    console.log("Start!");
    game.start();
  }

  function handleKeydown(event) {
    event.preventDefault();
    if (event.key === "ArrowLeft") {
      game.player.directionX = -2;
    }
    if (event.key === "ArrowUp") {
      game.player.directionY = -2;
    }
    if (event.key === "ArrowRight") {
      game.player.directionX = 2;
    }
    if (event.key === "ArrowDown") {
      game.player.directionY = 2;
    }
  }

  function handleKeyup(event) {
    event.preventDefault();

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      game.player.directionX = 0;
    }
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      game.player.directionY = 0;
    }
  }

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);

  function restartGame() {
    location.reload();
  }
};
