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
    return Math.PI * (this.radius * this.radius);
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
