const canvas = document.getElementById("spel");
const context = canvas.getContext("2d");

const scale = 20;
let snake = { x: 0, y: 0 };
let direction = { x: 1, y: 0 };

function drawSnake() {
  context.fillStyle = "#0f0";
  context.fillRect(snake.x, snake.y, scale, scale);
}

function updateSnake() {
  snake.x += direction.x * scale;
  snake.y += direction.y * scale;
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  updateSnake();
  drawSnake();
}

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") direction = { x: 0, y: -1 };
  if (e.key === "ArrowDown") direction = { x: 0, y: 1 };
  if (e.key === "ArrowLeft") direction = { x: -1, y: 0 };
  if (e.key === "ArrowRight") direction = { x: 1, y: 0 };
});

setInterval(gameLoop, 200);
