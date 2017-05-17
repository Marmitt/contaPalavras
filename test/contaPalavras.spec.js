const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaPalavras } = require('../app/contaPalavras');

lab.experiment('Teste com 5 frases', () => {
  lab.test('Deve retornar 5', (done) => {
  expect(contaPalavras("Meu nome é Mateus Marmitt")).to.equal({valor: 5 });
  done();
  });
});
