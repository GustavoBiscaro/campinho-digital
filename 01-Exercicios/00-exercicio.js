/*

Criando variáveis
As lacunas devem ser completadas de acordo com os seguintes itens:

- Na 1ª lacuna deve ser criada uma variável chamada "nome" que receba o valor "Rodrigo";
- Na 2ª lacuna deve ser criada a variável "idade" que receba o valor numérico 20;
- Na 3ª lacuna deve ser criada a variável "habilitado" que receba o valor booleano "false".
OBS.: Todas as variáveis devem ser criadas com "var".


///////////////////////////////////////////////////////////////////////////////////

Defina os tipos dessas variaveis
var marca = "Samsung";
var valor = null;
var desconto;
var disponivel = 'true';

///////////////////////////////////////////////////////////////////////////////////
Abaixo temos um código que calcula a área do triângulo. Complete o código para que ele fique 100% funcional:
base = 5
altura = 8
area = (base*altura)/2
mostra o resultado no terminal.
///////////////////////////////////////////////////////////////////////////////////

As variáveis nota_1, nota_2, nota_3 e nota_4 com os valores numéricos fornecidos. Em seguida, calculamos a média das quatro notas somando-as e dividindo por 4, e armazenamos o resultado na variável media. Por fim, usamos console.log para imprimir a média no console.

///////////////////////////////////////////////////////////////////////////////////

Obtendo o percentual
Abaixo temos um código que imprime o percentual de um valor. Preencha as lacunas levando em consideração os seguintes itens:

- A variável "valor" deve receber o valor numérico 20;
- A variável "percentual" deve receber o valor numérico 10;
- No final deve ser impressa uma mensagem informando o resultado do percentual do valor.
*/

var nome = "Rodrigo"
var idade = 20
var habilitado = false

var marca = "Samsung"; //String
var valor = null; //objeto vazio
var desconto; //Undefined
var disponivel = 'true'; //String

//Comprovações
console.log("marca: " + typeof marca)

console.log("valor: " + typeof valor)

console.log("desconto: " + typeof desconto)

console.log("disponivel: " + typeof disponivel)

// Área
base = 5
altura = 8
area = (base*altura)/2
console.log("A área é de: " + area + "m²")

// Percentual
let total = 100;
let percentual = 20;
pctFinal = total * (percentual/100)
console.log(`${percentual}% de ${total} é igual a: ${pctFinal}`)