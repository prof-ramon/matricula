const Pessoa = require("./Pessoa")

class Aluno extends Pessoa{
    matricula;
    constructor(nome, sobrenome, anoNascimento){
        super(nome, sobrenome, anoNascimento);
    
    }
    matricular(){
        var matricula = parseInt(Math.random()*1000)
        this.matricula = matricula
        return this.matricula
    }
}

module.exports = Aluno