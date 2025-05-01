/**
 * Exercício 1: 
 * Refatore o código abaixo substituindo os números mágicos por constantes com nomes significativos.
 */

function calcularDesconto(valor) {
  const descontoValorSuperiorA100 = 0.1
  const descontoValorInferiorA100 = 0.05

  if (valor > 100) {
    return valor * descontoValorSuperiorA100;
  }
  return valor * descontoValorInferiorA100;
}
