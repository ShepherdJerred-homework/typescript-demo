export function sayHello (name: string): string {
  return 'Hello, ' + name;
}

export function doubleAll (a: number[]): number[] {
  return a.map(function (n): number {
    return n * 2;
  });
}

export function mapSum (a: string[], f: (s: string) => number): number {
  function add (previous: number, current: string): number {
    return previous + f(current);
  }
  return a.reduce(add, 0);
}

export interface Location {
  x: number;
  y: number;
}

export class Circle {
  x: number;
  y: number;
  radius: number;

  constructor (radius: number) {
    this.x = 0;
    this.y = 0;
    this.radius = radius;
  }

  location (): Location {
    return {
      x: this.x,
      y: this.y
    };
  }

  area (): number {
    return Math.PI * (this.radius * 2);
  }

  moveTo (location: Location) {
    this.x = location.x;
    this.y = location.y;
  }
}

export class Spaceship {
  x: number;
  y: number;
  hitpoints: number;

  constructor (location: Location) {
    this.x = location.x;
    this.y = location.y;
    this.hitpoints = 100;
  }

  location (): Location {
    return {
      x: this.x,
      y: this.y
    };
  }

  damage (amountToDamage: number): number {
    this.hitpoints -= amountToDamage;
    return this.hitpoints;
  }

  moveTo (location: Location) {
    this.x = location.x;
    this.y = location.y;
  }
}

export function towards (a: Location, b: Location, n: number): Location {
  let dx: number = b.x - a.x;
  let dy: number = b.y - a.y;
  let dist: number = Math.sqrt(dx * dx + dy * dy);
  if (dist <= n) {
    return { x: b.x, y: b.y };
  } else {
    let r = n / dist;
    return {
      x: a.x + dx * r,
      y: a.y + dy * r
    };
  }
}

/*export function chase(location: Location, locations: Location[]) {
  return null;
}*/

function test () {
  sayHello('Francine');
  doubleAll([ 4, 3, 1 ]);
  let val = { a: 3, b: 7, c: 4 };
  mapSum(['a', 'b', 'c', 'b'], x => val[x]);
  let c: Circle = new Circle(10);
  c.location();
  c.area();
  c.moveTo({ x: 10, y: 20 });
  c.location();
  let p = new Spaceship({ x: 45, y: 55 });
  p.location();
  p.damage(10);
  p.damage(25);
  p.moveTo({ x: 15, y: -20 });
  p.location();
  towards({ x: 5, y: 12 }, { x:  5, y: 20 },3);
  towards({ x: 8, y:  1 }, { x: 20, y:  1 },6);
  towards({ x: 0, y:  0 }, { x: 12, y: 16 },5);
  towards({ x: 0, y:  0 }, { x: 12, y: 16 },10);
  towards({ x: 0, y:  0 }, { x: 12, y: 16 },20);
  towards({ x: 0, y:  0 }, { x: 12, y: 16 },50);
}

test();
