<?php
// Create a PHP script that validates email addresses using regular expressions.

function validateEmail($email, $strict = false) {
    $email = trim($email);

    // Basic regex components
    $username     = "[A-Za-z0-9._-]+";         // allowed characters
    $domain       = "[A-Za-z0-9.-]+";          // letters, numbers, dots, hyphens
    $tld          = "[A-Za-z]{2,63}";          // must be 2-63 letters

    $regex = "/^{$username}@{$domain}\.{$tld}$/";

    // Basic validation
    if (!preg_match($regex, $email)) {
        return "Does not match basic email format.";
    }

    // Strict mode: no consecutive dots in username or domain
    if ($strict) {
        if (strpos($email, "..") !== false) {
            return "Strict mode: no consecutive dots allowed.";
        }
    }

    return true; // valid
}

$emailsInput = $_POST["emails"] ?? "";
$strictMode  = isset($_POST["strict"]);
$results = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $emails = explode("\n", $emailsInput);

    foreach ($emails as $email) {
        $email = trim($email);
        if ($email === "") continue;

        $valid = validateEmail($email, $strictMode);
        $results[] = [
            "email" => $email,
            "valid" => $valid === true,
            "msg"   => $valid === true ? "Valid email" : $valid
        ];
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Email Validator</title>
</head>
<body style="font-family: Arial; max-width: 800px; margin: 20px auto;">

<h1>Email Validator</h1>

<form method="POST" style="border:1px solid #ccc; padding:15px;">
    <label><strong>Enter email addresses (one per line):</strong></label><br>
    <textarea name="emails" style="width:100%; height:150px;"><?= htmlspecialchars($emailsInput) ?></textarea><br><br>

    <label>
        <input type="checkbox" name="strict" <?= $strictMode ? "checked" : "" ?>>
        <strong>Enable strict mode (no consecutive dots, stricter validation)</strong>
    </label><br><br>

    <button type="submit" style="padding:8px 15px;">Validate Emails</button>
</form>

<?php if (!empty($results)): ?>
    <div style="margin-top:20px; border:1px solid #ccc; padding:15px;">
        <h2>Validation Results</h2>

        <?php foreach ($results as $r): ?>
            <?php if ($r["valid"]): ?>
                <p style="color:green; margin:5px 0;">
                    ✔ <?= htmlspecialchars($r["email"]) ?> — <?= $r["msg"] ?>
                </p>
            <?php else: ?>
                <p style="color:red; margin:5px 0;">
                    ✖ <?= htmlspecialchars($r["email"]) ?> — <?= $r["msg"] ?>
                </p>
            <?php endif; ?>
        <?php endforeach; ?>
    </div>
<?php endif; ?>

<hr style="margin-top:30px;">

<h2>What This Validator Checks</h2>
<div style="border:1px solid #ccc; padding:15px;">
    <ul>
        <li><strong>Username:</strong> letters, numbers, dots, underscores, hyphens</li>
        <li><strong>@ symbol</strong> must be present</li>
        <li><strong>Domain name:</strong> letters, numbers, dots, hyphens</li>
        <li><strong>TLD:</strong> 2–63 letters</li>
        <li><strong>Strict mode:</strong> no consecutive dots (e.g., <code>a..b@example.com</code>)</li>
    </ul>
</div>

</body>
</html>