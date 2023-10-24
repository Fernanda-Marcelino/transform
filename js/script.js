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
  var retShearX = 0.2; // Fator de inclinação


  // Triângulo
  var trianguloX = 200;
  var trianguloY = 300;
  var trianguloT = 40;
  var trianguloVX = -2;
  var trianguloVY = 1;
  var trianguloScale = 1;
  var trianguloAngle = 0;

  // Quadrado amarelo
  var quadX = 400;
  var quadY = 100;
  var quadT = 100;

  // Variáveis de controle das teclas pressionadas
  var keys = {};

  document.addEventListener("keydown", function (e) {
      keys[e.key] = true;
  });

  document.addEventListener("keyup", function (e) {
      keys[e.key] = false;
  });

  function moveQuad() {
      if (keys["w"] && quadY > 0) {
          quadY -= 5;
      }
      if (keys["s"] && quadY + quadT < canvas.height) {
          quadY += 5;
      }
      if (keys["a"] && quadX > 0) {
          quadX -= 5;
      }
      if (keys["d"] && quadX + quadT < canvas.width) {
          quadX += 5;
      }
  }

  function desenharFormas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();

    //Mascara de recorte no formato circular
      ctx.beginPath();
      ctx.arc(quadX+50, quadY+40, 250, 0, Math.PI*2);
      ctx.stroke();
      
      // Clippin path
      ctx.clip();

    //fundo que a mascara de recorte revela
      ctx.fillStyle = '#FDF092';
      ctx.fillRect(0,0,1500,900);

      // Chame a função para mover o quadrado amarelo
      moveQuad();

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
      ctx.transform(1, retShearX, 0, 1, 0, 0); // Transformação de inclinação
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
      ctx.rotate(trianguloAngle);
      ctx.scale(trianguloScale, trianguloScale);
      ctx.beginPath();
      ctx.moveTo(0, -trianguloT);
      ctx.lineTo(trianguloT, trianguloT);
      ctx.lineTo(-trianguloT, trianguloT);
      ctx.closePath();
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();

      // Mover o triângulo
      trianguloX += trianguloVX;
      trianguloY += trianguloVY;

      // Verificar colisão com as bordas
      if (trianguloX < 0 || trianguloX > canvas.width) {
          trianguloVX = -trianguloVX;
      }
      if (trianguloY < 0 || trianguloY > canvas.height) {
          trianguloVY = -trianguloVY;
      }

      // Desenhar o quadrado amarelo
      ctx.fillStyle = "#581845";
      ctx.fillRect(quadX, quadY, quadT, quadT);

      // Verificar colisões com as formas geométricas
      if (
          (circuloX + circuloRadius > quadX &&
          circuloX - circuloRadius < quadX + quadT &&
          circuloY + circuloRadius > quadY &&
          circuloY - circuloRadius < quadY + quadT) ||
          (retX + retWidth > quadX &&
          retX < quadX + quadT &&
          retY + retHeight > quadY &&
          retY < quadY + quadT) ||
          (trianguloX + trianguloT > quadX &&
          trianguloX - trianguloT < quadX + quadT &&
          trianguloY + trianguloT > quadY &&
          trianguloY - trianguloT < quadY + quadT)
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
      ctx.restore();

      requestAnimationFrame(desenharFormas);
  }

  desenharFormas();