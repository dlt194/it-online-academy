<?php
// Create a PHP-based dashboard that displays various server and client information using super globals.


// Safely escape output for HTML.
function e(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

// Very simple User-Agent parser.

function parse_user_agent(string $ua): array
{
    $browser = 'Unknown';
    $version = 'Unknown';
    $platform = 'Unknown';

    // Detect platform
    if (stripos($ua, 'windows') !== false) {
        $platform = 'Windows';
    } elseif (stripos($ua, 'mac os x') !== false || stripos($ua, 'macintosh') !== false) {
        $platform = 'macOS';
    } elseif (stripos($ua, 'linux') !== false) {
        $platform = 'Linux';
    } elseif (stripos($ua, 'android') !== false) {
        $platform = 'Android';
    } elseif (stripos($ua, 'iphone') !== false || stripos($ua, 'ipad') !== false) {
        $platform = 'iOS';
    }

    
    $browsers = [
        'Edge'   => 'Edg',
        'Chrome' => 'Chrome',
        'Firefox'=> 'Firefox',
        'Safari' => 'Safari',
    ];

    foreach ($browsers as $name => $token) {
        if (stripos($ua, $token) !== false) {
            $browser = $name;
            // Try to extract version number after the token
            $pattern = '/' . preg_quote($token, '/') . '\/([0-9\.]+)/i';
            if (preg_match($pattern, $ua, $matches)) {
                $version = $matches[1];
            }
            break;
        }
    }

    return [
        'browser'  => $browser,
        'version'  => $version,
        'platform' => $platform,
        'raw'      => $ua,
    ];
}

// Get environment variables
function get_safe_env_vars(): array
{
    
    $env = $_ENV;

    $safe = [];
    foreach ($env as $key => $value) {
        // Mask likely secrets
        if (preg_match('/(pass|secret|key|token)/i', (string)$key)) {
            $safe[$key] = '[HIDDEN - possible secret]';
        } else {
            $safe[$key] = $value;
        }
    }
    ksort($safe);
    return $safe;
}

// Collect server info with sensible defaults
$serverSoftware = $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown';
$serverAddr     = $_SERVER['SERVER_ADDR']     ?? 'Unknown';
$serverPort     = $_SERVER['SERVER_PORT']     ?? 'Unknown';
$scriptName     = $_SERVER['SCRIPT_NAME']     ?? 'Unknown';
$scriptFile     = $_SERVER['SCRIPT_FILENAME'] ?? 'Unknown';
$clientIp       = $_SERVER['REMOTE_ADDR']     ?? 'Unknown';
$userAgent      = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';

$uaParsed       = parse_user_agent($userAgent);

// Decide if we should allow phpinfo() (very basic safety check)
$isLocal = in_array($clientIp, ['127.0.0.1', '::1'], true);
$showPhpInfo = isset($_GET['phpinfo']) && $_GET['phpinfo'] === '1' && $isLocal;

// If phpinfo is requested and allowed, show it and exit
if ($showPhpInfo) {
    echo "<!DOCTYPE html><html><head><meta charset='UTF-8'><title>phpinfo()</title></head><body>";
    echo "<p style='font-family:Arial, sans-serif; background:#ffeeba; padding:10px;'>
            <strong>Warning:</strong> phpinfo() exposes detailed server configuration.
            Do <strong>not</strong> enable this on a public/production server.
          </p>";
    phpinfo();
    echo "</body></html>";
    exit;
}

$safeEnv = get_safe_env_vars();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Server Dashboard</title>
</head>
<body>
<div class="container">
    <h1>Server Dashboard</h1>
    <p style="font-size:0.9rem; color:#555;">
        This dashboard demonstrates usage of PHP superglobals like
        <code>$_SERVER</code>, <code>$_ENV</code> and <code>phpinfo()</code>.
    </p>

    <div class="grid">
        <div class="card">
            <h2>Server Information</h2>
            <dl>
                <dt>Server software</dt>
                <dd><?= e($serverSoftware) ?></dd>

                <dt>Server IP &amp; port</dt>
                <dd><?= e($serverAddr) ?> : <?= e($serverPort) ?></dd>

                <dt>Current script name</dt>
                <dd><?= e($scriptName) ?></dd>

                <dt>Script path</dt>
                <dd><?= e($scriptFile) ?></dd>
            </dl>
        </div>

        <div class="card">
            <h2>Client Information</h2>
            <dl>
                <dt>Client IP address</dt>
                <dd><?= e($clientIp) ?></dd>

                <dt>User agent (raw)</dt>
                <dd><?= e($userAgent) ?></dd>
            </dl>
        </div>

        <div class="card">
            <h2>User Agent (Parsed)</h2>
            <dl>
                <dt>Browser</dt>
                <dd><?= e($uaParsed['browser']) ?> <?= e($uaParsed['version']) ?></dd>

                <dt>Platform</dt>
                <dd><?= e($uaParsed['platform']) ?></dd>
            </dl>
            <p style="font-size:0.8rem; color:#777;">
                Parsed using a very simple heuristic — not suitable as a full
                user-agent parser in production.
            </p>
        </div>
    </div>

    <div class="card">
        <h2>Environment Variables (<code>$_ENV</code>)</h2>
        <p style="font-size:0.8rem; color:#777;">
            Values that look like passwords, secrets or tokens are masked.
        </p>
        <div class="env-container">
            <?php if (!empty($safeEnv)): ?>
                <table>
                    <thead>
                    <tr>
                        <th style="width:35%;">Name</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach ($safeEnv as $name => $value): ?>
                        <tr>
                            <td><?= e((string)$name) ?></td>
                            <td><?= e((string)$value) ?></td>
                        </tr>
                    <?php endforeach; ?>
                    </tbody>
                </table>
            <?php else: ?>
                <p style="font-size:0.85rem;">No environment variables found.</p>
            <?php endif; ?>
        </div>
    </div>

    <div class="card">
        <h2>PHP Configuration (phpinfo)</h2>
        <div class="warning">
            <strong>Security note:</strong> <code>phpinfo()</code> exposes detailed
            configuration and environment data. It should <strong>never</strong> be
            accessible on a public or production server.
        </div>

        <?php if ($isLocal): ?>
            <p style="font-size:0.85rem;">
                You appear to be accessing from <code>localhost</code>. You may open
                <code>phpinfo()</code> in this browser:
            </p>
            <a class="button" href="?phpinfo=1">Open phpinfo()</a>
        <?php else: ?>
            <p style="font-size:0.85rem;">
                Your IP (<code><?= e($clientIp) ?></code>) is not localhost, so
                <code>phpinfo()</code> is disabled for safety.
            </p>
            <button class="button" disabled>phpinfo() disabled</button>
        <?php endif; ?>
    </div>

    <div class="footer">
        <strong>For students:</strong>
        <ul>
            <li>Test with different browsers and devices to see how the user agent changes.</li>
            <li>Try hitting the page from localhost and from another machine in the network.</li>
            <li>Temporarily add <code>var_dump($_SERVER)</code> or <code>var_dump($_ENV)</code> for debugging, but remove it afterward.</li>
            <li>Watch out for missing keys (use the null coalescing operator <code>??</code> like in this example).</li>
            <li>Keep outputs escaped with <code>htmlspecialchars()</code> to avoid XSS when printing any client-provided data.</li>
        </ul>
    </div>
</div>
</body>
</html>
