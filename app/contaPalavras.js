const contaPalavras = function (frase){
  if (frase=0){
    return {mensagem:"Parametros faltando"};
  }
  return {quantidade:frase.split(' ').length}
}
module.exports = { contaPalavras };
