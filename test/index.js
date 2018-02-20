const main = require('../lib/hw8');
const chai = require('chai');

let expect = chai.expect;

describe('sayHello', function () {
  it('should say hello', function () {
    expect(main.sayHello('Francine')).to.equal('Hello, Francine');
  });
});

describe('doubleAll', function () {
  it('should double all', function () {
    expect(main.doubleAll([ 4, 3, 1 ])).to.eql([ 8, 6, 2 ]);
  });
});

describe('mapSum', function () {
  it('should map sum', function () {
    let val = { a: 3, b: 7, c: 4 };
    expect(main.mapSum(["a", "b", "c", "b"], x => val[x])).to.equal(21);
  });
});

describe('circle', function () {
  let c = new main.Circle(10);
  it('should give correct location', function () {
    expect(c.location()).to.eql({ x: 0, y: 0 });
  });
  it('should give correct area', function () {
    expect(c.area()).to.equal(314.1592653589793);
  });
  it('should move correcntly', function () {
    c.moveTo({ x: 10, y: 20 });
    expect(c.location()).to.eql({ x: 10, y: 20 });
  });
});

describe('spaceship', function () {
  let p = new main.Spaceship({ x: 45, y: 55 });

  it('should give correct location', function () {
    expect(p.location()).to.eql({ x: 45, y: 55 });
  });
  it('should damange correctly', function () {
    expect(p.damage(10)).to.equal(90);
    expect(p.damage(25)).to.equal(65);
  });
  it('should move correcntly', function () {
    p.moveTo({ x: 15, y: -20 });
    expect(p.location()).to.eql({ x: 15, y: -20 });
  });
});

describe('towards', function () {
  it('should pass given tests', function () {
    expect(main.towards({ x: 5, y: 12 }, { x:  5, y: 20 }, 3)).to.eql({ x: 5, y: 15 });
    expect(main.towards({ x: 8, y:  1 }, { x: 20, y:  1 }, 6)).to.eql({ x: 14, y: 1 });
    expect(main.towards({ x: 0, y:  0 }, { x: 12, y: 16 }, 5)).to.eql({ x: 3, y: 4 });
    expect(main.towards({ x: 0, y:  0 }, { x: 12, y: 16 }, 10)).to.eql({ x: 6, y: 8 });
    expect(main.towards({ x: 0, y:  0 }, { x: 12, y: 16 }, 20)).to.eql({ x: 12, y: 16 });
    expect(main.towards({ x: 0, y:  0 }, { x: 12, y: 16 }, 50)).to.eql({ x: 12, y: 16 });
  });
});
