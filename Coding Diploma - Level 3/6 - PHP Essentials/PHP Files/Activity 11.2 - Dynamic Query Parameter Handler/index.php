<?php
// Create a PHP script that can handle and display various query parameters passed through the URL.




/* Basic sanitisation:
- converts special chars to HTML entities
- ensures we always work with strings
 */
function sanitize($value): string {
    if (is_array($value)) {
        // Flatten arrays into a readable string
        $value = implode(', ', array_map('strval', $value));
    }
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

// Retrieve all GET params
$params = $_GET ?? [];

// Simple error log array (for unexpected input, etc.)
$errors = [];

// Validate input (very basic example)
foreach ($params as $key => $value) {
    // Disallow extremely long keys for safety
    if (strlen($key) > 100) {
        $errors[] = "Parameter name '$key' is too long. It may be ignored.";
    }

    // Example: detect array-type values (e.g., ?foo[]=1&foo[]=2)
    if (is_array($value)) {
        $errors[] = "Parameter '$key' was provided multiple times; values will be combined.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Query Handler</title>
    
</head>
<body>

<h1>Query Handler</h1>
<p class="info">
    This page reads query parameters from the URL (using <code>$_GET</code>),
    sanitizes them, and displays their names and values.
</p>

<?php if (!empty($errors)): ?>
    <div class="error">
        <strong>Input warnings:</strong>
        <ul>
            <?php foreach ($errors as $err): ?>
                <li><?= sanitize($err) ?></li>
            <?php endforeach; ?>
        </ul>
    </div>
<?php endif; ?>

<?php if (empty($params)): ?>
    <p class="no-params">
        No query parameters were provided.<br>
        Try adding parameters to the URL like:
        <code>?name=Alice&amp;age=30</code>.
    </p>
<?php else: ?>
    <table>
        <thead>
        <tr>
            <th>Parameter Name</th>
            <th>Sanitized Value</th>
            <th>Raw Type</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($params as $name => $value): ?>
            <tr>
                <td><?= sanitize($name) ?></td>
                <td><?= sanitize($value) ?></td>
                <td><?= sanitize(gettype($value)) ?></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
<?php endif; ?>

<a href="index.html" class="button-link">Back to demo page</a>

</body>
</html>
