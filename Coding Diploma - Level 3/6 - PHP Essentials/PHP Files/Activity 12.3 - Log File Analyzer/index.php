<?php

// Create a PHP script that analyzes a log file using regular expressions to extract and summarize information.

// Regular expression to parse log lines
$logRegex = '/^\[(.*?)\] \[(.*?)\] \[(.*?)\] (.*)$/';

$logs = [];
$logLevels = [];
$filteredLogs = [];
$error = "";

// Handle uploaded file
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["logfile"])) {
    if ($_FILES["logfile"]["error"] === 0) {
        $fileContent = file($_FILES["logfile"]["tmp_name"], FILE_IGNORE_NEW_LINES);

        foreach ($fileContent as $line) {
            if (preg_match($logRegex, $line, $matches)) {
                $dateTime = trim($matches[1]);
                $level    = trim($matches[2]);
                $source   = trim($matches[3]);
                $message  = trim($matches[4]);

                list($date, $time) = explode(" ", $dateTime);

                $logs[] = [
                    "date" => $date,
                    "time" => $time,
                    "level" => $level,
                    "source" => $source,
                    "message" => $message
                ];

                // Count levels
                if (!isset($logLevels[$level])) {
                    $logLevels[$level] = 0;
                }
                $logLevels[$level]++;
            }
        }
    } else {
        $error = "Error uploading file.";
    }

    // Filtering/search
    $keyword = $_POST["keyword"] ?? "";
    $filterLevel = $_POST["filter_level"] ?? "";
    $filterSource = $_POST["filter_source"] ?? "";
    $dateFrom = $_POST["date_from"] ?? "";
    $dateTo = $_POST["date_to"] ?? "";

    foreach ($logs as $entry) {
        $match = true;

        if ($filterLevel && $entry["level"] !== $filterLevel) $match = false;
        if ($filterSource && stripos($entry["source"], $filterSource) === false) $match = false;
        if ($keyword && stripos($entry["message"], $keyword) === false) $match = false;

        if ($dateFrom && $entry["date"] < $dateFrom) $match = false;
        if ($dateTo && $entry["date"] > $dateTo) $match = false;

        if ($match) $filteredLogs[] = $entry;
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Log Analyzer</title>
</head>
<body style="font-family:Arial; max-width:900px; margin:20px auto;">

<h1>Log Analyzer</h1>

<!-- Upload Form -->
<form method="POST" enctype="multipart/form-data" style="padding:15px; border:1px solid #ccc;">
    <label><strong>Select a log file:</strong></label><br>
    <input type="file" name="logfile" required><br><br>

    <label><strong>Date Range:</strong></label><br>
    From <input type="date" name="date_from">
    To <input type="date" name="date_to"><br><br>

    <label><strong>Log Level:</strong></label><br>
    <input type="text" name="filter_level" placeholder="INFO, ERROR, DEBUG"><br><br>

    <label><strong>Source:</strong></label><br>
    <input type="text" name="filter_source" placeholder="auth, system, etc."><br><br>

    <label><strong>Search Keyword:</strong></label><br>
    <input type="text" name="keyword" placeholder="error, login, failed"><br><br>

    <button type="submit" style="padding:8px 15px;">Analyze Log</button>
</form>

<?php if ($error): ?>
    <p style="color:red;"><?= $error ?></p>
<?php endif; ?>

<?php if (!empty($logs)): ?>

    <!-- Summary -->
    <div style="margin-top:20px; border:1px solid #ccc; padding:15px;">
        <h2>Log Level Summary</h2>
        <?php foreach ($logLevels as $level => $count): ?>
            <p><strong><?= htmlspecialchars($level) ?>:</strong> <?= $count ?></p>
        <?php endforeach; ?>
    </div>

    <!-- Filtered Results -->
    <div style="margin-top:20px; border:1px solid #ccc; padding:15px;">
        <h2>Filtered Log Entries (<?= count($filteredLogs) ?> found)</h2>

        <?php if (count($filteredLogs) > 0): ?>
            <table style="width:100%; border-collapse:collapse;">
                <tr style="background:#f0f0f0;">
                    <th style="border:1px solid #ccc; padding:6px;">Date</th>
                    <th style="border:1px solid #ccc; padding:6px;">Time</th>
                    <th style="border:1px solid #ccc; padding:6px;">Level</th>
                    <th style="border:1px solid #ccc; padding:6px;">Source</th>
                    <th style="border:1px solid #ccc; padding:6px;">Message</th>
                </tr>

                <?php foreach ($filteredLogs as $entry): ?>
                    <tr>
                        <td style="border:1px solid #ccc; padding:6px;"><?= htmlspecialchars($entry["date"]) ?></td>
                        <td style="border:1px solid #ccc; padding:6px;"><?= htmlspecialchars($entry["time"]) ?></td>
                        <td style="border:1px solid #ccc; padding:6px;"><?= htmlspecialchars($entry["level"]) ?></td>
                        <td style="border:1px solid #ccc; padding:6px;"><?= htmlspecialchars($entry["source"]) ?></td>
                        <td style="border:1px solid #ccc; padding:6px;"><?= htmlspecialchars($entry["message"]) ?></td>
                    </tr>
                <?php endforeach; ?>
            </table>
        <?php else: ?>
            <p>No matching entries found.</p>
        <?php endif; ?>
    </div>

<?php endif; ?>

<hr style="margin-top:30px;">

<h2>Regex Pattern Used</h2>
<p>The log analyzer uses the following regular expression to parse each line:</p>

<pre style="border:1px solid #ccc; padding:10px;">
^\[(.*?)\] \[(.*?)\] \[(.*?)\] (.*)$
</pre>

<p>Which extracts:</p>
<ul>
    <li>Date & Time</li>
    <li>Log Level</li>
    <li>Source</li>
    <li>Message</li>
</ul>

<h3>Notes for Students</h3>
<ul>
    <li>Test with malformed logs to see how parsing behaves.</li>
    <li>Check edge cases (missing fields, invalid dates, unsupported log levels).</li>
    <li>Use <code>htmlspecialchars()</code> when displaying user data.</li>
    <li>Always validate and sanitize file uploads in real-world applications.</li>
</ul>

</body>
</html>