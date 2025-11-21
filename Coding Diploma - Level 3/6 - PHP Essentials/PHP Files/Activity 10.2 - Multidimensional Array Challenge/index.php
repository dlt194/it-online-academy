<?php 

/* This activity will help students practice working with multidimensional arrays in PHP by creating a simple grade management system for a class. */

// Define a multidimensional array called $studentGrades with at least 5 students. Each student should have grades for three subjects: Math, English, and Science.
$studentGrades = [
    "Alice" => [
        "Math"    => 85,
        "English" => 78,
        "Science" => 92,
    ],
    "Bob" => [
        "Math"    => 90,
        "English" => 88,
        "Science" => 84,
    ],
    "Charlie" => [
        "Math"    => 70,
        "English" => 65,
        "Science" => 75,
    ],
    "Diana" => [
        "Math"    => 95,
        "English" => 91,
        "Science" => 89,
    ],
    "Ethan" => [
        "Math"    => 82,
        "English" => 79,
        "Science" => 88,
    ],
];

// Calculates and returns the average grade for a specific student.
function calculateAverage($studentGrades, $student)
{
    if (!isset($studentGrades[$student])) {
        return null; // student not found
    }

    $grades = $studentGrades[$student]; // e.g. ['Math'=>85, 'English'=>78, 'Science'=>92]

    $sum   = array_sum($grades);
    $count = count($grades);

    if ($count === 0) {
        return null;
    }

    return $sum / $count;
}


// Finds and returns the name of the student with the highest grade in a specific subject.
function findTopStudent($studentGrades, $subject)
{
    $topStudent = null;
    $topGrade   = null;

    foreach ($studentGrades as $studentName => $grades) {
        if (!isset($grades[$subject])) {
            continue; // skip if that subject is missing
        }

        if ($topGrade === null || $grades[$subject] > $topGrade) {
            $topGrade   = $grades[$subject];
            $topStudent = $studentName;
        }
    }

    return $topStudent; // null if subject not found anywhere
}

//Calculates and returns the class average for a specific subject.
function classAverage($studentGrades, $subject)
{
    $sum   = 0;
    $count = 0;

    foreach ($studentGrades as $grades) {
        if (isset($grades[$subject])) {
            $sum   += $grades[$subject];
            $count++;
        }
    }

    if ($count === 0) {
        return null; // nobody has that subject
    }

    return $sum / $count;
}

// Sorts the students based on their overall average grade across all subjects.
function sortStudentsByOverallAverage($studentGrades)
{
    $averages = [];

    // Compute each student's overall average
    foreach ($studentGrades as $studentName => $grades) {
        $sum   = array_sum($grades);
        $count = count($grades);

        if ($count === 0) {
            $averages[$studentName] = 0;
        } else {
            $averages[$studentName] = $sum / $count;
        }
    }

    // Use arsort() to sort by average descending, keeping keys (student names)
    arsort($averages);

    // Build a sorted array of students, preserving structure and adding the average
    $sorted = [];
    foreach ($averages as $studentName => $avg) {
        $sorted[$studentName] = [
            "grades"  => $studentGrades[$studentName],
            "average" => $avg,
        ];
    }

    return $sorted;
}

// Display the results of each function call using echo statements.
echo "Student Grades Array\n";

// Average for a specific student
$student = "Alice";
$aliceAvg = calculateAverage($studentGrades, $student);
echo "\nAverage for $student: ";
echo $aliceAvg !== null ? number_format($aliceAvg, 2) . "\n" : "Student not found.\n";

// Top student in a subject
$subject = "Math";
$topStudentMath = findTopStudent($studentGrades, $subject);
echo "\nTop student in $subject: ";
echo $topStudentMath !== null ? $topStudentMath . "\n" : "No grades found for $subject.\n";

// Class average for a subject
$subject = "Science";
$classAvgScience = classAverage($studentGrades, $subject);
echo "\nClass average for $subject: ";
echo $classAvgScience !== null ? number_format($classAvgScience, 2) . "\n" : "No grades found for $subject.\n";

// Sort students by overall average
echo "\nStudents Sorted by Overall Average (High to Low)\n";
$sortedStudents = sortStudentsByOverallAverage($studentGrades);
foreach ($sortedStudents as $name => $info) {
    echo $name . " - Average: " . number_format($info["average"], 2) . "\n";
}

?>