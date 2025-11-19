<?php
// Configuration Manager using PHP Constants

// Define configuration constants
define('DB_HOST', '127.0.0.1');
define('DB_USER', 'mysql');
define('DB_PASS', 'p@ssw0rd');
define('DB_NAME', 'db');

define('APP_NAME', 'MyFirstPHP');
define('APP_VERSION', '0.0.1');
define('DEBUG_MODE', true);

// Define an array constant for supported languages
define('SUPPORTED_LANGUAGES', ['eng' => 'English', 'esp' => 'Spanish', 'fre' => 'French']);

// Function to display database configuration
function displayDatabaseConfiguration() {
    echo "Database Configuration:\n";
    echo "Host: " . DB_HOST . "\n";
    echo "User: " . DB_USER . "\n";
    echo "Database: " . DB_NAME . "\n";
}

// Function to display app information
function displayApplicationInformation() {
    echo "Application Information:\n";
    echo "Name: " . APP_NAME . "\n";
    echo "Version: " . APP_VERSION . "\n";
    echo "Debug Mode: " . (DEBUG_MODE ? "Enabled" : "Disabled") . "\n";
}

// Function to display supported languages
function displaySupportedLanguages() {
    echo "Supported Languages:\n";
    foreach (SUPPORTED_LANGUAGES as $code => $language) {
        echo "$code: $language\n";
    }
}

// Main
echo "PHP Constants - Configuration Manager\n";

displayDatabaseConfiguration();
echo "\n";
displayApplicationInformation();
echo "\n";
displaySupportedLanguages();
echo "\n";

// Demonstrating case-insensitivity
echo "\nCase-insensitivity demonstration:\n";
echo "APP_NAME: " . APP_NAME . "\n";
echo "app_name: " . (defined('app_name') ? app_name : "Not accessible") . "\n";

// Demonstrating constants in a function (global)
function testConstantScope() {
    echo "\nTesting constant scope in function (global):\n";
    echo "APP_NAME inside function: " . APP_NAME . "\n";
}
testConstantScope();

// Error handling
echo "\nError handling:\n";
try {
    // Attempt to redefine a constant
    define('APP_NAME', 'NewAppName');
} catch (Error $error) {
    echo "Error: " . $error->getMessage() . "\n";
}

?>