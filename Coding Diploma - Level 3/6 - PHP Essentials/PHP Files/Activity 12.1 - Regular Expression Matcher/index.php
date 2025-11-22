<?php
// Create a PHP script that allows users to test different regular expressions against input strings.


$sample = $_POST["sample"] ?? "";
$pattern = $_POST["pattern"] ?? "";
$modifier = $_POST["modifier"] ?? "";

$matches = [];
$error = "";
$resultCount = null;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Build regex with delimiters
    $regex = "/" . $pattern . "/" . $modifier;

    // Suppress warnings from invalid regex
    $result = @preg_match_all($regex, $sample, $matches, PREG_OFFSET_CAPTURE);

    if ($result === false) {
        $error = "Invalid regular expression.";
    } else {
        $resultCount = $result;
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Regex Matcher</title>
</head>
<body style="font-family: Arial; max-width: 800px; margin: 20px auto;">

<h1>PHP Regex Matcher</h1>

<form method="POST" style="border:1px solid #ccc; padding:15px;">
    <label><strong>Sample Text:</strong></label><br>
    <textarea name="sample" style="width:100%; height:120px;"><?= htmlspecialchars($sample) ?></textarea><br><br>

    <label><strong>Regular Expression (without / /):</strong></label><br>
    <input type="text" name="pattern" value="<?= htmlspecialchars($pattern) ?>" style="width:100%;"><br><br>

    <label><strong>Modifier:</strong></label><br>
    <select name="modifier" style="width:100%;">
        <option value="">None</option>
        <option value="i" <?= $modifier === "i" ? "selected" : "" ?>>i (case-insensitive)</option>
        <option value="m" <?= $modifier === "m" ? "selected" : "" ?>>m (multiline)</option>
        <option value="s" <?= $modifier === "s" ? "selected" : "" ?>>s (dot matches newline)</option>
        <option value="u" <?= $modifier === "u" ? "selected" : "" ?>>u (UTF-8)</option>
    </select><br><br>

    <button type="submit" style="padding:8px 15px;">Run Regex</button>
</form>

<?php if ($_SERVER["REQUEST_METHOD"] === "POST"): ?>

    <div style="margin-top:20px; padding:15px; border:1px solid #ccc;">
        <h2>Results</h2>

        <?php if ($error): ?>
            <p style="color:red;"><strong>Error:</strong> <?= $error ?></p>
        <?php else: ?>

            <p><strong>Regex Used:</strong> /<?= htmlspecialchars($pattern) ?>/<?= htmlspecialchars($modifier) ?></p>
            <p><strong>Number of matches:</strong> <?= $resultCount ?></p>

            <?php if ($resultCount > 0): ?>
                <ul>
                    <?php foreach ($matches[0] as $m): ?>
                        <li>
                            Match: <strong><?= htmlspecialchars($m[0]) ?></strong>
                            — Position: <?= $m[1] ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php else: ?>
                <p>No matches found.</p>
            <?php endif; ?>

        <?php endif; ?>
    </div>

<?php endif; ?>

<hr style="margin:30px 0;">

<h2>Common Regex Patterns</h2>
<div style="border:1px solid #ccc; padding:15px;">
    <ul>
        <li><code>.</code> — any character</li>
        <li><code>\d</code> — digit</li>
        <li><code>\w</code> — letter, number, underscore</li>
        <li><code>\s</code> — whitespace</li>
        <li><code>[abc]</code> — a, b, or c</li>
        <li><code>[^abc]</code> — NOT a, b, or c</li>
        <li><code>^</code> — start of text</li>
        <li><code>$</code> — end of text</li>
        <li><code>*</code> — 0 or more</li>
        <li><code>+</code> — 1 or more</li>
        <li><code>?</code> — 0 or 1</li>
        <li><code>{3}</code> — exactly 3</li>
        <li><code>{2,5}</code> — between 2 and 5</li>
    </ul>
</div>

<h2>Common Modifiers</h2>
<div style="border:1px solid #ccc; padding:15px;">
    <ul>
        <li><strong>i</strong> — case-insensitive</li>
        <li><strong>m</strong> — multiline (^ and $ match each line)</li>
        <li><strong>s</strong> — dot matches newline</li>
        <li><strong>u</strong> — treat pattern as UTF-8</li>
    </ul>
</div>

</body>
</html>
