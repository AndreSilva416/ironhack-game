let canvas = document.querySelector('canvas')
ctx = canvas.getContext("2d");

canvas.style.border = '2px solid black'
let intervalID = 0
let score = 0;

// let splash = document.querySelector("#startScreen")
// let gameOver = document.querySelector("#endScreen")
// let playBtn = document.querySelector()

// Background
let backImg1 = document.createElement('img')
backImg1.src = 'images/sky.jpg'
// let backImg2 = document.createElement('img')
// backImg2.src = ''

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
    ctx.drawImage(player, playerX, 750)
  }


function Meteors() {
    
for(let i=0; i<meteors.length  ; i++) {
    let meteorImg = meteorImgs[Math.floor(Math.random()* meteorImgs.length)] 
    ctx.drawImage(meteors[i].img, meteors[i].x, meteors[i].y)
    meteors[i].y++

    if (meteors[i].y == 50) {
        meteors.push({
            x: Math.floor(Math.random()* canvas.width - 50),
            y: canvas.width - 900,
            img: meteorImg
        })
    }
    
    
 }
}

//function Collision() {

//}

function draw() {
  background()
  Player()
  Meteors()  

  if (isRightArrow && (playerX + playerWidth < canvas.width)){
      playerX += incrementPlayer
  }
  else if (isLeftArrow && playerX > 0) {
      playerX -= incrementPlayer
  }

  

}






window.addEventListener('load', () => {
    intervalID = setInterval(() => {
      requestAnimationFrame(draw)  
     }, 10)
})
