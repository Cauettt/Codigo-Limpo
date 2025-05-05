
function calcularPrecoFinal(preco, quantidade) {
  let desconto = 0;
  const descontoBaixo = 0.05
  const descontoMedio = 0.1
  const descontoAlto = 0.15

  const quantidadeMinima = 3
  const quantidadeMedia = 5
  const quantidadeAlta = 10


  if (quantidade >= quantidadeAlta) {
    desconto = descontoAlto;
  } else if (quantidade >= quantidadeMedia) {
    desconto = descontoMedio;
  } else if (quantidade >= quantidadeMinima) {
    desconto = descontoBaixo;
  }
  const multiplicadorPreco = 1
  const precoComDesconto = preco * (multiplicadorPreco - desconto);

  if (precoComDesconto > 1000) {
    const descontoAdicional = 0.93
    return precoComDesconto * descontoAdicional;
  }

  return precoComDesconto;
}
