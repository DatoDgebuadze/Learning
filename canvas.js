var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100); // x,y,width, height

c.fillRect(300, 600, 100, 100);


console.log(canvas);

