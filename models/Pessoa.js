class Pessoa{

    nome;
    sobrenome;
    anoNascimento;

    constructor(nome, sobrenome, anoNascimento){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.anoNascimento = anoNascimento;
    }
    nomeCompleto(){
        return this.nome + " " + this.sobrenome;
    }

    calcularIdade(){
        return (2024 - this.anoNascimento);
    }

}

module.exports = Pessoa;