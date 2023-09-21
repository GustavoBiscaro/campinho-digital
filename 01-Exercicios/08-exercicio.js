/*
Qual das alternativas abaixo implementa um código de acordo com as instruções:

- O código tem duas variáveis: contador e soma;
- A variável contador é declarada com valor 1;
- O código deve percorrer até o número 100;
- O código deve checar cada número para saber se ele é par ou ímpar;
- Se for par, incrementa + 1 ao contador;
- Se for ímpar, incrementa + 2 ao contador;
- Utilizar enquanto.


programa
{
	funcao inicio()
	{
		inteiro contador = 1
		inteiro soma = 0

		enquanto(contador <= 100)
		{
			soma = soma + contador

			se(contador % 2 == 0)
			{
				contador = contador + 1
			}
			senao
			{
				contador = contador + 2
			}
		}

		escreva("Soma: " + soma)
	}
}
o código começa com o contador igual a 1 e percorre até o número 100. Dentro do loop, ele verifica se o contador é par (contador % 2 == 0) e, se for par, incrementa +1, caso contrário, incrementa +2. Isso garante que o contador siga a lógica de incrementar +1 para números pares e +2 para números ímpares. Em seguida, a soma dos números é calculada e exibida.
*/