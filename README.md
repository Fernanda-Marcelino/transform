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

## Salvamento Do Repositório 
- git init
- git  remote add origin https://github.com/Fernanda-Marcelino/transform.git
- git pull --allow-unrelated-histories git init
git  remote add origin https://github.com/Fernanda-Marcelino/transform.git
- git checkout -b main
- git add .
  
![Captura de tela 2023-10-23 214031](https://github.com/Fernanda-Marcelino/transform/assets/128320607/08e8c2e8-9639-46e8-bfc8-bbe9593dfa82)

## Diagrama De Classes
![Captura de tela 2023-10-24 100515](https://github.com/Fernanda-Marcelino/transform/assets/128982469/87b16d5e-6013-4362-88d6-55a364cda914)

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
ctx.translate(circuloX, circuloY);
ctx.rotate(circuloAngle); // Rotação
ctx.scale(circuloScale, circuloScale);
ctx.beginPath();
![Captura de tela 2023-10-24 100515](https://github.com/Fernanda-Marcelino/transform/assets/128982469/1bba8746-b4dc-4ad9-b82f-8c343cd36451)
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
```
### Clipping Path

Clipping path é usado neste código para criar uma máscara de recorte circular que limita a visibilidade de um retângulo amarelo. A área dentro do círculo definido pelo clipping path permite que o retângulo seja desenhado, enquanto a área fora do círculo é "recortada" e não é visível. Isso cria um efeito de máscara de recorte, onde o retângulo amarelo é visível apenas dentro da área circular do `clipping path`.

## Funcionamento Do Jogo

https://github.com/Fernanda-Marcelino/transform/assets/128320607/42513276-3af0-41d2-966e-23a91f1dca24


