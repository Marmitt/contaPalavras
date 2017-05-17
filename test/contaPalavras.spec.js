const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaPalavras } = require('../app/contaPalavras');

lab.experiment('Teste com 5 palavras', () => {
  lab.test('Deve retornar 5', (done) => {
  expect(contaPalavras("Meu nome é Mateus Marmitt")).to.equal({quantidade: 5 });
  done();
  });
});
lab.experiment('Teste com nenhuma palavra', () => {
  lab.test('Deve retornar uma mensagem', (done) => {
  expect(contaPalavras("")).to.equal({mensagem:"Parametro faltando" });
  done();
  });
});
