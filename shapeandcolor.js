const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 4;

ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(50, 50);

ctx.lineTo(150, 50);
let triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50+triHeight);
ctx.lineTo(50, 50);
ctx.fill();


function degToRad(degrees) {
    return degrees * Math.PI / 180;
};
