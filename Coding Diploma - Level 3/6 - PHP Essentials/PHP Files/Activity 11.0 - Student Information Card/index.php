<?php
// Create a PHP script that demonstrates the use of various super global variables in PHP.


// Array of student names
$studentNames = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

// Array of student ages (same order as names)
$studentAges = [20, 22, 19, 21, 23];

// Array of student grades (or other data)
$studentGrades = ["A", "B+", "A-", "B", "C+"];



// Calculates the average age from an array of ages.

function calculateAverageAge($ages)
{
    $sum = 0;
    $count = 0;

    // Loop through the ages and calculate the sum
    foreach ($ages as $age) {
        $sum += $age;
        $count++;
    }

    // Avoid division by zero
    if ($count === 0) {
        return 0;
    }

    return $sum / $count;
}

// Create a Function to Display Student Information
function displayStudentInformation($names, $ages, $grades)
{
    // Local variable to demonstrate scope
    $localVariable = "I exist only inside displayStudentInformation()";

    echo "Student Information:\n";
    echo "--------------------\n";

    // Use a loop to go through each student
    for ($i = 0; $i < count($names); $i++) {
        $name  = $names[$i];
        $age   = $ages[$i];
        $grade = $grades[$i];

        echo "Name: $name, Age: $age, Grade: $grade\n";
    }

}

// Function using static keyword
function incrementCounter()
{
    // static variable keeps its value between calls
    static $counter = 0;

    $counter++;
    echo "Counter value inside incrementCounter(): $counter\n";
}

// Call functions and output results

// Calculate the average age and store the result
$averageAge = calculateAverageAge($studentAges);

// Display student information
displayStudentInformation($studentNames, $studentAges, $studentGrades);

// Output the average age
echo "\nAverage Age of Students: " . number_format($averageAge, 2) . "\n";

// Demonstrate variable scope

/* The following line would cause a notice/error because $localVariable
is defined ONLY inside displayStudentInformation(), not here: */

//echo $localVariable; // Uncomment to see scope error


echo "Variable Scope Demo:\n";
echo "The variable \$localVariable was defined inside displayStudentInformation(),\n";
echo "so it cannot be accessed here in the global scope.\n\n";

// 7. Demonstrate static keyword

echo "Static Counter Demo:\n";
incrementCounter(); // 1
incrementCounter(); // 2
incrementCounter(); // 3

?>
