function calculate(op) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  let result;

  if (isNaN(num1)) {
    result = `<p class="text-red-600">Number 1 is not a valid number.</p>`;
  } else if (isNaN(num2)) {
    result = `<p class="text-red-600">Number 2 is not a valid number.</p>`;
  } else {
    switch (op) {
      case "add":
        result = `${num1} + ${num2} = ${num1 + num2}`;
        break;
      case "subtract":
        result = `${num1} - ${num2} = ${num1 - num2}`;
        break;
      case "multiply":
        result = `${num1} * ${num2} = ${num1 * num2}`;
        break;
      case "divide":
        if (num2 === 0) {
          result =
            '<p class="text-red-600">Division by zero is not allowed.</p>';
          break;
        } else {
          result = `${num1} / ${num2} = ${num1 / num2}`;
        }
        break;
      default:
        result = '<p class="text-red-600">Invalid operation selected.</p>';
        break;
    }
  }

  document.getElementById("result").innerHTML = result;
}
