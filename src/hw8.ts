export function sayHello (name: string): string {
  return 'Hello, ' + name;
}

export function doubleAll (a: number[]): number[] {
  return a.map(function (n): number {
    return n * 2;
  });
}


