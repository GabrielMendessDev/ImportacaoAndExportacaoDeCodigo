const {gets, print} = require('./funcoes-auxiliares.js');

const quantDeAlunos = gets();
let maiorValor = 0;

for (let i = 1; i <= quantDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}


print(maiorValor);