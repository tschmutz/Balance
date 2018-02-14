
class Ball {

  constructor(ctx, platform) {
    this.platform = platform
    this.ctx = ctx;
  }

  let ballRadius = 10;

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    this.ctx.fillStyle = "#black";
    this.ctx.fill();
    this.ctx.closePath();
  }



}
