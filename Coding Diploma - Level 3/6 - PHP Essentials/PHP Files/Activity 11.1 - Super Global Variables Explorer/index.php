<?php
// Create a PHP script that demonstrates the use of various super global variables in PHP.

// 1. Start the session
session_start();

// Handle incoming data (POST/GET)

$errors = [];

// Handle POST form
if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['form_type'] ?? '') === 'post_form') {
    // Use filter_input or manual sanitisation
    $name  = trim($_POST['name'] ?? '');
    $color = trim($_POST['color'] ?? '');

    if ($name === '') {
        $errors[] = "Name is required.";
    }

    if ($color === '') {
        $errors[] = "Favorite color is required.";
    }

    // If no errors, save to session and cookie
    if (empty($errors)) {
        // 5. Store name in session
        $_SESSION['user_name'] = $name;

        // 6. Set cookie for favorite color (expires in 1 day)
        setcookie('favorite_color', $color, time() + 86400, "/");
    }
}

// Handle GET form (search term)
$searchTerm = '';
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['search'])) {
    $searchTerm = trim($_GET['search']);
}

// Helper to safely output values (basic XSS protection)
function e(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Superglobals Explorer</title>
    
</head>
<body>

    <h1>PHP Superglobals Explorer</h1>

    <!-- Display validation / error messages -->
    <?php if (!empty($errors)): ?>
        <div class="error">
            <strong>Errors:</strong>
            <ul>
                <?php foreach ($errors as $err): ?>
                    <li><?php echo e($err); ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>

    <!-- Forms to demonstrate $_REQUEST, $_POST, $_GET -->
    <div class="section">
        <h2>Forms (GET and POST)</h2>

        <h3>POST Form (Name + Favorite Color)</h3>
        <form action="" method="post">
            <!-- Hidden field to distinguish which form was submitted -->
            <input type="hidden" name="form_type" value="post_form">

            <label for="name">Name (stored in session):</label>
            <input type="text" name="name" id="name" value="">
            
            <label for="color">Favorite Color (stored in cookie):</label>
            <input type="text" name="color" id="color" value="">

            <button type="submit">Submit via POST</button>
        </form>

        <h3>GET Form (Search Term)</h3>
        <form action="" method="get">
            <label for="search">Search Term (sent via GET):</label>
            <input type="text" name="search" id="search" value="<?php echo e($searchTerm); ?>">
            <button type="submit">Submit via GET</button>
        </form>
    </div>

    <!-- $_SERVER section -->
    <div class="section">
        <h2>$_SERVER</h2>
        <p>Information about the server and the current request.</p>
        <ul>
            <li><strong>$_SERVER['PHP_SELF']:</strong> 
                <?php echo e($_SERVER['PHP_SELF'] ?? 'N/A'); ?> 
                (current script path)
            </li>
            <li><strong>$_SERVER['REQUEST_METHOD']:</strong> 
                <?php echo e($_SERVER['REQUEST_METHOD'] ?? 'N/A'); ?> 
                (HTTP method used: GET or POST)
            </li>
            <li><strong>$_SERVER['HTTP_USER_AGENT']:</strong> 
                <?php echo e($_SERVER['HTTP_USER_AGENT'] ?? 'N/A'); ?> 
                (browser / client information)
            </li>
            <li><strong>$_SERVER['SERVER_NAME']:</strong> 
                <?php echo e($_SERVER['SERVER_NAME'] ?? 'N/A'); ?> 
                (host name of the server)
            </li>
            <li><strong>$_SERVER['REMOTE_ADDR']:</strong> 
                <?php echo e($_SERVER['REMOTE_ADDR'] ?? 'N/A'); ?> 
                (client IP address)
            </li>
        </ul>
        <pre><?php print_r($_SERVER); ?></pre>
    </div>

    <!-- $_REQUEST section -->
    <div class="section">
        <h2>$_REQUEST</h2>
        <p>
            <code>$_REQUEST</code> contains values from GET, POST, and COOKIE (depending on server configuration).
            Here you can see all incoming request variables combined.
        </p>
        <pre><?php print_r($_REQUEST); ?></pre>
    </div>

    <!-- $_POST section -->
    <div class="section">
        <h2>$_POST</h2>
        <p>
            <code>$_POST</code> contains data sent in the body of the HTTP request using method="post".
            Used above for the name and favorite color form.
        </p>
        <pre><?php print_r($_POST); ?></pre>
    </div>

    <!-- $_GET section -->
    <div class="section">
        <h2>$_GET</h2>
        <p>
            <code>$_GET</code> contains query string parameters from the URL, including the search term from the GET form.
        </p>
        <pre><?php print_r($_GET); ?></pre>
    </div>

    <!-- $_SESSION section -->
    <div class="section">
        <h2>$_SESSION</h2>
        <p>
            <code>$_SESSION</code> stores data across requests for the same user. Here we store the user's name
            when they submit the POST form.
        </p>
        <p>
            <?php if (isset($_SESSION['user_name'])): ?>
                Stored session name: <strong><?php echo e($_SESSION['user_name']); ?></strong>
            <?php else: ?>
                No name found in session yet. Submit the POST form above.
            <?php endif; ?>
        </p>
        <pre><?php print_r($_SESSION); ?></pre>
    </div>

    <!-- $_COOKIE section -->
    <div class="section">
        <h2>$_COOKIE</h2>
        <p>
            <code>$_COOKIE</code> contains values stored on the client and sent with each request. Here we store the user's favorite color.
        </p>
        <p>
            <?php if (isset($_COOKIE['favorite_color'])): ?>
                Favorite color from cookie: <strong><?php echo e($_COOKIE['favorite_color']); ?></strong>
            <?php else: ?>
                No favorite color cookie set yet (or it has not been sent back by the browser).  
                Submit the POST form and reload the page.
            <?php endif; ?>
        </p>
        <pre><?php print_r($_COOKIE); ?></pre>
    </div>

</body>
</html>
