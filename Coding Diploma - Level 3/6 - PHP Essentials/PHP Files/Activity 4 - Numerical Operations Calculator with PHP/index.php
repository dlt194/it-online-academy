<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numerical Operations Calculator with PHP</title>
</head>
<body>


<?php
// A PHP script to perform arithmetic operations, data type conversions, and handle large and infinite numbers

/* 
    This script prompts the user for two numbers, performs various arithmetic operations,
    converts data types, handles large and infinite numbers, and displays the results.
*/

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];

    // Error handling for non-numeric inputs
    if (!is_numeric($num1) || !is_numeric($num2)) {
        echo "Please enter valid numbers.<br>";
    } else {

        // Convert user inputs to float
        $num1 = (float)$num1;
        $num2 = (float)$num2;

        // Arithmetic operations
        $add = $num1 + $num2;
        $subtract = $num1 - $num2;
        $multiply = $num1 * $num2;
        $divide = $num1 / $num2;
        $mode = $num1 % $num2;

        // Display arithmetic operations results
        echo "Add: $num1 + $num2 = $add <br>";
        echo "Subtract: $num1 - $num2 = $subtract <br>";
        echo "Multiply: $num1 * $num2 = $multiply <br>";
        echo "Divide: $num1 / $num2 = $divide <br>";
        echo "Mode: $num1 % $num2 = $mode <br>";

        // Data type conversions
        $intNum1 = (int)$num1;
        $intNum2 = (int)$num2;
        $floatNum1 = (float)$num1;
        $floatNum2 = (float)$num2;

        // Check data types
        $isInt1 = is_int($intNum1);
        $isInt2 = is_int($intNum2);
        $isFloat1 = is_float($floatNum1);
        $isFloat2 = is_float($floatNum2);

        // Display data type conversions and checks
        echo "Int conversion of num1: $intNum1, is int: " . ($isInt1 ? 'true' : 'false') . "<br>";
        echo "Int conversion of num2: $intNum2, is int: " . ($isInt2 ? 'true' : 'false') . "<br>";
        echo "Float conversion of num1: $floatNum1, is float: " . ($isFloat1 ? 'true' : 'false') . "<br>";
        echo "Float conversion of num2: $floatNum2, is float: " . ($isFloat2 ? 'true' : 'false') . "<br>";

        // Handling large and infinite numbers
        $large_number = 1.2e127;
        $infinite_number = 1.9e411;

        $isLargeFinite = is_finite($large_number);
        $isInfinite = is_infinite($infinite_number);

        // Display large and infinite numbers check results
        echo "Large number: $large_number, is finite: " . ($isLargeFinite ? 'true' : 'false') . "<br>";
        echo "Infinite number: $infinite_number, is infinite: " . ($isInfinite ? 'true' : 'false') . "<br>";
    }
}

?>

<!-- HTML form for user inputs -->
<form method="post" action="">
    <label for="num1">Enter First Number</label>
    <input type="text" id="num1" name="num1"><br><br>
    <label for="num2">Enter Second Number</label>
    <input type="text" id="num2" name="num2"><br><br>
    <input type="submit" value="Submit">
</form>

</body>
</html>