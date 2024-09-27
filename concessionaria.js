class Concessionaria {
    constructor(){
        this.veiculos = []
    }
    adicionarVeiculo(carro){
        this.veiculos.push(carro)
    }

    selecionarModelo(ano) {
        return this.veiculos.filter((carro) => carro.ano < ano);
    } 
    alterarMarca(marcaEscolhidaParaAlterar, novaMarca) {
        this.veiculos.forEach((carro) => {
            if (carro.marca === marcaEscolhidaParaAlterar) {
              carro.marca = novaMarca;
            }
        });
    }
    alterarModelo(modeloEscolhidaParaAlterar, novoModelo) {
        this.veiculos.forEach((carro) => {
            if (carro.modelo === modeloEscolhidaParaAlterar) {
                carro.modelo = novoModelo;
            }
        });
    }
    alterarAno(anoEscolhidoParaAlterar, novoAno) {
        this.veiculos.forEach((carro) => {
            if (carro.ano === anoEscolhidoParaAlterar) {
                carro.ano = novoAno;
            }
        });
    }

    alterarPorIndex(index, novaMarca, novoModelo, novoAno) {
        if (index >= 0 && index < this.veiculos.length) {
            let carro = this.veiculos[index];
            if (novaMarca) carro.marca = novaMarca;
            if (novoModelo) carro.modelo = novoModelo;
            if (novoAno) carro.ano = novoAno;
        } else {
            console.log("Índice fora do intervalo");
        }
    }
}
module.exports = Concessionaria;
