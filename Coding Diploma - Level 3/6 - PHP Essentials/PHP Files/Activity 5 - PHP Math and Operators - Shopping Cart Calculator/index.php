<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Math and Operators - Shopping Cart Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>


<?php
// Shopping Cart Calculator


// Array to store product information (name, price)
$products = [
    [
        'name' => 'Apple',
        'price' => 0.99,
        'qty' => 3
    ],
    [
        'name' => 'Bread',
        'price' => 1.80,
        'qty' => 2
    ],
    [
        'name' => 'Milk',
        'price' => 1.50,
        'qty' => 1
    ],
];

// Basic error handling: remove items with invalid quantity
foreach ($products as $index => $product) {
    if ($product['qty'] < 0) {
        // Single-line comment: unset items with negative quantity
        unset($products[$index]);
    }
}

function calculateCartTotals(array $items) {
    $subtotal = 0;

    // Calculate line total for each item and accumulate subtotal
    foreach ($items as $index => $item) {
        $lineTotal = $item['price'] * $item['qty']; // price * quantity
        $items[$index]['line_total'] = $lineTotal;
        $subtotal += $lineTotal;
    }

    return [
        'items'    => $items,
        'subtotal' => $subtotal,
    ];
}

function applyDiscount(float $subtotal, float $threshold = 20.0, float $discountRate = 0.10): array
{
    $discount = 0;

    // Comparison operator: only apply discount if subtotal exceeds threshold
    if ($subtotal > $threshold) {
        $discount = $subtotal * $discountRate;
    }

    $totalAfterDiscount = $subtotal - $discount;

    return [
        'discount' => $discount,
        'total'    => $totalAfterDiscount,
    ];
}

function formatCurrency(float $amount): string
{
    return '£' . number_format($amount, 2);
}

// Calculate initial cart totals
$cart = calculateCartTotals($products);
$items = $cart['items'];
$subtotal = $cart['subtotal'];

// Find most and least expensive items (by price, not line total)
$prices = array_column($items, 'price');
$maxPrice = max($prices); // highest price
$minPrice = min($prices); // lowest price

// Apply discount logic
$discountData = applyDiscount($subtotal);
$discount     = $discountData['discount'];
$total        = $discountData['total'];

// Use round() to clean up floating point values (if needed)
$roundedTotal = round($total, 2);

// Generate a random order number using rand()
$orderNumber = rand(100000, 999999);
?>

<h2>Itemized Bill</h2>
    <table>
        <thead>
        <tr>
            <th>Product</th>
            <th>Price (each)</th>
            <th>Quantity</th>
            <th>Line Total</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($items as $item): ?>
            <tr>
                <td><?php echo htmlspecialchars($item['name']); ?></td>
                <td><?php echo formatCurrency($item['price']); ?></td>
                <td><?php echo $item['qty']; ?></td>
                <td><?php echo formatCurrency($item['line_total']); ?></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>

    <div class="summary">
        <p><strong>Subtotal:</strong> <?php echo formatCurrency($subtotal); ?></p>

        <?php if ($discount > 0): ?>
            <p><strong>Discount (10%):</strong> -<?php echo formatCurrency($discount); ?></p>
        <?php else: ?>
            <p><strong>Discount:</strong> No discount applied (subtotal <= £20)</p>
        <?php endif; ?>

        <p><strong>Final Total:</strong>
            <span class="highlight"><?php echo formatCurrency($roundedTotal); ?></span>
        </p>

        <hr style="margin: 1rem 0; border-color: #e5e7eb;">

        <p><strong>Most expensive item price:</strong> <?php echo formatCurrency($maxPrice); ?></p>
        <p><strong>Cheapest item price:</strong> <?php echo formatCurrency($minPrice); ?></p>
    </div>
</body>
</html>