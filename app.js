const Carro = require ('./carro');

const Concessionaria = require ('./concessionaria');

const meuCarro = new Carro('Toyota', 'Corolla', 2016);

const minhaConcessionaria = new Concessionaria();
minhaConcessionaria.adicionarVeiculo(meuCarro)
    for(let i = 0; i < 10; i++){
        const meuCarro = new Carro(`Toyota${i}`, 'Corolla', 2016+i);
        minhaConcessionaria.adicionarVeiculo(meuCarro)
    }
    
minhaConcessionaria.alterarMarca('Toyota', 'Ford');
minhaConcessionaria.alterarModelo('Corolla', 'Ka');
minhaConcessionaria.alterarAno(2020, 1111);

minhaConcessionaria.alterarPorIndex(5, 'Chevrolet', 'Corvette', 1111);

console.table(minhaConcessionaria.veiculos);
