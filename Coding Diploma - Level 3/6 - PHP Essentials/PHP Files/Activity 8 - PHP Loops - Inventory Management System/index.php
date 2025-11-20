<?php
// inventory_management.php
// Simple Inventory Management System using PHP

// 1. Sample inventory data
$inventory = [
    'apple' => ['name' => 'Apple',   'quantity' => 150, 'price' => 0.50],
    'banana' => ['name' => 'Banana', 'quantity' => 200, 'price' => 0.30],
    'orange' => ['name' => 'Orange', 'quantity' => 100, 'price' => 0.60],
    'mango' => ['name' => 'Mango',   'quantity' => 75,  'price' => 1.20],
    'grape' => ['name' => 'Grape',   'quantity' => 80,  'price' => 2.00],
];

// 2. Display inventory
function displayInventory($inventory, $title = "Current Inventory")
{
    echo "\n$title\n";
    echo str_repeat('-', 60) . "\n";
    echo sprintf("%-15s %-15s %-15s %s\n", "Item", "Quantity", "Price", "Total Value");
    echo str_repeat('-', 60) . "\n";

    $totalInventoryValue = 0;

    foreach ($inventory as $item) {
        $totalValue = $item['quantity'] * $item['price'];
        $totalInventoryValue += $totalValue;

        echo sprintf(
            "%-15s %-15d £%-14.2f £%.2f\n",
            $item['name'],
            $item['quantity'],
            $item['price'],
            $totalValue
        );
    }

    echo str_repeat('-', 60) . "\n";
    echo sprintf("Total Inventory Value: £%.2f\n", $totalInventoryValue);
}

// 3. Update item quantity
function updateInventory(&$inventory, $itemKey, $quantityChange)
{
    if (!array_key_exists($itemKey, $inventory)) {
        echo "Item '$itemKey' not found in inventory.\n";
        return;
    }

    $newQty = $inventory[$itemKey]['quantity'] + $quantityChange;

    if ($newQty < 0) {
        echo "Cannot set negative quantity for {$inventory[$itemKey]['name']}.\n";
        return;
    }

    $inventory[$itemKey]['quantity'] = $newQty;
    echo "Updated {$inventory[$itemKey]['name']} quantity. New quantity: $newQty\n";
}

// 4. Find low stock items
function findLowStock($inventory, $threshold)
{
    echo "\nItems below stock threshold ($threshold):\n";
    $lowStockItems = [];

    foreach ($inventory as $item) {
        if ($item['quantity'] < $threshold) {
            $lowStockItems[] = $item;
        }
    }

    if (empty($lowStockItems)) {
        echo "No low-stock items.\n";
    } else {
        foreach ($lowStockItems as $item) {
            echo "{$item['name']}: {$item['quantity']}\n";
        }
    }
}

// 5. Apply discount to all items
function applyDiscount(&$inventory, $percent)
{
    echo "\nApplying {$percent}% discount to all items:\n";

    if ($percent < 0 || $percent > 100) {
        echo "Invalid discount percentage.\n";
        return;
    }

    foreach ($inventory as &$item) {
        $original = $item['price'];
        $item['price'] = $item['price'] * (1 - ($percent / 100));

        echo sprintf(
            "%s: £%.2f -> £%.2f\n",
            $item['name'],
            $original,
            $item['price']
        );
    }
    unset($item);
}

// -------------------------------------------------------------
// Main Program Flow
// -------------------------------------------------------------

echo "Inventory Management System\n";

// Initial inventory
displayInventory($inventory, "Initial Inventory");

// Update examples
echo "\nUpdating inventory...\n";
updateInventory($inventory, 'apple', 50);
updateInventory($inventory, 'banana', -30);
updateInventory($inventory, 'watermelon', 20);  // Not found
updateInventory($inventory, 'orange', -150);    // Invalid

// Low stock check
findLowStock($inventory, 100);

// Apply discount
applyDiscount($inventory, 10);

// Final state
displayInventory($inventory, "Final Inventory After Updates");

?>