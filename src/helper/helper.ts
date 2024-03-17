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

// export function createMatrix(start: number, target: number, array: Matrix[]) {
//   // const newArray: Matrix[] = [...array];

//   array?.forEach((item, index) => {
//     const xValue = parseFloat(item.x);
//     if (!isNaN(xValue) && xValue >= start) {
//       array[index].value = target;
//     }
//   });

//   return array;
// }

export function fillArrayWithTarget(start: number, target: number) {
  let array = Array.from({ length: 10 }, (_, index) => {
    return { value: 0, x: index };
  });
  const roundedStart = Math.round(start);
  let newArray = [...array];

  newArray?.map((_, index) => {
    if (index >= roundedStart + 1) {
      newArray[index].value = target;
    }
  });

  return newArray;
}
