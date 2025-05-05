
function validarCartaoCredito(numero) {
  const primeiroNumeroVisa = 4
  const primeiroNumeroMaster = 5
  const primeiroNumeroAmerican = 34
  const primeiroNumeroAmerican2 = 37

  if (numero.length !== 16 && numero.length !== 15 && numero.length !== 13) {
    return false;
  }

  if (
    numero.startsWith(primeiroNumeroVisa) &&
    (numero.length === 16 || numero.length === 13)
  ) {
    return "Visa";
  } else if (numero.startsWith(primeiroNumeroMaster) && numero.length === 16) {
    const segundoDigito = parseInt(numero.charAt(1));
    if (segundoDigito >= 1 && segundoDigito <= 5) {
      return "MasterCard";
    }
  } else if (
    (numero.startsWith(primeiroNumeroAmerican) || numero.startsWith(primeiroNumeroAmerican2)) &&
    numero.length === 15
  ) {
    return "American Express";
  }

  return false;
}
