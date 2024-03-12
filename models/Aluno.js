//Importa a classe Pessoa
const Pessoa = require("./Pessoa")

//Classe Aluno que herda a classe Pessoa
class Aluno extends Pessoa{

    //atributo de classe
    matricula;

    //construtor
    constructor(nome, sobrenome, anoNascimento){
        //envia os parâmetros para a superclasse
        super(nome, sobrenome, anoNascimento);
    
    }

    //método de matricular aluno
    matricular(){
        var matricula = parseInt(Math.random()*1000)
        this.matricula = matricula
        return this.matricula
    }
}

//exporta a classe Aluno
module.exports = Aluno