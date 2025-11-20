import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_9 from "../../PHP Files/Activity 9 - PHP Functions - Library Management System/index.php?raw";

function Module_9() {
  return (
    <>
      <SectionComponent title="Introduction to PHP Functions">
        <p>
          PHP has over 1000 built-in functions that can be called directly, from
          within a script, to perform a specific task.
        </p>
        <p>In addition you can create your own custom functions!</p>
      </SectionComponent>
      <SectionComponent title="User Defined Functions in PHP">
        <p>
          Besides the built-in PHP functions, it is possible to create your own
          functions.
        </p>
        <ul className="list-disc pl-6">
          <li>
            A function is a block of statements that can be used repeatedly in a
            program.
          </li>
          <li>A function will not execute automatically when a page loads.</li>
          <li>A function will be executed by a call to the function.</li>
        </ul>
        <p>
          A user-defined function declaration starts with the keyword{" "}
          <code className="bg-gray-100 text-red-500">function</code>, followed
          by the name of the function:
        </p>
        <CodeExample
          component={`function myMessage() {
  echo "Hello world!";
  }`}
          language="php"
        />
        <p>
          A function name must start with a letter or an underscore. Function
          names are NOT case-sensitive.
        </p>
      </SectionComponent>
      <SectionComponent title="Arguments in PHP Functions">
        <p>
          Information can be passed to functions through arguments. An argument
          is just like a variable.
        </p>
        <p>
          Arguments are specified after the function name, inside the
          parentheses. You can add as many arguments as you want, just separate
          them with a comma.{" "}
        </p>
        <p>
          The following example has a function with one argument{" "}
          <code className="bg-gray-100 text-red-500">($fname)</code>. When the{" "}
          <code className="bg-gray-100 text-red-500">familyName()</code>{" "}
          function is called, we also pass along a name, e.g.
          <code className="bg-gray-100 text-red-500">("Jani")</code>, and the
          name is used inside the function, which outputs several different
          first names, but an equal last name:
        </p>
        <CodeExample
          component={`function familyName($fname) {
  echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
familyName("Stale");
familyName("Kai Jim");
familyName("Borge");

# Output
Jani Refsnes.
Hege Refsnes.
Stale Refsnes.
Kai Jim Refsnes.
Borge Refsnes.`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Return Values in PHP Functions">
        <p>
          To let a function return a value, use the{" "}
          <code className="bg-gray-100 text-red-500">return</code> statement:
        </p>
        <CodeExample
          component={`function sum($x, $y) {
  $z = $x + $y;
  return $z;
}

echo "5 + 10 = " . sum(5, 10) . "<br>";
echo "7 + 13 = " . sum(7, 13) . "<br>";
echo "2 + 4 = " . sum(2, 4);


# Output
5 + 10 = 15
7 + 13 = 20
2 + 4 = 6`}
          language="php"
        />
      </SectionComponent>

      <SectionComponent title="Pass References in PHP Functions">
        <p>
          In PHP, arguments are usually passed by value, which means that a copy
          of the value is used in the function and the variable that was passed
          into the function cannot be changed.
        </p>
        <p>
          When a function argument is passed by reference, changes to the
          argument also change the variable that was passed in. To turn a
          function argument into a reference, the{" "}
          <code className="bg-gray-100 text-red-500">&</code> operator is used:
        </p>
        <CodeExample
          component={`function add_five(&$value) {
  $value += 5;
}

$num = 2;
add_five($num);
echo $num;

# Output
7`}
          language="php"
        />
      </SectionComponent>

      <SectionComponent title="Activity 9: PHP Functions - Library Management System">
        <CodeExample component={activity_9} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_9;
