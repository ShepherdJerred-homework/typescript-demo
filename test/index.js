const main = require('../lib/hw8');
const chai = require('chai');

let expect = chai.expect;

describe('sayHello', function () {
  it('should say hello', function () {
    expect(main.sayHello('Francine').to.equal('Hello, Francine'))
  });
});

