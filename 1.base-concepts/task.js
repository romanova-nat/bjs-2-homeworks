"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discrim = b ** 2 - 4 * a * c;

  if (discrim === 0) {
    arr[0] = -b / (2 * a);
  } else if (discrim > 0) {
    arr[0] = (-b + Math.sqrt(discrim)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discrim)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = (percent / 100) / 12;
  let debtBody = amount - contribution;
  let monthDebt = debtBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  let allSum = Number((monthDebt * countMonths).toFixed(2));

  return allSum;
}
