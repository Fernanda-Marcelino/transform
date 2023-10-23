const canvas = document.getElementById('puzzle');
const ctx = canvas.getContext('2d');

  // Círculo
  var circuloX = 50;
  var circuloY = 50;
  var circuloRadius = 20;
  var circuloVX = 2;
  var circuloVY = 2;
  var circuloScale = 1;
  var circuloAngle = 0;

  // Retângulo
  var retX = 100;
  var retY = 150;
  var retWidth = 30;
  var retHeight = 60;
  var retVX = 1;
  var retVY = -1;
  var retScale = 1;
  var retAngle = 0;

  // Triângulo
  var trianguloX = 200;
  var trianguloY = 300;
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
      ctx.translate(circuloX, circuloY);
      ctx.rotate(circuloAngle);
      ctx.scale(circuloScale, circuloScale);
      ctx.beginPath();
      ctx.arc(0, 0, circuloRadius, 0, Math.PI * 2);
      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.closePath();
      ctx.restore();

      // Mover o círculo
      circuloX += circuloVX;
      circuloY += circuloVY;

      // Verificar colisão com as bordas
      if (circuloX - circuloRadius < 0 || circuloX + circuloRadius > canvas.width) {
          circuloVX = -circuloVX;
      }
      if (circuloY - circuloRadius < 0 || circuloY + circuloRadius > canvas.height) {
          circuloVY = -circuloVY;
      }

      // Desenhar o retângulo
      ctx.save();
      ctx.translate(retX, retY);
      ctx.rotate(retAngle);
      ctx.scale(retScale, retScale);
      ctx.beginPath();
      ctx.rect(0, 0, retWidth, retHeight);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();
      ctx.restore();

      // Mover o retângulo
      retX += retVX;
      retY += retVY;

      // Verificar colisão com as bordas
      if (retX < 0 || retX + retWidth > canvas.width) {
          retVX = -retVX;
      }
      if (retY < 0 || retY + retHeight > canvas.height) {
          retVY = -retVY;
      }

      // Desenhar o triângulo
      ctx.save();
      ctx.translate(trianguloX, trianguloY);
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
      trianguloX += triangleSpeedX;
      trianguloY += triangleSpeedY;

      // Verificar colisão com as bordas
      if (trianguloX < 0 || trianguloX > canvas.width) {
          triangleSpeedX = -triangleSpeedX;
      }
      if (trianguloY < 0 || trianguloY > canvas.height) {
          triangleSpeedY = -triangleSpeedY;
      }

      // Desenhar o quadrado amarelo
      ctx.fillStyle = "yellow";
      ctx.fillRect(yellowSquareX, yellowSquareY, yellowSquareSize, yellowSquareSize);

      // Verificar colisões com as formas geométricas
      if (
          (circuloX + circuloRadius > yellowSquareX &&
          circuloX - circuloRadius < yellowSquareX + yellowSquareSize &&
          circuloY + circuloRadius > yellowSquareY &&
          circuloY - circuloRadius < yellowSquareY + yellowSquareSize) ||
          (retX + retWidth > yellowSquareX &&
          retX < yellowSquareX + yellowSquareSize &&
          retY + retHeight > yellowSquareY &&
          retY < yellowSquareY + yellowSquareSize) ||
          (trianguloX + triangleSize > yellowSquareX &&
          trianguloX - triangleSize < yellowSquareX + yellowSquareSize &&
          trianguloY + triangleSize > yellowSquareY &&
          trianguloY - triangleSize < yellowSquareY + yellowSquareSize)
      ) {
          alert("Você perdeu o jogo!");
          // Reiniciar a posição das formas após a colisão
          circuloX = 50;
          circuloY = 50;
          retX = 100;
          retY = 150;
          trianguloX = 200;
          trianguloY = 300;
      }

      requestAnimationFrame(drawShapes);
  }

  drawShapes();