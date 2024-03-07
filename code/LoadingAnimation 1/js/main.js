const radius = 200;
const total = 8;
const radian = (360/total)*Math.PI/180

var items = document.querySelectorAll('.item');

for(let i = 0; i < total; i++) {
    const currentRadian = i*radian;

    const x = radius*Math.cos(currentRadian) + radius - 25;
    const y = radius*Math.sin(currentRadian) + radius - 25;
    
    items[i].style.left = x + 'px';
    items[i].style.top = y + 'px';
    items[i].style.transform = `rotate(${currentRadian}rad)`

}