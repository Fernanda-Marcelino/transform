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
A escala é aplicada às formas geométricas (círculo, retângulo, triângulo) usando o método `ctx.scale()`. As variáveis `circuloeScale`, `retScale` e `trianguloScale` controlam a escala das formas.

```ruby
javascript
// Desenhar o círculo com escala
ctx.save();
ctx.translate(circuloX, circuloY);
ctx.rotate(circuloAngle);
ctx.scale(circuloScale, circuloScale); // Escala
ctx.beginPath();
ctx.arc(0, 0, circuloRadius, 0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();
ctx.restore();
```

### Rotação
   - A rotação é aplicada às formas geométricas usando o método `ctx.rotate()`. As variáveis `circuloAngle`, `retAngle` e `trianguloAngle` controlam os ângulos de rotação das formas.

```ruby
javascript
// Desenhar o círculo com rotação
ctx.save();
ctx.translate(circuloX, circleY);
ctx.rotate(circuloAngle); // Rotação
ctx.scale(circleScale, circulpScale);
ctx.beginPath();
ctx.arc(0, 0, circuloRadius, 0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();
ctx.restore();
```

### Translação (Movimento)
   - A translação é aplicada às formas geométricas usando o método `ctx.translate()`. As variáveis `circuloX`, `circuloY`, `retX`, `retY`, `trianguloX` e `trianguloY` controlam as coordenadas de posição das formas.

```ruby
javascript
// Desenhar o círculo com translação
ctx.save();
ctx.translate(circuloX, circuloY); // Translação
ctx.rotate(circuloAngle);
ctx.scale(circuloScale, circuloScale);
ctx.beginPath();
ctx.arc(0, 0, circuloRadius, 0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();
ctx.restore();
```

### Transformação(Inclinação)
   - A transformação de inclinação (shear) é aplicada ao retângulo usando o método `ctx.transform()`. O fator de inclinação é controlado pela variável `retShearX`.

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

