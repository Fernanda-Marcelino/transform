const canvas = document.getElementById('puzzle');
const ctx = canvas.getContext('2d');

var x = 50; // Posição inicial x do círculo
var y = 50; // Posição inicial y do círculo
var radius = 20; // Raio do círculo
var speedX = 2; // Velocidade no eixo X
var speedY = 2; // Velocidade no eixo Y
var scale = 1; // Fator de escala
var angle = 0; // Ângulo de rotação

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    // Aplica transformações
    ctx.save();
    ctx.translate(x, y); // Move o ponto de origem
    ctx.rotate(angle); // Rotaciona
    ctx.scale(scale, scale); // Escala
    ctx.transform(1, 0.5, -0.5, 1, 0, 0); // Transformação personalizada

    // Define um clipping path (recorte)
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.clip();

    // Desenhe o círculo
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    // Restaura o contexto para remover as transformações e o clipping path
    ctx.restore();

    // Mova o círculo
    x += speedX; // Atualiza a posição no eixo X
    y += speedY; // Atualiza a posição no eixo Y

    // Verifique colisão com as bordas do canvas
    if (x - radius < 0 || x + radius > canvas.width) {
        speedX = -speedX; // Inverta a direção no eixo X ao colidir com as bordas
    }

    if (y - radius < 0 || y + radius > canvas.height) {
        speedY = -speedY; // Inverta a direção no eixo Y ao colidir com as bordas
    }

    // Atualiza as transformações
    scale += 0.01; // Aumenta a escala ao longo do tempo
    angle += 0.01; // Incrementa o ângulo de rotação
}

function animate() {
    requestAnimationFrame(animate); // Cria um loop de animação
    drawCircle(); // Chama a função para desenhar o círculo
}

animate(); // Inicia a animação
