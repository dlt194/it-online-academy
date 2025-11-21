<?php


function findCommonElements(array $array1, array $array2): array
{
    // array_intersect() returns an array with values present in all arguments
    return array_intersect($array1, $array2);
}

function removeDuplicates(array $array): array
{
    // array_unique() removes duplicate values and keeps the first occurrence
    return array_values(array_unique($array)); // array_values() reindexes the array
}

function filterByType(array $array, string $type): array
{
    // array_filter() with a callback that checks the type of each element
    return array_values(array_filter($array, function ($item) use ($type) {
        return gettype($item) === $type;
    }));
}

function customSort(array $array, string $order = 'asc'): array
{
    // usort() sorts the array in place using a custom comparison function
    usort($array, function ($a, $b) use ($order) {
        if ($a == $b) {
            return 0;
        }

        if ($order === 'desc') {
            return ($a < $b) ? 1 : -1; // reverse comparison for descending
        }

        // default is ascending
        return ($a < $b) ? -1 : 1;
    });

    return $array;
}

function arrayToString(array $array, string $separator = ', '): string
{
    // implode() joins array elements into a string
    return implode($separator, $array);
}

// Example arrays to test utility functions
$array1 = [1, 2, 3, 4, 5, 5, 2];
$array2 = [4, 5, 6, 7, 8];

$mixedArray = [1, "hello", 3.14, "world", [1, 2], true, 42, "42", ["nested"]];

$numbers = [10, 5, 8, 1, 3, 10];

echo "findCommonElements\n";
$common = findCommonElements($array1, $array2);
print_r($common);

echo "\nremoveDuplicates\n";
$unique = removeDuplicates($array1);
print_r($unique);

echo "\nfilterByType (string)\n";
$onlyStrings = filterByType($mixedArray, 'string');
print_r($onlyStrings);

echo "\nfilterByType (integer)\n";
$onlyIntegers = filterByType($mixedArray, 'integer');
print_r($onlyIntegers);

echo "\ncustomSort ascending\n";
$sortedAsc = customSort($numbers, 'asc');
print_r($sortedAsc);

echo "\ncustomSort descending\n";
$sortedDesc = customSort($numbers, 'desc');
print_r($sortedDesc);

echo "\narrayToString\n";
$stringFromArray = arrayToString($unique, ' | ');
var_dump($stringFromArray);
?>