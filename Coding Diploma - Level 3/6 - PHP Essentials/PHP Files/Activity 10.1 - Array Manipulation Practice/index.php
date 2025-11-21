<?php

/* This activity will help students practice creating, manipulating, and sorting arrays in PHP. Students will create a simple inventory management system for a small bookstore. */

$inventory = [
    [
        "title" => "The Great Gatsby",
        "author" => "F. Scott Fitzgerald",
        "price" => 10.99,
        "quantity" => 12
    ],
    [
        "title" => "1984",
        "author" => "George Orwell",
        "price" => 8.50,
        "quantity" => 7
    ],
    [
        "title" => "To Kill a Mockingbird",
        "author" => "Harper Lee",
        "price" => 12.40,
        "quantity" => 15
    ],
    [
        "title" => "Moby Dick",
        "author" => "Herman Melville",
        "price" => 14.75,
        "quantity" => 3
    ],
    [
        "title" => "Pride and Prejudice",
        "author" => "Jane Austen",
        "price" => 9.25,
        "quantity" => 10
    ]
];

// Add a new book to the inventory
function addBook($inventory, $title, $author, $price, $quantity) {
    $inventory[] = [
        "title" => $title,
        "author" => $author,
        "price" => $price,
        "quantity" => $quantity
    ];

    return $inventory;
};

// Remove a book by title
function removeBook($inventory, $title) {
    foreach ($inventory as $index => $book) {
        if (strtolower($book["title"]) === strtolower($title)) {
            unset($inventory[$index]);
        }
    }

    return array_values($inventory);
};

// Update book quantity
function updateQuantity($inventory, $title, $newQuantity) {
    foreach ($inventory as &$book) {
        if (strtolower($book["title"]) === strtolower($title)) {
            $book["quantity"] = $newQuantity;
        }
    }

    return $inventory;
};

// Sort inventory by title, author, price, or quantity
function sortInventory($inventory, $sortBy) {
    usort($inventory, function($a, $b) use ($sortBy) {
        return $a[$sortBy] <=> $b[$sortBy];
    });

    return $inventory;
};

// Operations
echo "Initial Inventory:\n";
print_r($inventory);

// Add a new book
$inventory = addBook($inventory, "The Hobbit", "J.R.R. Tolkien", 11.50, 20);
echo "\nAfter Adding 'The Hobbit':\n";
print_r($inventory);

// Remove a book
$inventory = removeBook($inventory, "1984");
echo "\nAfter Removing '1984':\n";
print_r($inventory);

// Update quantity
$inventory = updateQuantity($inventory, "Moby Dick", 25);
echo "\nAfter Updating Quantity of 'Moby Dick':\n";
print_r($inventory);

// Sort inventory by price
$inventory = sortInventory($inventory, "price");
echo "\nAfter Sorting by Price:\n";
print_r($inventory);
?>