const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

function getArrayParams(...arr) {

  let array = arr;
  let min = array[0];
  let max = array[0];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
    sum += array[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  let array = arr;
  let sum = 0;

  if (array.length === 0) {
    sum = 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {

  let array = arr;
  let min = 0;
  let max = 0;
  let differenceMaxMin = 0;

  if (array.length === 0) {
    differenceMaxMin = 0;
  } else {
    min = Math.min(...arr);
    max = Math.max(...arr);
    differenceMaxMin = max - min;
  }

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {

  let array = arr;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let differenceEvenOdd = 0;

  if (array.length === 0) {
    differenceEvenOdd = 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sumEvenElement += array[i];
      } else {
        sumOddElement += array[i];
      }
    }
  }

  differenceEvenOdd = sumEvenElement - sumOddElement;

  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  let array = arr;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let average = 0;

  if (array.length === 0) {
    average = 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sumEvenElement += array[i];
        countEvenElement += 1;
      }
    }
  }

  average = sumEvenElement / countEvenElement;

  return average;
}

function makeWork(arrOfArr, func) {

  let maxWorkerResult = 0;
  let result = Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;

}

