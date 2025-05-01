/**
 * Exercício 3: 
 * Refatore o algoritmo de cálculo de preço, 
 * substituindo todos os números mágicos por constantes significativas.
 */

function calcularPrecoFinal(preco, quantidade) {
  let desconto = 0;

  if (quantidade >= 10) {
    desconto = 0.15;
  } else if (quantidade >= 5) {
    desconto = 0.1;
  } else if (quantidade >= 3) {
    desconto = 0.05;
  }
  const multiplicadorPreco = 1
  const precoComDesconto = preco * (multiplicadorPreco - desconto);

  if (precoComDesconto > 1000) {
    const descontoAdicional = 0.93
    return precoComDesconto * descontoAdicional;
  }

  return precoComDesconto;
}
