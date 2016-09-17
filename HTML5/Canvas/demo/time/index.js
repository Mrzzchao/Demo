var CANVAS_WIDTH = 1024;
var CANVAS_HEIGHT = 500;
var RADIUS = 8;
var FILL_COLOR = 'rgb(115, 100, 236)';
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
var DIS_NUM = (RADIUS + 1) * 15; // 数字距离
var DIS_COLON = (RADIUS + 1) * 9; // 冒号距离
var FRICTION = 0.75; // 空气阻力
var currTime = [0, 0, 0]; // 当前时间
var balls = []; // 生成的小球
var colors = ["rgb(30, 233, 112)", "rgb(193, 107, 121)", "rgb(194, 109, 144)", "rgb(12, 55, 105)", "rgb(138, 183, 226)",
    "rgb(130, 6, 107)", "rgb(217, 132, 194)", "rgb(86, 208, 241)", "rgb(217, 92, 135)", "rgb(235, 227, 34)"
]
var TEXT = "Made By MChao";
window.onload = function() {
    var canvas = document.getElementById('canvas');
    var cxt = canvas.getContext('2d');

    CANVAS_WIDTH = document.body.clientWidth;
    CANVAS_HEIGHT = document.body.clientHeight;
    console.log(CANVAS_WIDTH);
    console.log(CANVAS_HEIGHT);
    MARGIN_LEFT = Math.round(CANVAS_WIDTH / 10);
    RADIUS = Math.round(CANVAS_WIDTH * 4 / 5 / 108) - 1;
    MARGIN_TOP = Math.round(CANVAS_HEIGHT / 5);

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    setInterval(function() {
        render(cxt);
    }, 50);
}

// 绘制小球
function renderBall(ball, cxt) {
    cxt.fillStyle = ball.color;
    cxt.beginPath();
    cxt.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    cxt.fill();
    cxt.closePath();
    update();

    function update() {
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vx = ball.vx;
        ball.vy += ball.g;
        var box_bottom = CANVAS_HEIGHT - ball.r;
        if (ball.y >= box_bottom) {
            ball.y = box_bottom;
            ball.vy = -ball.vy * FRICTION;
        }
        // if (ball.x <= ball.r || ball.x >= CANVAS_WIDTH - ball.r) {
        //     ball.vx = -ball.vx * FRICTION;
        // }
    }
}

// 添加需要绘制的小球
function addBall(ballX, ballY) {
    if (balls.length >= 900) {
        balls.shift();
    }
    balls.push({
        x: ballX,
        y: ballY,
        r: RADIUS * 0.75,
        vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
        vy: -(Math.random() * 20),
        g: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
    });
}

// 绘制数字
function render(cxt) {
    var time = new Date();
    var nextTime = [parseInt(time.getHours()), parseInt(time.getMinutes()), parseInt(time.getSeconds())];
    var disLeft = MARGIN_LEFT;
    handler();


    // 绘制操作
    function handler() {
        cxt.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // 清除指定区域的canvas绘制内容
        var flagL = false;
        var flagR = false;


        for (var i = 0; i < 3; i++) {
            if (Math.floor((currTime[i] / 10)) != Math.floor((nextTime[i] / 10)) && currTime[i] != 0) {
                flagL = true;
            } else {
                if (currTime[i] == 0) {
                    currTime[i] = nextTime[i];
                }
                flagL = false;
            }
            if (Math.floor((currTime[i] % 10)) != Math.floor((nextTime[i] % 10)) && currTime[i] != 0) {
                flagR = true;
            } else {
                if (currTime[i] == 0) {
                    currTime[i] = nextTime[i];
                }
                flagR = false;
            }
            renderDigit(disLeft, MARGIN_TOP, parseInt(nextTime[i] / 10), cxt, flagL);
            disLeft += DIS_NUM;
            renderDigit(disLeft, MARGIN_TOP, parseInt(nextTime[i] % 10), cxt, flagR);
            disLeft += DIS_NUM;
            if (i !== 2) { // 判断是否绘制冒号
                renderDigit(disLeft, MARGIN_TOP, 10, cxt, false);
                disLeft += DIS_COLON;
            }

        }

        balls.forEach(function(elem) {
            renderBall(elem, cxt);
        });

        renderText(cxt);

        for (var j = 0; j < 3; j++) {
            currTime[j] = nextTime[j];
        }
    }

    // 绘制时间
    function renderDigit(x, y, num, cxt, flag) {
        cxt.fillStyle = FILL_COLOR;
        var ballX = 0;
        var ballY = 0;
        digit[num].forEach(function(elemY, i) {
            elemY.forEach(function(elemX, j) {
                if (elemX == 1) {
                    cxt.beginPath();
                    ballX = x + j * 2 * (RADIUS + 1) + (RADIUS + 1);
                    ballY = y + i * 2 * (RADIUS + 1) + (RADIUS + 1);
                    if (flag) {
                        addBall(ballX, ballY);
                    }
                    cxt.arc(ballX, ballY, RADIUS, 0, 2 * Math.PI);
                    cxt.closePath();
                    cxt.fill();
                }
            });
        });
    }

    // 绘制文字
    function renderText(cxt) {
        cxt.beginPath();
        cxt.fillStyle = FILL_COLOR;
        cxt.font = "70px YaHei";
        cxt.fillText(TEXT, MARGIN_LEFT, MARGIN_TOP + (RADIUS + 1) * 30);
        cxt.closePath();
    }
}
