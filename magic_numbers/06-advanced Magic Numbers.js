
function validarSenha(senha) {
  const senhaCurta = 8
  const senhaIntermediaria = 10
  const senhaLonga = 12

  const senhaFraca = 5
  const senhaMedia = 8


  if (senha.length < senhaCurta) {
    return {
      valida: false,
      mensagem: "Senha muito curta",
    };
  }

  let pontuacao = 0;

  if (senha.length >= senhaLonga) {
    pontuacao += 2;
  } else if (senha.length >= senhaMedia) {
    pontuacao += 1;
  }

  if (/[A-Z]/.test(senha)) {
    pontuacao += 2;
  }
  if (/[a-z]/.test(senha)) {
    pontuacao += 2;
  }
  if (/[0-9]/.test(senha)) {
    pontuacao += 2;
  }
  if (/[^A-Za-z0-9]/.test(senha)) {
    pontuacao += 3;
  }

  if (pontuacao < senhaFraca) {
    return { valida: false, mensagem: "Senha fraca" };
  }
  if (pontuacao < senhaMedia) {
    return { valida: true, mensagem: "Senha média" };
  }

  return {
    valida: true,
    mensagem: "Senha forte",
  };
}
