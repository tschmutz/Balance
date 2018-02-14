const Platform = require('./platform.js')

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('Canvas');
  const ctx = canvas.getContext('2d');


  let x = 400;
  let y = 400;
  let ballx = x + 50;
  let bally = y - 10;
  let test = 0;


  let rando = () => {
    return Math.floor(Math.random() * Math.floor(300));
  }
  let limit = rando();

  let right = true;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle   = '#FF0000';
    ctx.strokeStyle = '#000000';

    ctx.fillRect(350, 0, 100, 20)

    ctx.fillRect(x, y, 100, 10)
    ctx.beginPath();
    ctx.arc(ballx, bally, 10, 0, Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();


    if((ballx < x ) || (ballx > x + 100) ){
      bally += 1
    }
    if((bally > y)) {
      bally += 1
    }

    if(( ballx > 350 && ballx < 450) && bally === 20) {
      alert('You win')
    } else if (bally === 650) {
      alert('You lose')
    }

     if(test < limit && right){
       ballx += 1;
       test += 1;
     } else if(test < limit && !right) {
       ballx -= 1;
       test += 1;
       console.log(test, limit);
     } else {
       test = 0;
       limit = rando();
       right = !right
     }
  }

  key('w', function() { y -= 10; bally -= 10});
  key('s', function() { y += 10; bally += 10});
  key('a', function() { x -= 20; ballx -= 5});
  key('d', function() { x += 20; ballx += 5});
  setInterval(draw, 15);
} )
