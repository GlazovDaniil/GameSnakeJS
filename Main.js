alert('Самое время поиграть в новую мега игру "червяк-пицеед"!');
    class Boundary {
      constructor({ position, img }) {
        this.position = position;
        this.width = 32;
        this.height = 32;
        this.img = img;
      }
  
      draw() {
        ctx1.drawImage(this.img, this.position.x, this.position.y);
      }
    }

    
    const game1 = document.getElementById("game1"); //обращение к объекту с игрой в html
    const ctx1 = game1.getContext("2d"); //формат игры
    const width = 32,
    height = 32;
    const boundaries = [];
    
    const map = [
        ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
        ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
        ['3', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '3'],
        ['3', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '3'],
        ['3', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '3'],
        ['3', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '3'],
        ['3', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '3'],
        ['3', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '3'],
        ['3', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '3'],
        ['3', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '3'],
        ['3', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '3'],
        ['3', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '3'],
        ['3', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '3'],
        ['3', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '3'],
        ['3', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '3'],
        ['3', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '3'],
        ['3', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '3'],
        ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
      ];
    
      
    function mapDraw(){
      setCanvasSize();
    
      map.forEach((row, i) => {
        row.forEach((symbol, j) => {
          switch (symbol) {
            case '1':
                boundaries.push(createBoundary(j, i, 'first.png'));
                break;
              case '2':
                boundaries.push(createBoundary(j, i, 'second.png'));
                break;
              case '3':
                boundaries.push(createBoundary(j, i, 'Third.png'));
                break;
              case '4':
                boundaries.push(createBoundary(j, i, 'fourth.png'));
                break;
          }
        });
      });
  
    animate();
    }

    mapDraw();

    function animate() {
      requestAnimationFrame(animate);
      boundaries.forEach((boundary) => boundary.draw());
    }
  
    function createBoundary(j, i, src) {
      return new Boundary({
        position: {
          x: 32 * j,
          y: 32 * i,
        },
        img: createImage(src),
      });
    }
  
    function setCanvasSize() {
        game1.width = window.innerWidth;
        game1.height = window.innerHeight;
    }
  
    function createImage(src) {
      const img = new Image();
      img.src = src;
  
      return img;
    }
  
const game = document.getElementById("game"); //обращение к объекту с игрой в html
const ctx = game.getContext("2d"); //формат игры


const food = new Image();
food.src = "food.png";

let box = 32;
let score = 0;
let firstStart = true;
let newfood;
let stopped = true;
let speed = 300;
let loose = false;

function CreateFood(){
    newfood = {
        x: getRandomInt(1,18) * box,
        y: getRandomInt(1,16) * box + 64,
    };
}

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};

document.addEventListener("keydown", Hotba);

let dir;
function Hotba() {
    if(event.keyCode == 37 && dir != "right"){
        dir = "left";
    }
    else{
        if(event.keyCode == 38 && dir != "down"){
            dir = "up";
        }
        else{
            if(event.keyCode == 39 && dir != "left"){
                dir = "right";
            }
            else{
                if(event.keyCode == 40 && dir != "up"){
                    dir = "down";
                }
            }
        }
    }
}


function Painted() {
    ctx.clearRect(0, 0, 609, 609);
    if(firstStart == true){
        firstStart = false;
        CreateFood();
    }
    //mapDraw();
    ctx.drawImage(food, newfood.x, newfood.y);
    for(let i = 0; i < snake.length ; i++){
        ctx.fillStyle = i == 0 ? "burlywood" : "blanchedalmond";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

  ctx.fillStyle = "white";
	ctx.font = "50px Arial";
	ctx.fillText("Score: " + score, box * 2.5, box * 1.7);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == newfood.x && snakeY == newfood.y){
        score++;
        CreateFood();
    } else {
        snake.pop();
    }

    if(snakeX < box || snakeX > box * 17 
        || snakeY < 3 * box || snakeY > box * 17){
        if (loose == false){
          alert('You lost! You score: ' + score);
          clearInterval(interval);
          loose = true;
        }
            
        
    }
    
    if (dir == "left") snakeX -= box;
    if (dir == "right") snakeX += box;
    if (dir == "down") snakeY += box;
    if (dir == "up") snakeY -= box;
    
    let newhead = {
        x: snakeX,
        y: snakeY
    };
    
    SamEmSeba( newhead, snake);

    snake.unshift(newhead);
    
}

function Restart(){
  snake.length = 0;
  interval = 0;
  score = 0;
  snake[0] = {
    x: 9 * box,
    y: 10 * box
  };
  CreateFood();
  dir ='';
  ctx.clearRect(0, 0, 609, 609);
  setNewInterval();
  loose = true;
}

function getRandomInt(min, max) {  //Максимум не включается, минимум включается
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

function SamEmSeba(head, arr){
    for(let i = 0; i < arr.length ; i++){
        if(head.x == arr[i].x && head.y == arr[i].y){
          if (loose == false){
            alert('You lost! You score: ' + score);
            clearInterval(interval);
            loose = true;
          }
        }
            
    }
}
let interval;
function setNewInterval(){
  interval = setInterval(Painted, 300);
}

if(firstStart == true)
setNewInterval();

 
