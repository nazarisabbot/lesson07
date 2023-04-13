/* Task 02 */
const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

function getAverageValue([...arr]) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  res = Math.floor(res / arr.length);
  return res;
}

const res2 = console.log(getAverageValue(allCashbox));
