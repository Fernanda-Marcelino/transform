# Pesquisa DJW
## Dupla 
Arthur e Fernanda
### Introdução
Vamos apresentar um trabalho que a orientadora Aline passou a gente, consiste nos contem os seguintes elementos: 
* Translação
* Rotação
* Escala
* Transformação
* Clipping Path

### Escala
A escala é aplicada às formas geométricas (círculo, retângulo, triângulo) usando o método `ctx.scale()`. As variáveis `circleScale`, `rectScale` e `triangleScale` controlam a escala das formas.

```ruby
javascript
// Desenhar o círculo com escala
ctx.save();
ctx.translate(circuloX, circuloY);
ctx.rotate(circleAngle);
ctx.scale(circleScale, circleScale); // Escala
ctx.beginPath();
ctx.arc(0, 0, circleRadius, 0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();
ctx.restore();
```

### Rotação
   - A rotação é aplicada às formas geométricas usando o método `ctx.rotate()`. As variáveis `circleAngle`, `rectAngle` e `triangleAngle` controlam os ângulos de rotação das formas.

```ruby
javascript
// Desenhar o círculo com rotação
ctx.save();
ctx.translate(circleX, circleY);
ctx.rotate(circleAngle); // Rotação
ctx.scale(circleScale, circleScale);
ctx.beginPath();
ctx.arc(0, 0, circleRadius, 0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();
ctx.restore();
```

### Translação (Movimento)
   - A translação é aplicada às formas geométricas usando o método `ctx.translate()`. As variáveis `circleX`, `circleY`, `rectX`, `rectY`, `triangleX` e `triangleY` controlam as coordenadas de posição das formas.

```ruby
javascript
// Desenhar o círculo com translação
ctx.save();
ctx.translate(circleX, circleY); // Translação
ctx.rotate(circleAngle);
ctx.scale(circleScale, circleScale);
ctx.beginPath();
ctx.arc(0, 0, circleRadius, 0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();
ctx.restore();
```

### Transformação(Inclinação)
   - A transformação de inclinação (shear) é aplicada ao retângulo usando o método `ctx.transform()`. O fator de inclinação é controlado pela variável `rectShearX`.

```ruby
javascript
// Desenhar o retângulo com transformação de inclinação (shear)
ctx.save();
ctx.translate(rectX, rectY);
ctx.rotate(rectAngle);
ctx.scale(rectScale, rectScale);
ctx.transform(1, rectShearX, 0, 1, 0, 0); // Transformação de inclinação
ctx.beginPath();
ctx.rect(0, 0, rectWidth, rectHeight);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
ctx.restore();
```

