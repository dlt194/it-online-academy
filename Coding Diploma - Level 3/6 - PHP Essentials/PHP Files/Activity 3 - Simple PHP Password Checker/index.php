<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple PHP Password Checker</title>
</head>
<body>
<?php
// A PHP Password Checker that uses String Functions to change the values of the password and outputs the results.


// Declare a variable called $password and assign an alphanumeric value to the variable as a string data type
$password = "sup3rStr0ngP@ssw0rd";

// Declare another variable and assign the strlen() function to the variable. Pass in the $password variable as an argument of the function
$passwordLength = strlen($password);

// Declare another variable and assign the str_word_count() function to the variable. Pass in the $password variable as an argument of the function
$wordCount = str_word_count($password);

// Declare another variable and assign the strrev() function to the variable. Pass in the $password variable as an argument of the function
$reversedPassword = strrev($password);

// Declare another variable and assign the strpos() function to the variable. Pass in the $password variable as the first argument of the function as well as the numerical value as a string in the second argument of the function
$charPosition = strpos($password, "0");

// Declare another variable and assign the str_replace() function to the variable. Pass in the three arguments required to find and replace the characters in the $password variable
$replacedPassword = str_replace("0", "_", $password);

// Use an echo statement for each of the variables to output the values of the manipulated strings as HTML markup

// Output the length of the password
echo "The length of the password is: $passwordLength <br>";

// Output the word count of the password
echo "The word count of the password is: $wordCount <br>";

// Output the reversed password
echo "The reversed password is: $reversedPassword <br>";

// Output the position of the character '0' in the password
echo "The position of '0' in the password is: $charPosition <br>";

// Output the password with '0' replaced by '_'
echo "The password with '0' replaced by '_' is: $replacedPassword <br>";

?>

</body>
</html>