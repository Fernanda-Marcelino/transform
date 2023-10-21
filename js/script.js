const canvas = document.getElementById('puzzle');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "#362656";
ctx.fillRect(0,700,90,500);
ctx.translate(90, 100);
ctx.fillRect(0,700,90,800);

