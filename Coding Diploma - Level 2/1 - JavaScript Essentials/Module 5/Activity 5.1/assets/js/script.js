function calculate(nums) {
  var sum = 0;

  for (let num of nums) {
    sum = sum + num;
  }

  let mean = sum / nums.length;

  let roundedMean = Math.round(mean);

  console.log(
    `The sum of the numbers is ${sum} and the rounded mean is ${roundedMean}.`
  );

  alert(
    `The sum of the numbers is ${sum} and the rounded mean is ${roundedMean}.`
  );
}
