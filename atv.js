const prompt = require("prompt-sync")();
const Aluno = require("./models/Aluno")

console.clear();

var nome = prompt('Digite o nome do aluno:');

if(nome == ""){
console.log('Preencha todos os campos')
return
}

var sobrenome = prompt('Digite o sobrenome do aluno: ');
if(sobrenome == ""){
    console.log('Preencha todos os campos')
    return
}
var anoNasc = Number(prompt('Digite o ano do nascimento: '));
if((anoNasc=="")||(isNaN(anoNasc))){
    console.log('Preencha todos os campos')
    return
}


var aluno = new Aluno(nome,sobrenome,anoNasc);

aluno.matricular()
console.log("O aluno foi matriculado. Matricula: "+aluno.matricula);
console.log("O nome do aluno é " + aluno.nomeCompleto())
console.log("a idade do aluno é " + aluno.calcularIdade())
