import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_4 from "../../PHP Files/Activity 4 - Numerical Operations Calculator with PHP/index.php?raw";

function Module_4() {
  return (
    <>
      <SectionComponent title="Introduction to Numbers in Programming">
        <p>There are three main numeric types in PHP:</p>
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">Integer</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">Float</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">Number Strings</code>
          </li>
        </ul>
        <p>In addition, PHP has two more data types used for numbers:</p>
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">Infinity</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">NaN</code>
          </li>
        </ul>
        <p>
          Variables of numeric types are created when you assign a value to
          them:
        </p>
        <CodeExample
          component={`$a = 5;
$b = 5.34;
$c = "25";

var_dump($a);
echo "<br>";
var_dump($b);
echo "<br>";
var_dump($c);

# Output
int(5)
float(5.34)
string(2) "25"`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP Numbers as Integers">
        <p>
          An integer is a number without any decimal part: 2, 256, -256, 10358,
          -179567 are all integers.
        </p>
        <p>
          An integer data type is a non-decimal number between -2147483648 and
          2147483647 in 32 bit systems, and between -9223372036854775808 and
          9223372036854775807 in 64 bit systems. A value greater (or lower) than
          this, will be stored as float, because it exceeds the limit of an
          integer.
        </p>
        <p>
          Another important thing to know is that even if 4 * 2.5 is 10, the
          result is stored as float, because one of the operands is a float
          (2.5).
        </p>
        <p>Here are some rules for integers:</p>
        <ul className="list-disc pl-6">
          <li>An integer must have at least one digit</li>
          <li>An integer must NOT have a decimal point</li>
          <li>An integer can be either positive or negative</li>
          <li>
            Integers can be specified in three formats: decimal (base 10),
            hexadecimal (base 16 - prefixed with 0x), octal (base 8 - prefixed
            with 0) or binary (base 2 - prefixed with 0b)
          </li>
        </ul>
        <p>PHP has the following predefined constants for integers:</p>
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">PHP_INT_MAX</code> - The
            largest integer supported
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">PHP_INT_MIN</code> - The
            smallest integer supported
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">PHP_INT_SIZE</code> - The
            size of an integer in bytes
          </li>
        </ul>
        <p>
          The PHP <code className="bg-gray-100 text-red-500">is_int()</code>{" "}
          function is used to check if the type of a variable is integer.
        </p>
        <CodeExample
          component={`$x = 5985;
var_dump(is_int($x));

$x = 59.85;
var_dump(is_int($x));
# Output
bool(true) bool(false) `}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP Numbers as Floats">
        <p>
          A float is a number with a decimal point or a number in exponential
          form: 2.0, 256.4, 10.358, 7.64E+5, 5.56E-5 are all floats.
        </p>
        <p>
          The float data type can commonly store a value up to
          1.7976931348623E+308 (platform dependent), and have a maximum
          precision of 14 digits.
        </p>
        <p>
          PHP has the following predefined constants for floats (from PHP 7.2):
        </p>
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">PHP_FLOAT_MAX</code> -
            The largest representable floating point number
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">PHP_FLOAT_MIN</code> -
            The smallest representable positive floating point number
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">PHP_FLOAT_DIG</code> -
            The number of decimal digits that can be rounded into a float and
            back without precision loss
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">PHP_FLOAT_EPSILON</code>{" "}
            - The smallest representable positive number x, so that x + 1.0 !=
            1.0
          </li>
        </ul>
        <p>
          The PHP <code className="bg-gray-100 text-red-500">is_float()</code>{" "}
          function is used to check if the type of a variable is float.
        </p>
        <CodeExample
          component={`$x = 10.365;
var_dump(is_float($x));

# Output
bool(true)`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP Numbers as Strings">
        <CodeExample
          component={`$x = 5985;
var_dump(is_numeric($x));

$x = "5985";
var_dump(is_numeric($x));

$x = "59.85" + 100;
var_dump(is_numeric($x));

$x = "Hello";
var_dump(is_numeric($x));


# Output
bool(true)
bool(true)
bool(true)
bool(false)`}
          language="php"
        />
        <p>
          The PHP <code className="bg-gray-100 text-red-500">is_numeric()</code>{" "}
          function is used to check whether a variable is a number or a numeric
          string.
        </p>
      </SectionComponent>
      <SectionComponent title="PHP Casting Strings & Floats to Integers">
        <p>
          Sometimes you need to cast a numerical value into another data type.
        </p>
        <p>
          The <code className="bg-gray-100 text-red-500">(int)</code>,{" "}
          <code className="bg-gray-100 text-red-500">(integer)</code>, and{" "}
          <code className="bg-gray-100 text-red-500">intval()</code> functions
          are often used to convert a value to an integer.
        </p>
        <CodeExample
          component={`// Cast float to int
$x = 23465.768;
$int_cast = (int)$x;
echo $int_cast;

echo "<br>";

// Cast string to int
$x = "23465.768";
$int_cast = (int)$x;
echo $int_cast;

# Output
23465
23465
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Activity 4: Numberical Operations Calculator">
        <CodeExample component={activity_4} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_4;
