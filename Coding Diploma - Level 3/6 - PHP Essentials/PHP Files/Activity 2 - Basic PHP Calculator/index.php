<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic PHP Calculator</title>
</head>
<body>
<?php
// A Simple PHP Calculator that uses a function to add two numerical values.

/* In this script we use two local variables and add them together, 
then use echo to output the result to the screen for the user. 
*/

function addNumbers() {
    // First Value
    $x = 1;
    // Second Value
    $y = 2;
    $sum = $x + $y;
    echo "<p> The sum of " . $x . " and " . $y . " is " . $sum . "</p>";
}

// Call addNumbers function
addNumbers();
?>

</body>
</html>