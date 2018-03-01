const Platform = require('./platform.js')

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('Canvas');
  const ctx = canvas.getContext('2d');
  var background = new Image();
background.src = "../brick.jpg";



  let x = 400;
  let y = 400;
  let ballx = x + 50;
  let bally = y - 10;
  let test = 0;
  let points = 0;

  let rando = () => {
    return Math.floor(Math.random() * Math.floor(300));
  }
  let limit = rando();
  let colorRando = () => {
    return Math.floor(Math.random() * Math.floor(300));
  }


  let right = true;
  let nextColor
  function draw() {

    document.getElementById('score').innerHTML = `SCORE: ${points}`
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle   = `rgb( ${colorRando()}, 0, ${colorRando()})`;
    ctx.strokeStyle = '#000000';

    // var img = new Image();
    // img.src = '';
    // img.width = 10;
    // img.height = 10;
    // ctx.drawImage(img, 150, 150, 100, 100);
    // ctx.fill();

    ctx.fillRect(x, y, 150, 10)
    ctx.beginPath();
    ctx.arc(ballx, bally, 10, 0, Math.PI*2);
    ctx.fillStyle = `rgb(0, ${colorRando()}, ${colorRando()})`;
    ctx.fill();
    ctx.closePath();


    if((ballx < x ) || (ballx > x + 150) ){
      bally += 5
    }
    if((bally > y)) {
      bally += 5
    }

    if( points % 2 === 0 && bally < 20) {
      points += rando();
    } else if (points % 2 === 1 && bally > 630 && y >= bally) {
      points += rando();
    } else if (bally < y - 10){
      alert(`You lose! You got ${points} points`);
    }


     if(test < limit && right && ballx < 1000){
       ballx += 1;
       test += 1;
     } else if(test < limit && !right && ballx > 0) {
       ballx -= 1;
       test += 1;
     } else {
       test = 0;
       limit = rando();
       right = !right
     }
  }



  key('w', function() { y -= 20; bally -= 20});
  key('s', function() { y += 20; bally += 20});
  key('a', function() { x -= 20; ballx -= 5});
  key('d', function() { x += 20; ballx += 5});

  setInterval(draw, 15);

} )
