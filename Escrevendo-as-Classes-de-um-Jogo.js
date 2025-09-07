// Curso: Formação Lógica de Programação - DIO
// Projeto: Escrevendo as classes de um jogo
// Nome: Yan Moura Lima
// Data: 07/09/2025

// Classe com as características de um herói
class heroi{
// Função constructor para definir nome, idade e tipo.
    constructor (nome, idade, tipo){
    this.nome = nome
    this.idade= idade
    this.tipo= tipo
    }
// Método ou função ataque
    ataque (){
        if (this.tipo=="mago"){
            return "magia"
            }
        if (this.tipo =="guerreiro"){
            return "espada"
            }
            if (this.tipo =="ninja"){
                return "shuriken"
            }
    }
}        

//Criação de um herói
let nomeHeroi = "Superman"
let idadeHeroi ="35"
let tipoHeroi ="guerreiro"

novoHeroi = new heroi(nomeHeroi,idadeHeroi,tipoHeroi) // cria novo objeto, conforme a classe.

//Saída

console.log(`O ${novoHeroi.tipo} atacou usando ${novoHeroi.ataque()}`)
