/**
 * Exercício 4:
 * Melhore a função de formatação de tempo eliminando os números mágicos.
 */

function formatarTempo(segundos) {
  const segundosPorHora = 3600
  const segundosPorMinuto = 60
  const horas = Math.floor(segundos / segundosPorHora);
  const minutos = Math.floor((segundos % segundosPorHora) / segundosPorMinuto);
  const segundosRestantes = segundos % segundosPorMinuto;

  const qtdCasas = 2

  return `${horas.toString().padStart(qtdCasas, "0")}:${minutos
    .toString()
    .padStart(qtdCasas, "0")}:${segundosRestantes.toString().padStart(qtdCasas, "0")}`;
}
