var c = document.getElementById("myCanvas");
c.width = 1024;
c.height = 500;
var ctx = c.getContext("2d");

var cX = 300;
var cY = 300;
var r = 200;
var sArg = 0;
var eArg = 0.5*Math.PI;
var anticlockwise = true;                      // 顺时针还是逆时针

ctx.beginPath();
ctx.arc(cX, cY, r, sArg, eArg, anticlockwise);               // 圆心坐标,半径,从哪个弧度到那个弧度结束
ctx.lineWidth = 5;
ctx.strokeStyle = 'rgb(54, 228, 160)';
ctx.stroke();                                               // 绘制
ctx.fillStyle = 'rgb(157, 80, 84)';
ctx.fill();
ctx.closePath();
