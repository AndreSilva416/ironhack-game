let canvas = document.querySelector('canvas')
ctx = canvas.getContext("2d");

canvas.style.border = '2px solid black'
let intervalID = 0


// Images
// let backImg1 = document.createElement('img')
// backImg1.src = 'images/sky.jpg'
// let backImg2 = document.createElement('img')
// backImg2.src = ''

let ship = document.createElement('img')
ship.src = 'images/Ship.png' 

// let meteor1 = document.createElement('img')
// meteor1.src = 'images/meteor1'
// let meteor2 = document.createElement('img')
// meteor2.src = 'images/meteor2'
// let meteor3 = document.createElement('img')
// meteor3.src = 'images/meteor3'
// let meteor4 = document.createElement('img')
// meteor4.src = 'images/meteor4'

// Controler
// let isLeftArrow = false;
// let isRightArrow = false
    
// document.addEventListener('keydown', (event) => {
//     if (event.key == "ArrowRight") {
//        isRightArrow = true;
//        isLeftArrow = false;
//     }
//     else if (event.key == "ArrowLeft") {
//        isRightArrow = false;
//        isLeftArrow = true;
//     }
// })

// document.addEventListener('keyup', (event) => {
//     isRightArrow = false;
//     isLeftArrow = false;
// })


function draw() {

    function background(){
        ctx.drawImage(backImg1, 0, 0)
    }


   function ship() {
       ctx.drawImage(ship, 0, 0)
  }

//    function Meteors() {

//   }

//    function Collision() {

//   }

}

ctx.drawImage(backImg1)
ctx.drawImage(ship)













window.addEventListener('load', () => {
    intervalID = setInterval(() => {
      requestAnimationFrame(draw)  
     }, 1000)
})
