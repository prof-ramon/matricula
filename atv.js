//Importa prompt e classe Aluno
const prompt = require("prompt-sync")();
const Aluno = require("./models/Aluno")

//Limpa o terminal
console.clear();

//entrada do nome do aluno
var nome = prompt('Digite o nome do aluno:');

//verifica se o nome foi digitado
if(nome == ""){
console.log('Preencha todos os campos')
return
}

//entrada do sobrenome
var sobrenome = prompt('Digite o sobrenome do aluno: ');

//verifica se o sobrenome foi digitado
if(sobrenome == ""){
    console.log('Preencha todos os campos')
    return
}

//entrada do ano
var anoNasc = Number(prompt('Digite o ano do nascimento: '));

//verifica se o ano foi digitado e se é um número
if((anoNasc=="")||(isNaN(anoNasc))){
    console.log('Preencha todos os campos')
    return
}

//instancia um aluno
var aluno = new Aluno(nome,sobrenome,anoNasc);

//chamada função de matricular aluno
aluno.matricular()

//Mostra no terminal as informações
console.log("O aluno foi matriculado. Matricula: "+aluno.matricula);
console.log("O nome do aluno é " + aluno.nomeCompleto())
console.log("a idade do aluno é " + aluno.calcularIdade())
