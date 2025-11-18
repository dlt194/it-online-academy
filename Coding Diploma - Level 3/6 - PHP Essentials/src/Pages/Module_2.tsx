import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

function Module_2() {
  return (
    <>
      <SectionComponent title="What is a Variable?">
        <h2 className="font-semibold pb-2">In programming, a variable</h2>
        <ul className="list-disc pl-6">
          <li>
            is a container for storing information - we can store data inside a
            variable and access or change it in the program{" "}
            <ul className="list-disc pl-4">
              <li>this helps us define dynamic behaviour in our programmes</li>
              <li>this helps with memory effciency in the program</li>
              <li>
                this helps with readability and classification, helps to
                describe the data that is held and for programmers to understand
                it
              </li>
              <li>
                helps with and allows programs to work with dynamic user
                supplied input (E.g. the same program can process different data
                provided by a user during different program runs.)
              </li>
            </ul>
          </li>
          <li>
            can be different types of data - we can define what kind of data it
            is and what can be done to it
          </li>
          <li>
            can have a scope - we can define where they can be accessed from
            (local or global)
          </li>
          <li>
            can have a lifespan - we can define how long the variable stays in
            memory
          </li>
        </ul>
        <p>
          Without variables, programming would not be as flexible, efficient and
          lack dynamic data manipulation which is fundamental to solving complex
          problems.
        </p>
      </SectionComponent>
      <SectionComponent title="How to Create a PHP Variable?">
        <p>
          In PHP, a variable starts with the{" "}
          <code className="bg-gray-100 text-red-500">$</code> sign, followed by
          the name of the variable:
        </p>
        <CodeExample
          component={`$x = 5;
$y = "John";`}
          language="php"
        />
        <p>
          In the example above, the variable{" "}
          <code className="bg-gray-100 text-red-500">$x</code> will hold the
          value <code className="bg-gray-100 text-red-500">5</code>, and the
          variable <code className="bg-gray-100 text-red-500">$y</code> will
          hold the value{" "}
          <code className="bg-gray-100 text-red-500">"John"</code>.
        </p>
        <br />
        <p>
          A variable can have a short name (like{" "}
          <code className="bg-gray-100 text-red-500">$x</code> and{" "}
          <code className="bg-gray-100 text-red-500">$y</code>) or a more
          descriptive name (
          <code className="bg-gray-100 text-red-500">$age</code>,{" "}
          <code className="bg-gray-100 text-red-500">$carname</code>,{" "}
          <code className="bg-gray-100 text-red-500">$total_volume</code>).
        </p>
        <br />
        <p>Rules for PHP variables:</p>
        <ul className="list-disc pl-6">
          <li>
            A variable starts with the{" "}
            <code className="bg-gray-100 text-red-500">$</code> sign, followed
            by the name of the variable
          </li>
          <li>
            A variable name must start with a letter or the underscore character
          </li>
          <li>A variable name cannot start with a number</li>
          <li>
            A variable name can only contain alpha-numeric characters and
            underscores (A-z, 0-9, and _ )
          </li>
          <li>
            Variable names are case-sensitive (
            <code className="bg-gray-100 text-red-500">$age</code> and{" "}
            <code className="bg-gray-100 text-red-500">$AGE</code> are two
            different variables)
          </li>
        </ul>
      </SectionComponent>
      <SectionComponent title="How to Output a PHP Variable?">
        <p>
          Both <code className="bg-gray-100 text-red-500">echo</code> and{" "}
          <code className="bg-gray-100 text-red-500">print</code>are used to
          output data to the screen.
        </p>

        <CodeExample
          component={`echo "Hello";
//same as:
echo("Hello");`}
          language="php"
        />
        <CodeExample
          component={`print "Hello";
//same as:
print("Hello");`}
          language="php"
        />
        <br />
        <p>The differences are small:</p>
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">echo</code> has no return
            value, while <code className="bg-gray-100 text-red-500">print</code>{" "}
            has a return value of 1 so it can be used in expressions
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">echo</code> can take
            multiple parameters, while{" "}
            <code className="bg-gray-100 text-red-500">print</code> can take one
            argument
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">echo</code> is marginally
            faster than <code className="bg-gray-100 text-red-500">print</code>
          </li>
        </ul>
      </SectionComponent>
      <SectionComponent title="Data Types & PHP Variables">
        <p>
          Variables can store data of different types, and different data types
          can do different things.
        </p>
        <p>PHP supports the following data types:</p>
        <ul className="list-disc pl-6">
          <li>String</li>
          <li>Integer</li>
          <li>Float (floating point numbers - also called double)</li>
          <li>Boolean</li>
          <li>Array</li>
          <li>Object</li>
          <li>NULL</li>
          <li>Resource</li>
        </ul>
        <p>
          You can get the data type of any object by using the{" "}
          <code className="bg-gray-100 text-red-500">var_dump()</code> function.
        </p>
        <CodeExample
          component={`$x = 5;
var_dump($x);
`}
          language="php"
        />
        <br />
        <h2 className="font-semibold pb-2">PHP String</h2>
        <p>A string is a sequence of characters, like "Hello world!".</p>
        <p>
          A string can be any text inside quotes. You can use single or double
          quotes:
        </p>
        <CodeExample
          component={`$x = "Hello world!";
$y = 'Hello world!';

var_dump($x);
echo "<br>";
var_dump($y);
`}
          language="php"
        />
        <hr />
        <h2 className="font-semibold pb-2">PHP Integer</h2>
        <p>
          An integer data type is a non-decimal number between -2,147,483,648
          and 2,147,483,647.
        </p>
        <ul className="list-disc pl-6">
          <li>An integer must have at least one digit</li>
          <li>An integer must not have a decimal point</li>
          <li>An integer can be either positive or negative</li>
          <li>
            Integers can be specified in: decimal (base 10), hexadecimal (base
            16), octal (base 8), or binary (base 2) notation
          </li>
        </ul>
        <p>
          In the following example{" "}
          <code className="bg-gray-100 text-red-500">$x</code> is an integer.
          The <code className="bg-gray-100 text-red-500">var_dump()</code>{" "}
          function returns the data type and value:
        </p>
        <CodeExample
          component={`$x = 5985;
var_dump($x);
`}
          language="php"
        />
        <hr />
        <h2 className="font-semibold pb-2">PHP Float</h2>
        <p>
          A float (floating point number) is a number with a decimal point or a
          number in exponential form.
        </p>
        <p>
          In the following example{" "}
          <code className="bg-gray-100 text-red-500">$x</code> is a float. The{" "}
          <code className="bg-gray-100 text-red-500">var_dump()</code> function
          returns the data type and value:
        </p>
        <CodeExample
          component={`$x = 10.365;
var_dump($x);
`}
          language="php"
        />
        <hr />
        <h2 className="font-semibold pb-2">PHP Boolean</h2>
        <p>A Boolean represents two possible states: TRUE or FALSE.</p>
        <CodeExample
          component={`$x = true;
var_dump($x);
`}
          language="php"
        />
        <hr />
        <h2 className="font-semibold pb-2">PHP Array</h2>
        <p>An array stores multiple values in one single variable.</p>
        <p>
          In the following example{" "}
          <code className="bg-gray-100 text-red-500">$cars</code> is an array.
          The <code className="bg-gray-100 text-red-500">var_dump()</code>{" "}
          function returns the data type and value:
        </p>
        <CodeExample
          component={`$cars = array("Volvo","BMW","Toyota");
var_dump($cars);
`}
          language="php"
        />
        <hr />
        <h2 className="font-semibold pb-2">PHP Object</h2>
        <p>
          Classes and objects are the two main aspects of object-oriented
          programming.
        </p>
        <p>
          A class is a template for objects, and an object is an instance of a
          class.
        </p>
        <p>
          When the individual objects are created, they inherit all the
          properties and behaviors from the class, but each object will have
          different values for the properties.
        </p>
        <p>
          Let's assume we have a class named{" "}
          <code className="bg-gray-100 text-red-500">Car</code> that can have
          properties like model, color, etc. We can define variables like{" "}
          <code className="bg-gray-100 text-red-500">$model</code>,{" "}
          <code className="bg-gray-100 text-red-500">$color</code>, and so on,
          to hold the values of these properties.
        </p>
        <p>
          When the individual objects (Volvo, BMW, Toyota, etc.) are created,
          they inherit all the properties and behaviors from the class, but each
          object will have different values for the properties.
        </p>
        <p>
          If you create a{" "}
          <code className="bg-gray-100 text-red-500">__construct()</code>{" "}
          function, PHP will automatically call this function when you create an
          object from a class.
        </p>
        <CodeExample
          component={`class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("red", "Volvo");
var_dump($myCar);`}
          language="php"
        />
        <hr />
        <h2 className="font-semibold pb-2">PHP NULL Value</h2>
        <p>Null is a special data type which can have only one value: NULL.</p>
        <p>
          A variable of data type NULL is a variable that has no value assigned
          to it.
        </p>
        <p>
          If a variable is created without a value, it is automatically assigned
          a value of NULL.
        </p>
        <p>Variables can also be emptied by setting the value to NULL:</p>
        <CodeExample
          component={`$x = "Hello world!";
$x = null;
var_dump($x);
`}
          language="php"
        />
        <hr />
        <h2 className="font-semibold pb-2">Change Data Type</h2>
        <p>
          If you assign an integer value to a variable, the type will
          automatically be an integer.
        </p>
        <p>
          If you assign a string to the same variable, the type will change to a
          string:
        </p>
        <CodeExample
          component={`$x = 5;
var_dump($x);

$x = "Hello";
var_dump($x);
`}
          language="php"
        />
        <p>
          If you want to change the data type of an existing variable, but not
          by changing the value, you can use casting.
        </p>
        <p>Casting allows you to change data type on variables:</p>
        <CodeExample
          component={`$x = 5;
$x = (string) $x;
var_dump($x);
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="The Rules when Creating PHP Variables">
        <p>Examples of Valid PHP Variable names</p>
        <CodeExample
          component={`$x;
$y;
$carname;
$_greeting;
$totalVolume`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="The Scope of PHP Variables">
        <p>In PHP, variables can be declared anywhere in the script.</p>
        <p>
          The scope of a variable is the part of the script where the variable
          can be referenced/used.
        </p>
        <p>PHP has three different variable scopes:</p>
        <ul className="list-disc pl-6">
          <li>local</li>
          <li>global</li>
          <li>static</li>
        </ul>
        <p>
          A variable declared outside a function has a{" "}
          <strong>GLOBAL SCOPE</strong> and can only be accessed outside a
          function:
        </p>
        <CodeExample
          component={`$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

echo "<p>Variable x outside function is: $x</p>";
`}
          language="php"
        />
        <p>
          A variable declared within a function has a{" "}
          <strong>LOCAL SCOPE</strong> and can only be accessed within that
          function:
        </p>
        <CodeExample
          component={`function myTest() {
  $x = 5; // local scope
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();

// using x outside the function will generate an error
echo "<p>Variable x outside function is: $x</p>";`}
        />
        <br />
        <h2 className="font-semibold pb-2">The global keyword</h2>
        <p>
          The <code className="bg-gray-100 text-red-500">global</code> keyword
          is used to access a global variable from within a function.
        </p>
        <p>
          To do this, use the{" "}
          <code className="bg-gray-100 text-red-500">global</code> keyword
          before the variables (inside the function):
        </p>
        <CodeExample
          component={`$x = 5;
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
}

myTest();
echo $y; // outputs 15`}
        />
        <p>
          PHP also stores all global variables in an array called
          <code className="bg-gray-100 text-red-500">$GLOBALS[index]</code>. The{" "}
          <code className="bg-gray-100 text-red-500">index</code> holds the name
          of the variable. This array is also accessible from within functions
          and can be used to update global variables directly.
        </p>
        <br />
        <h2 className="font-semibold pb-2">The static keyword</h2>
        <p>
          Normally, when a function is completed/executed, all of its variables
          are deleted. However, sometimes we want a local variable NOT to be
          deleted. We need it for a further job.
        </p>
        <p>
          To do this, use the{" "}
          <code className="bg-gray-100 text-red-500">static</code> keyword when
          you first declare the variable:
        </p>
        <CodeExample
          component={`function myTest() {
  static $x = 0;
  echo $x;
  $x++;
}

myTest();
myTest();
myTest();
`}
        />
        <p>
          Then, each time the function is called, that variable will still have
          the information it contained from the last time the function was
          called but the variable is still local to the function.
        </p>
      </SectionComponent>
    </>
  );
}

export default Module_2;
