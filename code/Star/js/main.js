var canvas = document.querySelector('canvas');
const width = window.innerWidth - 20;
const height = window.innerHeight - 20;
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

const colors = ['#FAEF9B', '#FF004D', '#864AF9', '#7FC7D9'];

function getDistance(x1, y1, x2, y2) {
	const xDistance = x2 - x1;
	const yDistance = y2 - y1;
	return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function randomIntFromRange(min, max) {
	// Sử dụng Math.floor để làm tròn xuống và chuyển thành số nguyên
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawLine(x1,y1,x2,y2,color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

function drawRandomCurve(x1,y1,x2,y2,color) {
    // Đặt màu cho đường vẽ
    ctx.strokeStyle = color; // Đen

    // Bắt đầu vẽ đường cong
    ctx.beginPath();

    // Đặt điểm bắt đầu
    ctx.moveTo(x1, y1);

    // Điểm kiểm soát ngẫu nhiên ở giữa
    var controlX = Math.random() * canvas.width;
    var controlY = Math.random() * canvas.height;

    // Điểm kết thúc
    ctx.quadraticCurveTo(controlX, controlY, x2, y2);

    // Kết thúc vẽ đường cong
    ctx.stroke();
}

class Circle {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.fillColor = colors[Math.floor(Math.random() * colors.length)];
	
        this.dx = (Math.random() - 0.5);
		this.dy = (Math.random() - 0.5);
    }

	draw = function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		// ctx.strokeStyle = this.fillColor;
		// ctx.stroke();
		ctx.fillStyle = this.fillColor;
		ctx.fill();

		ctx.closePath();
	};

	update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;


        if(  getDistance(this.x, this.y, mouse.x, mouse.y) <= 200) {
            drawLine(this.x, this.y, mouse.x, mouse.y, this.fillColor)
            
            // drawRandomCurve(this.x, this.y, mouse.x, mouse.y, this.fillColor)
            this.draw();
        
        }

	};
}

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x
    mouse.y = e.y
})

let circles = [];
let length = 500;

for (let i = 0; i < length; i++) {
	const radius = 1;
	let x = randomIntFromRange(radius, width);
	let y = randomIntFromRange(radius, height);
    let check = true;
	while (check === true) {
        check = false;
		for (let j = 0; j < circles.length; j++) {
			if (getDistance(circles[j].x, circles[j].y, x, y) > circles[j].radius + radius) {
				continue;
			}

			x = randomIntFromRange(radius, width);
			y = randomIntFromRange(radius, height);
            check = true;
		}

	}

	let c1 = new Circle(x, y, radius);
    circles.push(c1)
}

function animate() {
    requestAnimationFrame(animate);
    // ctx.clearRect(0,0,width, height);

    // ctx.fillStyle = 'rgba(0,0,0, 1)';
	// ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(0,0,0,0.09)';
	ctx.fillRect(0,0,canvas.width, canvas.height);


    for (let i = 0; i < length; i++) {
        circles[i].update();
    }
    console.log(mouse);

}
animate();
//