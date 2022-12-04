function calcularGastodeCombustivelPorKmRodados(a, b) {
  let km = a/1000
  let litros = b === "gasolina" ? km/16 : km/11

  return litros;
  }

function calcularNumerodeParadas(passageiros, duracaoEmHoras) {
  let duracaoEmMinutos = duracaoEmHoras * 60
  let criancas = 0
  let adultos = 0

  for (let index = 0; index < passageiros.length; index++) {
    passageiros[index] === 0 ? criancas++ : adultos++
  }

  let paradas = criancas === 0 ? duracaoEmMinutos/90 : (criancas >= adultos ? duracaoEmMinutos/40 : duracaoEmMinutos/60)

  return paradas;
}

function calcularValorGastoComRefeicoesEmParadas (paradas, passageiros) {
  refeicaoCompleta = 3
  let valorTotal = 0

  for (let index = 0; index < paradas; index++) {
    if (refeicaoCompleta ===3) {
      for (let index = 0; index < passageiros.length; index++) {
        valorTotal = passageiros[index] === 1 ? valorTotal + 50 : valorTotal + 40
      }
    } else {
      for (let index = 0; index < passageiros.length; index++) {
        valorTotal = passageiros[index] === 1 ? valorTotal + 30 : valorTotal + 20
      }
    }

    refeicaoCompleta === 3 ? refeicaoCompleta = 1 : refeicaoCompleta++ 
  }

  return valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2})
}
  module.exports = {
    calcularGastodeCombustivelPorKmRodados, 
    calcularNumerodeParadas, 
    calcularValorGastoComRefeicoesEmParadas
  };