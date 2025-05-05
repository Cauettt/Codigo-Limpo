
function validarDadosUsuario(usuario) {
  if (!usuario.nome || !usuario.email) {
    return { sucesso: false, mensagem: "Nome e email são obrigatórios" };
  }
}

function formatarNomeUsuario(usuario) {
  const nomeFormatado = usuario.nome
    .trim()
    .toLowerCase()
    .split(" ")
    .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1))
    .join(" ");

   return nomeFormatado
}

function formatarEmailUsuario(usuario) {

  const emailFormatado = usuario.email.trim().toLowerCase();

  return emailFormatado
}


function salvarDadosUsuario(usuario) {

  console.log(`Salvando usuário: ${formatarNomeUsuario()}, ${formatarEmailUsuario()}`);

  return {
    sucesso: true,
    usuario: { nome: formatarNomeUsuario(), email: formatarEmailUsuario() },
  };
}
