const canvas = document.getElementById('puzzle');
const ctx = canvas.getContext('2d');

  // Círculo
  var circleX = 50;
  var circleY = 50;
  var circleRadius = 20;
  var circleSpeedX = 2;
  var circleSpeedY = 2;
  var circleScale = 1;
  var circleAngle = 0;

  // Retângulo
  var rectX = 100;
  var rectY = 150;
  var rectWidth = 30;
  var rectHeight = 60;
  var rectSpeedX = 1;
  var rectSpeedY = -1;
  var rectScale = 1;
  var rectAngle = 0;

  // Triângulo
  var triangleX = 200;
  var triangleY = 300;
  var triangleSize = 40;
  var triangleSpeedX = -2;
  var triangleSpeedY = 1;
  var triangleScale = 1;
  var triangleAngle = 0;

  // Quadrado amarelo
  var yellowSquareX = 400;
  var yellowSquareY = 100;
  var yellowSquareSize = 100;

  // Variáveis de controle das teclas pressionadas
  var keys = {};

  document.addEventListener("keydown", function (e) {
      keys[e.key] = true;
  });

  document.addEventListener("keyup", function (e) {
      keys[e.key] = false;
  });

  function moveYellowSquare() {
      if (keys["w"] && yellowSquareY > 0) {
          yellowSquareY -= 5;
      }
      if (keys["s"] && yellowSquareY + yellowSquareSize < canvas.height) {
          yellowSquareY += 5;
      }
      if (keys["a"] && yellowSquareX > 0) {
          yellowSquareX -= 5;
      }
      if (keys["d"] && yellowSquareX + yellowSquareSize < canvas.width) {
          yellowSquareX += 5;
      }
  }

  function drawShapes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Chame a função para mover o quadrado amarelo
      moveYellowSquare();

      // Desenhar o círculo
      ctx.save();
      ctx.translate(circleX, circleY);
      ctx.rotate(circleAngle);
      ctx.scale(circleScale, circleScale);
      ctx.beginPath();
      ctx.arc(0, 0, circleRadius, 0, Math.PI * 2);
      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.closePath();
      ctx.restore();

      // Mover o círculo
      circleX += circleSpeedX;
      circleY += circleSpeedY;

      // Verificar colisão com as bordas
      if (circleX - circleRadius < 0 || circleX + circleRadius > canvas.width) {
          circleSpeedX = -circleSpeedX;
      }
      if (circleY - circleRadius < 0 || circleY + circleRadius > canvas.height) {
          circleSpeedY = -circleSpeedY;
      }

      // Desenhar o retângulo
      ctx.save();
      ctx.translate(rectX, rectY);
      ctx.rotate(rectAngle);
      ctx.scale(rectScale, rectScale);
      ctx.beginPath();
      ctx.rect(0, 0, rectWidth, rectHeight);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();
      ctx.restore();

      // Mover o retângulo
      rectX += rectSpeedX;
      rectY += rectSpeedY;

      // Verificar colisão com as bordas
      if (rectX < 0 || rectX + rectWidth > canvas.width) {
          rectSpeedX = -rectSpeedX;
      }
      if (rectY < 0 || rectY + rectHeight > canvas.height) {
          rectSpeedY = -rectSpeedY;
      }

      // Desenhar o triângulo
      ctx.save();
      ctx.translate(triangleX, triangleY);
      ctx.rotate(triangleAngle);
      ctx.scale(triangleScale, triangleScale);
      ctx.beginPath();
      ctx.moveTo(0, -triangleSize);
      ctx.lineTo(triangleSize, triangleSize);
      ctx.lineTo(-triangleSize, triangleSize);
      ctx.closePath();
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();

      // Mover o triângulo
      triangleX += triangleSpeedX;
      triangleY += triangleSpeedY;

      // Verificar colisão com as bordas
      if (triangleX < 0 || triangleX > canvas.width) {
          triangleSpeedX = -triangleSpeedX;
      }
      if (triangleY < 0 || triangleY > canvas.height) {
          triangleSpeedY = -triangleSpeedY;
      }

      // Desenhar o quadrado amarelo
      ctx.fillStyle = "yellow";
      ctx.fillRect(yellowSquareX, yellowSquareY, yellowSquareSize, yellowSquareSize);

      // Verificar colisões com as formas geométricas
      if (
          (circleX + circleRadius > yellowSquareX &&
          circleX - circleRadius < yellowSquareX + yellowSquareSize &&
          circleY + circleRadius > yellowSquareY &&
          circleY - circleRadius < yellowSquareY + yellowSquareSize) ||
          (rectX + rectWidth > yellowSquareX &&
          rectX < yellowSquareX + yellowSquareSize &&
          rectY + rectHeight > yellowSquareY &&
          rectY < yellowSquareY + yellowSquareSize) ||
          (triangleX + triangleSize > yellowSquareX &&
          triangleX - triangleSize < yellowSquareX + yellowSquareSize &&
          triangleY + triangleSize > yellowSquareY &&
          triangleY - triangleSize < yellowSquareY + yellowSquareSize)
      ) {
          alert("Você perdeu o jogo!");
          // Reiniciar a posição das formas após a colisão
          circleX = 50;
          circleY = 50;
          rectX = 100;
          rectY = 150;
          triangleX = 200;
          triangleY = 300;
      }

      requestAnimationFrame(drawShapes);
  }

  drawShapes();