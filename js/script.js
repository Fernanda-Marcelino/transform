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

        function drawShapes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

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

            // Quadrado com clipping path
            ctx.save();
            ctx.beginPath();
            ctx.rect(400, 100, 100, 100); // Desenha um quadrado
            ctx.arc(450, 150, 30, 0, Math.PI * 2); // Desenha um círculo dentro do quadrado
            ctx.clip(); // Define um clipping path com o quadrado
            ctx.fillStyle = "orange";
            ctx.fillRect(400, 100, 100, 100); // Preenche o retângulo
            ctx.restore(); // Remove o clipping path
        }

        function animate() {
            requestAnimationFrame(animate);
            drawShapes();
        }

        animate();