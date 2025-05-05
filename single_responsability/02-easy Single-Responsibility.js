
function mediaVendas(vendas) {
  const media = totalVendas() / vendas.length;

}

function totalVendas(vendas) {
  let totalVendas = 0;
  for (const venda of vendas) {
    totalVendas += venda;
  }
  return totalVendas.toFixed(2)
}
function menorVenda(vendas) {
  let menorVenda = 0;
  for (const venda of vendas) {
    if (venda < menorVenda) menorVenda = venda;
  }
  return menorVenda.toFixed(2)


}
function maiorVenda(vendas) {
  let maiorVenda = 0;
  for (const venda of vendas) {
    if (venda > maiorVenda) maiorVenda = venda; 
  }
  return maiorVenda.toFixed(2)
}

function imprimirRelatorio(){
  console.log("=== Relatório de Vendas ===");
  console.log(`Total: R$ ${totalVendas()}`);
  console.log(`Média: R$ ${mediaVendas()}`);
  console.log(`Maior venda: R$ ${maiorVenda()}`);
  console.log(`Menor venda: R$ ${menorVenda()}`);
}


