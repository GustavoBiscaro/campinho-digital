/*
Média de idade dos alunos
Complete o código abaixo para calcular a média de idade dos 12 alunos de um curso:

- A aplicação possuirá quatro variáveis: idade_aluno, soma_idades, media e contador;
- A variável contador será declarada com valor 1;
- Deve-se utilizar a estrutura de repetição para.
programa
{
	funcao inicio()
	{
		real idade_aluno
		real soma_idades = 0
		real media
		inteiro contador = 1

		para(inteiro contador = 1; contador <= 12; contador++)
		{
			escreva("Digite a idade do " + contador + "º aluno: ")
			leia(idade_aluno)

			soma_idades = soma_idades + idade_aluno
		}

		media = soma_idades / 12

		escreva("Média de idade dos alunos: " + media)
	}
}


*/