class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }

    detalhes() {
      return `O caro é ${this.marca}, do modelo: ${this.modelo}, que é do ano ${this.ano}`;
    }
    confianca() {
      return `Confiabilidade mecanica excelente`
    }
    ligar() {
      return `E go...go...go...`
  }
}

module.exports = Carro;