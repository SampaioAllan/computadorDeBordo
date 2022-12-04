const computador = require("./computadorDeBordo")

test('32 mil metros necessitam 2 litros de gasolina', () => {
    expect(computador.calcularGastodeCombustivelPorKmRodados(32000, "gasolina")).toBe(2);
  });

//calcularNumerodeParadas/////////////////////////////////////////////////////////
test('Viagem de 5 horas com dois adultos e uma criança deve ter 5 paradas', () => {
  let passageiros= [ 1, 1, 0 ]
  duracaoEmHoras = 5
  expect(computador.calcularNumerodeParadas(passageiros, duracaoEmHoras)).toBe(5);
});

test('Viagem de 6 horas apenas com adultos deve ter 4 paradas', () => {
  let passageiros= [ 1, 1, 1 ]
  duracaoEmHoras = 6
  expect(computador.calcularNumerodeParadas(passageiros, duracaoEmHoras)).toBe(4);
});

test('Viagem de 5 horas com numero de crianças maior que numero de adultos deve ter 6 paradas', () => {
  let passageiros= [ 1, 1, 0, 0, 0 ]
  duracaoEmHoras = 4
  expect(computador.calcularNumerodeParadas(passageiros, duracaoEmHoras)).toBe(6);
});

test('Viagem de 5 horas com dois adultos e uma criança deve custar 520,00 referente as refeições', () => {
  let passageiros= [ 1, 1, 0 ]
  duracaoEmHoras = 5

  let paradas = computador.calcularNumerodeParadas(passageiros, duracaoEmHoras)

  expect(computador.calcularValorGastoComRefeicoesEmParadas(paradas, passageiros)).toBe("520,00");
});