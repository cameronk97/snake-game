const gameArea = document.getElementById("game-area");
const scoreElement = document.getElementById("current-score");
const getHighScore = document.getElementById("high-score");
const controls = document.querySelectorAll("#control-btns button");
const startScreen = document.getElementById("start-screen");
const gameOverScreen = document.getElementById("game-over");
const restartBtn = document.getElementById("restart");

let displayGame = false;
let gameOver = false;
let gridSize = 30;
let foodX;
let foodY;
let snakeX = 5;
let snakeY = 5;
let velocityX = 0;
let velocityY = 0;
let snakeBody = [];
let interval;
let score = 0;

// Prevent default arrow key scrolling
window.addEventListener("keydown", function(event) {
    let arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (arrowKeys.includes(event.code)) {
      event.preventDefault();
    }
});

// Obtaining the high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
getHighScore.innerText = `High Score: ${highScore}`;

/**
 * Starts the game
 */
function startGame() {
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    gameArea.style.display = "grid";
    displayGame = true;
    initGamePlay();
}

/**
 * Places the food randomly on the grid
 */
function placeFood () {
    foodX = Math.floor(Math.random() * gridSize) + 1;
    foodY = Math.floor(Math.random() * gridSize) + 1;
}

restartBtn.onclick = function() {
    window.location.reload(true);
    endGame();
};

/**
 * Ends the game
 */
function endGame() {
    clearInterval(interval);
    startScreen.style.display = "none";
    gameArea.style.display = "none";
    gameOverScreen.style.display = "block";
    displayGame = false;
    localStorage.setItem("high-score", highScore);
}

/**
 * When key is pressed, change the direction of the snake
 * @param {Event} e - Event object
 */
function setDirection(e) {
    if(!displayGame) {
        return;
    }
    
    switch(e.key) {
        case "ArrowUp":
            if(velocityY === 1) return;
            velocityX = 0;
            velocityY = -1;
            break;
        case "ArrowDown":
            if(velocityY === -1) return;
            velocityX = 0;
            velocityY = 1;
            break;
        case "ArrowLeft":
            if(velocityX === 1) return;
            velocityX = -1;
            velocityY = 0;
            break;
        case "ArrowRight":
            if(velocityX === -1) return;
            velocityX = 1;
            velocityY = 0;
            break;
        default: return;
    }
}

// Event listener for arrow keys to call the setDirection function
controls.forEach(button => button.addEventListener("click", () => setDirection({ key: button.dataset.key })));

/**
 * Initialize the game
 * @returns {void} - Returns nothing
 */
function initGamePlay() {
    if(gameOver) return endGame();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    if(snakeX === foodX && snakeY === foodY) {
        placeFood();
        snakeBody.push([foodY, foodX]);
        score++;
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("high-score", highScore);
            getHighScore.innerText = `High Score: ${highScore}`;
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
interval = setInterval(initGamePlay, 100);
document.addEventListener("keydown", setDirection);