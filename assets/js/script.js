const gameArea = document.getElementById("game-area");
const scoreElement = document.getElementById("current-score");
const highScoreElement = document.getElementById("high-score");
const controls = document.querySelectorAll("#control-btns i");
const startScreen = document.getElementById("start-screen");
const gameOverScreen = document.getElementById("game-over");
const restartBtn = document.getElementById("restart");

let gameOver = false;
let foodX;
let foodY;
let snakeX = 5;
let snakeY = 5;
let velocityX = 0;
let velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

// Getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

/**
 * Starts the game
 */
function startGame() {
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    gameArea.style.display = "grid";
    initGame();
}

/**
 * Places the food randomly on the grid
 */
function placeFood () {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

restartBtn.onclick = function() {
    window.location.reload(true);
    element.remove(startScreen);
    endGame();
};

/**
 * Ends the game
 */
function endGame() {
    clearInterval(setIntervalId);
    startScreen.style.display = "none";
    gameArea.style.display = "none";
    gameOverScreen.style.display = "block";
    localStorage.setItem("high-score", highScore);
}

/**
 * When key is pressed, change the direction of the snake
 * @param {Event} e - Event object
 */
function changeDirection(e) {
    // Changing velocity value on key press
    if(e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

/**
 * Initialize the game
 * @returns {void} - Returns nothing
 */
function initGame() {
    if(gameOver) return endGame();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    if(snakeX === foodX && snakeY === foodY) {
        placeFood();
        snakeBody.push([foodY, foodX]);
        score++;
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("high-score", highScore);
            highScoreElement.innerText = `High Score: ${highScore}`;
        }
        scoreElement.innerText = `Score: ${score}`;
    }
    snakeX += velocityX;
    snakeY += velocityY;
    
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY];

    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    gameArea.innerHTML = html;
}

placeFood();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keydown", changeDirection);