import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_5 from "../../PHP Files/Activity 5 - PHP Math and Operators - Shopping Cart Calculator/index.php?raw";

function Module_5() {
  return (
    <>
      <SectionComponent title="Simple PHP Math">
        <p>
          PHP has a set of math functions that allows you to perform
          mathematical tasks on numbers.
        </p>
        <ul className="list-disc pl-6">
          <li>
            The <code className="bg-gray-100 text-red-500">pi()</code> function
            returns the value of PI:
          </li>
          <li>
            The <code className="bg-gray-100 text-red-500">min()</code> and{" "}
            <code className="bg-gray-100 text-red-500">max()</code> functions
            can be used to find the lowest or highest value in a list of
            arguments:
          </li>
          <li>
            The <code className="bg-gray-100 text-red-500">abs()</code> function
            returns the absolute (positive) value of a number:
          </li>
          <li>
            The <code className="bg-gray-100 text-red-500">sqrt()</code>{" "}
            function returns the square root of a number:
          </li>
          <li>
            The <code className="bg-gray-100 text-red-500">round()</code>{" "}
            function rounds a floating-point number to its nearest integer:
          </li>
          <li>
            The PHP <code className="bg-gray-100 text-red-500">rand()</code>{" "}
            function generates a random number:
          </li>
        </ul>
        <CodeExample
          component={`echo(pi());
echo "<br>";
echo(min(0, 150, 30, 20, -8, -200));
echo "<br>";
echo(max(0, 150, 30, 20, -8, -200));
echo "<br>";
echo(abs(-6.7));
echo "<br>";
echo(sqrt(64));
echo "<br>";
echo(round(0.60));
echo "<br>";
echo(round(0.49));
echo "<br>";
echo(rand());
echo "<br>";

# Output
3.1415926535898
-200
150
6.7
8
1
0
507070673
`}
          language="php"
        />
        <p>Operators are used to perform operations on variables and values.</p>
        <p>PHP divides the operators in the following groups:</p>
        <ul className="list-disc pl-6">
          <li>Arithmetic operators</li>
          <li>Assignment operators</li>
          <li>Comparison operators</li>
          <li>Increment/Decrement operators</li>
          <li>Logical operators</li>
          <li>String operators</li>
          <li>Array operators</li>
          <li>Conditional assignment operators</li>
        </ul>
        <br />
        <p>
          The PHP arithmetic operators are used with numeric values to perform
          common arithmetical operations, such as addition, subtraction,
          multiplication etc.
        </p>
        <br />
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 border-b border-gray-200">Operator</th>
              <th className="px-4 py-3 border-b border-gray-200">Name</th>
              <th className="px-4 py-3 border-b border-gray-200">Example</th>
              <th className="px-4 py-3 border-b border-gray-200">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">+</td>
              <td className="px-4 py-2 border-t">Addition</td>
              <td className="px-4 py-2 border-t font-mono">$x + $y</td>
              <td className="px-4 py-2 border-t">Sum of $x and $y</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">-</td>
              <td className="px-4 py-2 border-t">Subtraction</td>
              <td className="px-4 py-2 border-t font-mono">$x - $y</td>
              <td className="px-4 py-2 border-t">Difference of $x and $y</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">*</td>
              <td className="px-4 py-2 border-t">Multiplication</td>
              <td className="px-4 py-2 border-t font-mono">$x * $y</td>
              <td className="px-4 py-2 border-t">Product of $x and $y</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">/</td>
              <td className="px-4 py-2 border-t">Division</td>
              <td className="px-4 py-2 border-t font-mono">$x / $y</td>
              <td className="px-4 py-2 border-t">Quotient of $x and $y</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">%</td>
              <td className="px-4 py-2 border-t">Modulus</td>
              <td className="px-4 py-2 border-t font-mono">$x % $y</td>
              <td className="px-4 py-2 border-t">
                Remainder of $x divided by $y
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">**</td>
              <td className="px-4 py-2 border-t">Exponentiation</td>
              <td className="px-4 py-2 border-t font-mono">$x ** $y</td>
              <td className="px-4 py-2 border-t">
                Result of raising $x to the $y&apos;th power
              </td>
            </tr>
          </tbody>
        </table>
      </SectionComponent>
      <SectionComponent title="Comparison Operators in PHP">
        <p>
          The PHP comparison operators are used to compare two values (number or
          string):
        </p>
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 border-b border-gray-200">Operator</th>
              <th className="px-4 py-3 border-b border-gray-200">Name</th>
              <th className="px-4 py-3 border-b border-gray-200">Example</th>
              <th className="px-4 py-3 border-b border-gray-200">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">==</td>
              <td className="px-4 py-2 border-t">Equal</td>
              <td className="px-4 py-2 border-t font-mono">$x == $y</td>
              <td className="px-4 py-2 border-t">
                Returns true if $x is equal to $y
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">
                ===
              </td>
              <td className="px-4 py-2 border-t">Identical</td>
              <td className="px-4 py-2 border-t font-mono">$x === $y</td>
              <td className="px-4 py-2 border-t">
                Returns true if $x is equal to $y, and they are of the same type
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">!=</td>
              <td className="px-4 py-2 border-t">Not equal</td>
              <td className="px-4 py-2 border-t font-mono">$x != $y</td>
              <td className="px-4 py-2 border-t">
                Returns true if $x is not equal to $y
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">
                &lt;&gt;
              </td>
              <td className="px-4 py-2 border-t">Not equal</td>
              <td className="px-4 py-2 border-t font-mono">$x &lt;&gt; $y</td>
              <td className="px-4 py-2 border-t">
                Returns true if $x is not equal to $y
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">
                !==
              </td>
              <td className="px-4 py-2 border-t">Not identical</td>
              <td className="px-4 py-2 border-t font-mono">$x !== $y</td>
              <td className="px-4 py-2 border-t">
                Returns true if $x is not equal to $y, or they are not of the
                same type
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">
                &gt;
              </td>
              <td className="px-4 py-2 border-t">Greater than</td>
              <td className="px-4 py-2 border-t font-mono">$x &gt; $y</td>
              <td className="px-4 py-2 border-t">
                Returns true if $x is greater than $y
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">
                &lt;
              </td>
              <td className="px-4 py-2 border-t">Less than</td>
              <td className="px-4 py-2 border-t font-mono">$x &lt; $y</td>
              <td className="px-4 py-2 border-t">
                Returns true if $x is less than $y
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">
                &gt;=
              </td>
              <td className="px-4 py-2 border-t">Greater than or equal to</td>
              <td className="px-4 py-2 border-t font-mono">$x &gt;= $y</td>
              <td className="px-4 py-2 border-t">
                Returns true if $x is greater than or equal to $y
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">
                &lt;=
              </td>
              <td className="px-4 py-2 border-t">Less than or equal to</td>
              <td className="px-4 py-2 border-t font-mono">$x &lt;= $y</td>
              <td className="px-4 py-2 border-t">
                Returns true if $x is less than or equal to $y
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50 hover:bg-blue-50">
              <td className="px-4 py-2 border-t font-mono font-semibold">
                &lt;=&gt;
              </td>
              <td className="px-4 py-2 border-t">Spaceship</td>
              <td className="px-4 py-2 border-t font-mono">$x &lt;=&gt; $y</td>
              <td className="px-4 py-2 border-t">
                Returns an integer less than, equal to, or greater than zero,
                depending on if $x is less than, equal to, or greater than $y.
                Introduced in PHP 7.
              </td>
            </tr>
          </tbody>
        </table>
      </SectionComponent>

      <SectionComponent title="Simple Example of Math used in PHP">
        <CodeExample
          component={`<? php
// Product prices
$apple_price = 2.5; // price per apple
$banana_price = 1.5; // price per banana

// Quantities
$apple_quantity = 5; // number of apples
$banana_quantity = 7; // number of bananas

// Calculate total price for each product
$apple_total = $apple_price * $apple_quantity;
$banana_total = $banana_price * $banana_quantity;

// Calculate grand total
$grand_total = $apple_total + $banana_total;

// Apply a discount if grand total is over 20
if ($grand_total > 20) {
  $discount = 0.1; // 10% discount
  $grand_total = $grand_total - ($grand_total . $discount);
}

// Print the final total
echo "The total price is: " . $grand_total;

# Output
The total price is: -207.1 
?>`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Common Math Operators in PHP">
        <p>Example of Modulus i.e. Remainder of $x divided by $y</p>
        <CodeExample
          component={`<? php
$a = 5;
$b = 2;
$remainder = $a % $b;
echo $remainder;

# Output
1
?>`}
          language="php"
        />
        <br />
        <p>
          Example of Exmponential i.e. Result of raising $x to the $y'th power
        </p>
        <CodeExample
          component={`<? php
$a = 2;
$b = 3;
$result = $a ** $b;
echo $result;

# Output
8
?>`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Activity 5: PHP Math and Operators - Shopping Cart Calculator">
        <CodeExample component={activity_5} />
      </SectionComponent>
    </>
  );
}

export default Module_5;
