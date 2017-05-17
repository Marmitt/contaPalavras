const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('../app/contaPalavras');

lab.experiment('Teste com 5 frases', () => {
  lab.test('Deve retornar 5', (done) => {
  expect(calculaTotalItem(5)).to.equal({valor: 5 });
  done();
  });
});
