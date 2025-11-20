<?php
declare(strict_types=1);

// Activity 9: PHP Functions - Library Management System

/* 
This mini-project is designed to help students apply their knowledge of PHP functions in a practical scenario. 
The objective is to create a simple library management system that demonstrates various aspects of PHP functions, 
including function definition, parameters, return types, and function calls.
 */

// Book class to represent a book in the library
class Book {
    public function __construct(
        public string $title,
        public string $author,
        public string $isbn,
        public bool $isAvailable = true
    ) {}
}

// Library class to manage the collection of books
class Library {
    // Associative array: key = ISBN, value = Book object
    private array $books = [];

    // Function to add a book to the library
    public function addBook(Book $book): void {
        $this->books[$book->isbn] = $book;
    }

    // Function to remove a book from the library
    public function removeBook(string $isbn): bool {
        if (isset($this->books[$isbn])) {
            unset($this->books[$isbn]);
            return true;
        }
        return false;
    }

    // Function to search for a book by title or author
    public function searchBook(string $query): array {
        return array_filter($this->books, function(Book $book) use ($query) {
            return stripos($book->title, $query) !== false
                || stripos($book->author, $query) !== false;
        });
    }

    // Function to borrow a book
    public function borrowBook(string $isbn): bool {
        if (isset($this->books[$isbn]) && $this->books[$isbn]->isAvailable) {
            $this->books[$isbn]->isAvailable = false;
            return true;
        }
        return false;
    }

    // Function to return a book
    public function returnBook(string $isbn): bool {
        if (isset($this->books[$isbn]) && !$this->books[$isbn]->isAvailable) {
            $this->books[$isbn]->isAvailable = true;
            return true;
        }
        return false;
    }

    // Function to get all books
    public function getAllBooks(): array {
        return $this->books;
    }
}

// Function to display a book's information (standalone helper)
function displayBook(Book $book): void {
    echo "Title: {$book->title}\n";
    echo "Author: {$book->author}\n";
    echo "ISBN: {$book->isbn}\n";
    echo "Status: " . ($book->isAvailable ? "Available" : "Borrowed") . "\n";
    echo "--------------------\n";
}

// Function to display all books in the library
function displayLibrary(Library $library): void {
    $books = $library->getAllBooks();

    if (empty($books)) {
        echo "The library is empty.\n";
    } else {
        foreach ($books as $book) {
            displayBook($book);
        }
    }
}

// Demonstration of passing by reference (objects)
// This function modifies the given Book object.
function renameBook(Book $book, string $newTitle): void {
    $book->title = $newTitle;
}

// ------------------------------------------------------------
// Main Script
// ------------------------------------------------------------

// Create a new library
$library = new Library();

// Add some books to the library
$library->addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"));
$library->addBook(new Book("To Kill a Mockingbird", "Harper Lee", "9780446310789"));
$library->addBook(new Book("1984", "George Orwell", "9780451524935"));

// Display all books in the library
echo "Initial Library State:\n";
displayLibrary($library);

// Search for a book
$searchQuery = "Gatsby";
$searchResults = $library->searchBook($searchQuery);
echo "\nSearch Results for '$searchQuery':\n";
if (empty($searchResults)) {
    echo "No books found matching the query.\n";
} else {
    foreach ($searchResults as $book) {
        displayBook($book);
    }
}

// Borrow a book
$borrowIsbn = "9780743273565";
echo "\nAttempting to borrow book with ISBN $borrowIsbn:\n";
if ($library->borrowBook($borrowIsbn)) {
    echo "Book with ISBN $borrowIsbn has been borrowed.\n";
} else {
    echo "Failed to borrow book with ISBN $borrowIsbn (not found or already borrowed).\n";
}

// Display updated library state
echo "\nLibrary State After Borrowing:\n";
displayLibrary($library);

// Try to borrow the same book again to show error handling
echo "\nAttempting to borrow the same book again ($borrowIsbn):\n";
if ($library->borrowBook($borrowIsbn)) {
    echo "Book with ISBN $borrowIsbn has been borrowed again.\n";
} else {
    echo "Cannot borrow book with ISBN $borrowIsbn again (already borrowed).\n";
}

// Return a book
$returnIsbn = "9780743273565";
echo "\nAttempting to return book with ISBN $returnIsbn:\n";
if ($library->returnBook($returnIsbn)) {
    echo "Book with ISBN $returnIsbn has been returned.\n";
} else {
    echo "Failed to return book with ISBN $returnIsbn (not found or not borrowed).\n";
}

// Demonstrate removing a book
$removeIsbn = "9780451524935";
echo "\nRemoving book with ISBN $removeIsbn:\n";
if ($library->removeBook($removeIsbn)) {
    echo "Book with ISBN $removeIsbn has been removed from the library.\n";
} else {
    echo "Failed to remove book with ISBN $removeIsbn (not found).\n";
}

// Demonstrate passing object to a function and modifying it
echo "\nDemonstrating object modification via function (pass-by-reference behavior):\n";
$allBooks = $library->getAllBooks();
if (!empty($allBooks)) {
    // Take the first book in the library and rename it
    $firstBook = reset($allBooks);
    echo "Before rename:\n";
    displayBook($firstBook);

    renameBook($firstBook, "The Great Gatsby (Special Edition)");

    echo "After rename (modified inside function):\n";
    displayBook($firstBook);
}

// Display final library state
echo "\nFinal Library State:\n";
displayLibrary($library);

?>
