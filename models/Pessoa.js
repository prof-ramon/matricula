//Classe Pessoa
class Pessoa{

    //atributos de classe
    nome;
    sobrenome;
    anoNascimento;

    //contrutor
    constructor(nome, sobrenome, anoNascimento){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.anoNascimento = anoNascimento;
    }

    //método de criar nome completo
    nomeCompleto(){
        return this.nome + " " + this.sobrenome;
    }

    //método de calcular a idade
    calcularIdade(){
        return (2024 - this.anoNascimento);
    }

}

//exporta a classe Pessoa
module.exports = Pessoa;