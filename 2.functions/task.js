const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  let sum = 0;

  if (arr.length === 0) {
    return sum;
  } else {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {

  let min = 0;
  let max = 0;
  let differenceMaxMin = 0;

  if (arr.length === 0) {
    return differenceMaxMin;
  } else {
    min = Math.min(...arr);
    max = Math.max(...arr);
    differenceMaxMin = max - min;
    return differenceMaxMin;
  }
}

function differenceEvenOddWorker(...arr) {

  let sumEvenElement = 0;
  let sumOddElement = 0;
  let differenceEvenOdd = 0;

  if (arr.length === 0) {
    return differenceEvenOdd;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    differenceEvenOdd = sumEvenElement - sumOddElement;
    return differenceEvenOdd;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let average = 0;

  if (arr.length === 0) {
    return average;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    average = sumEvenElement / countEvenElement;
    return average;
  }
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

