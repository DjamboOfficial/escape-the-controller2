🎃 **Escape the controller!** 🎃

Click <a href="http://127.0.0.1:5500/game.html">here</a> to see the deployed game.

**Description**

Object of the game is to leave the train before the controller catches you without a valid ticket.

**MVP**

The game has three classes: the **player**, which the user the control, and that can wander on the game field with the only limits being the sides of the subway car and the presence of the controller, which moves towards the player.

Then there are **NPCs** next to all exits of the train car.

Last, there is the **controller** (surprise!) popping up on the screen and acting as a countdown for the user to do the right move.

**Backlog**

I might implement an audio track to contribute to the game's spooky feeling.
Later on I might also implement different levels and a cohesive story line.

**Data structure**

Classes:

1. Game;
2. Player;
3. NPCs;
4. Controller;

**Methods** primarily involve **move()** (controlled as in the player's case, or automatised), and the triggering of different functions (victory or loss) based on the player's position on the screen compared to the exits and the controller.

(This involves tracking all items' position with **.getBoundingClientRect()**)

Also very important are time **intervals** for the animation and the controller popping onto the screen.

**States & States Transitions**

1. Start Screen;
2. Splash screen (displaying a background and the game field itself);
3. Game-over triggered by taking the wrong exit;
4. Game-over triggered by horizontally aligning with the controller;
5. Victory triggered by taking the right exit;

**Task**

- **Links**

-
