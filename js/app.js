const game = new Game();

let startButton = document.getElementById('begin-game');

startButton.addEventListener('click', function() {
        if (startButton.textContent.trim() === 'Start') {
            game.startGame();

            this.style.display = 'none';
            document.getElementById('play-area').style.opacity = '1';
        } else if (startButton.textContent.trim() === 'Restart') {
            window.location.reload(); //changes the button to restart and reloads the game.
        }
});

//event listener to handle the keydown event in Game.js
document.addEventListener('keydown', function(event) {
    game.handleKeydown(event);
});