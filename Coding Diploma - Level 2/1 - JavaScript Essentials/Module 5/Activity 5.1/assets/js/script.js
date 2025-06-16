function calculate(nums) {
  let sum = 0;

  for (let num of nums) {
    sum = sum + num;
  }

  let mean = Math.round(sum / nums.length, 2);

  console.log(`The sum of the numbers is ${sum} and the mean is ${mean}.`);

  alert(`The sum of the numbers is ${sum} and the mean is ${mean}.`);
}
