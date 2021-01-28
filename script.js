let canvas = document.querySelector('canvas')
ctx = canvas.getContext("2d");

canvas.style.border = '2px solid black'
let intervalID = 0
let score = 0;


// Background
let backImg1 = document.createElement('img')
backImg1.src = 'images/sky.jpg'
let audio = new Audio ('music/music.wav')

//Meteors
let player = document.createElement('img')
player.src = 'images/player.png' 
let meteor1 = document.createElement('img')
meteor1.src = 'images/meteor1.png'
let meteor2 = document.createElement('img')
meteor2.src = 'images/meteor2.png'
let meteor3 = document.createElement('img')
meteor3.src = 'images/meteor3.png'
let meteor4 = document.createElement('img')
meteor4.src = 'images/meteor4.png'
let meteors = [{x:0 , y:canvas.width - 900, img: meteor1}]
let meteorImgs = [meteor1, meteor2, meteor3, meteor4]

// Player
let isLeftArrow = false;
let isRightArrow = false
let incrementPlayer = 5;
let playerX = 250
let playerY = 750;
let playerWidth = 100


document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowRight") {
       isRightArrow = true;
       isLeftArrow = false;
    }
    else if (event.key == "ArrowLeft") {
       isRightArrow = false;
       isLeftArrow = true;
    }
})

document.addEventListener('keyup', (event) => {
    isRightArrow = false;
    isLeftArrow = false;
})


function background(){
        ctx.drawImage(backImg1, 0, 0)
}

function Player() {   
    ctx.drawImage(player, playerX, playerY)
  }


function Meteors() {
for(let i=0; i<meteors.length  ; i++) {
    let meteorImg = meteorImgs[Math.floor(Math.random()* meteorImgs.length)] 
    ctx.drawImage(meteors[i].img, meteors[i].x, meteors[i].y)
    meteors[i].y += 5

    if (meteors[i].y == 50) {
        score++
        meteors.push({
            x: Math.floor(Math.random()* canvas.width - 50),
            y: canvas.width - 900,
            img: meteorImg
        })
    }
    
    if (meteors[i].y > canvas.height && meteors[i].y > 0) {
        meteors.splice(i, 1)
    }
    Collision(i);
 }
}

function Collision(i) {
    if(meteors[i].y + meteors[i].img.height >= playerY &&
        ( meteors[i].y > 0 && (playerX <= meteors[i].x && playerX + playerWidth >= meteors[i].x) || (playerX <= meteors[i].x + meteors[i].img.width && playerX >= meteors[i].x)) ){
        meteors.splice(i,1)
        gameOver()
 }
}




function draw() {
  background()
  Player()
  Meteors()  
 audio.volume = 0.2
 audio.loop = true

  if (isRightArrow && (playerX + playerWidth < canvas.width)){
      playerX += incrementPlayer
  }
  else if (isLeftArrow && playerX > 0) {
      playerX -= incrementPlayer
  }


}

function gameStart() {
    document.getElementById("divStart").style.display="none";
    document.getElementById("myCanvas").style.display= "";
    document.getElementById("divEnd").style.display="none";
    audio.play();
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)  
       }, 7)
}


function gameOver() {
    document.getElementById("divEnd").style.display="block";
    document.getElementById("myCanvas").style.display= "none";
    clearInterval(intervalID)
    audio.pause(); 
    playerX = 250
    meteors = [{x:50 , y: -200, img: meteor1}]
}






