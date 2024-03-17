export function random(min: number, max: number, decimal: number): number {
  const range = max - min;
  const randomNumber = Math.random() * range + min;
  const roundedNumber = Number(randomNumber.toFixed(decimal));
  return roundedNumber;
}

export function calcSpeed(value: number) {
  return 3000 + 1000 * value;
}

export function isBetween(number: number, min: number, max: number) {
  return number >= min && number <= max;
}
interface Matrix {
  value: number;
  x: string;
}
interface Matrix {
  value: number;
  x: string;
}
export function createMatrix(start: number, target: number, array: Matrix[]) {
  const newArray: Matrix[] = [...array];

  newArray.forEach((_, index) => {
    const xValue = parseFloat(newArray[index].x);
    if (!isNaN(xValue) && xValue >= start) {
      newArray[index].value = target;
    }
  });

  return newArray;
}
