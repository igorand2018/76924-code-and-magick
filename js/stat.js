'use strict';

window.renderStatistics = function(ctx) {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(40, 5);
ctx.lineTo(80, 0);
ctx.lineTo(120, 5);
ctx.lineTo(160, 0);
ctx.lineTo(180, 5);
ctx.lineTo(220, 0);
ctx.lineTo(240, 5);
ctx.lineTo(280, 0);
ctx.lineTo(320, 5);
ctx.lineTo(360, 0);
ctx.lineTo(380, 5);
ctx.lineTo(410, 0);
ctx.lineTo(410, 110);//vertical line
ctx.lineTo(380, 105);
ctx.lineTo(340, 110);
ctx.lineTo(300, 105);
ctx.lineTo(260, 110);
ctx.lineTo(220, 105);
ctx.lineTo(180, 110);
ctx.lineTo(140, 105);
ctx.lineTo(100, 110);
ctx.lineTo(60, 105);
ctx.lineTo(20, 110);
ctx.lineTo(0, 105);
ctx.lineTo(0, 105);
ctx.closePath();
// ctx.stroke();
ctx.fill();
ctx.font = '30px Tahoma';
ctx.textBaseline = 'hanging';
ctx.fillStyle = "blue";
ctx.fillText('Привет', 10, 20);
//Background object
// ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(40, 5);
ctx.lineTo(80, 0);
ctx.lineTo(120, 5);
ctx.lineTo(160, 0);
ctx.lineTo(180, 5);
ctx.lineTo(220, 0);
ctx.lineTo(240, 5);
ctx.lineTo(280, 0);
ctx.lineTo(320, 5);
ctx.lineTo(360, 0);
ctx.lineTo(380, 5);
ctx.lineTo(410, 0);
ctx.lineTo(410, 110);//vertical line
ctx.lineTo(380, 105);
ctx.lineTo(340, 110);
ctx.lineTo(300, 105);
ctx.lineTo(260, 110);
ctx.lineTo(220, 105);
ctx.lineTo(180, 110);
ctx.lineTo(140, 105);
ctx.lineTo(100, 110);
ctx.lineTo(60, 105);
ctx.lineTo(20, 110);
ctx.lineTo(0, 105);
ctx.lineTo(0, 105);
ctx.closePath();
ctx.stroke();
};
