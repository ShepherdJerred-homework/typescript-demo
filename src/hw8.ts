export function sayHello (name: string): string {
  return 'Hello, ' + name;
}

export function doubleAll (a: number[]): number[] {
  return a.map(function (n): number {
    return n * 2;
  });
}

export function mapSum (a: string[], f: Function): number {

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

  }

  area (): number {

  }

  moveTo(location: Location) {

  }
}
