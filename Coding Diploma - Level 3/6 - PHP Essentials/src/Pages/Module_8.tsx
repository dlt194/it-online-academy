import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_8 from "../../PHP Files/Activity 8 - PHP Loops - Inventory Management System/index.php?raw";

function Module_8() {
  return (
    <>
      <SectionComponent title="Introduction to PHP Loops">
        <p>
          PHP loops are used to execute the same block of code again and again,
          as long as a certain condition is true.
        </p>
        <p>In PHP, we have the following loop types:</p>
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">while</code> - loops
            through a block of code as long as the specified condition is true
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">do...while</code> - loops
            through a block of code once, and then repeats the loop as long as
            the specified condition is true
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">for</code> - loops
            through a block of code a specified number of times
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">foreach</code> - loops
            through a block of code for each element in an array
          </li>
        </ul>
      </SectionComponent>
      <SectionComponent title='The PHP "while" Loop'>
        <p>
          The PHP <code className="bg-gray-100 text-red-500">while</code> loop -
          Loops through a block of code as long as the specified condition is
          true.
        </p>
        <p>
          The <code className="bg-gray-100 text-red-500">while</code> loop
          executes a block of code as long as the specified condition is true.
        </p>
        <CodeExample
          component={`$i = 1;
while ($i < 6) {
  echo $i;
  $i++;
}

# Output
12345
`}
          language="php"
        />
        <p>
          The <code className="bg-gray-100 text-red-500">while</code> loop does
          not run a specific number of times, but checks after each iteration if
          the condition is still true.
        </p>
        <p>
          The condition does not have to be a counter, it could be the status of
          an operation or any condition that evaluates to either true or false.
        </p>
      </SectionComponent>
      <SectionComponent title='The PHP "do...while" Loop'>
        <p>
          The PHP <code className="bg-gray-100 text-red-500">do...while</code>{" "}
          loop - Loops through a block of code once, and then repeats the loop
          as long as the specified condition is true.
        </p>
        <p>
          The <code className="bg-gray-100 text-red-500">do...while</code> loop
          will always execute the block of code at least once, it will then
          check the condition, and repeat the loop while the specified condition
          is true.
        </p>
        <CodeExample
          component={`$i = 1;

do {
  echo $i;
  $i++;
} while ($i < 6);

# Output
12345
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title='PHP "for" Loop'>
        <p>
          The PHP <code className="bg-gray-100 text-red-500">for</code> loop -
          Loops through a block of code a specified number of times.
        </p>
        <p>
          The <code className="bg-gray-100 text-red-500">for</code> loop is used
          when you know how many times the script should run.
        </p>
        <CodeExample
          component={`for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}
# Output
The number is: 0
The number is: 1
The number is: 2
The number is: 3
The number is: 4
The number is: 5
The number is: 6
The number is: 7
The number is: 8
The number is: 9
The number is: 10`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title='PHP "foreach" Loop'>
        <p>
          The PHP <code className="bg-gray-100 text-red-500">foreach</code> loop
          - Loops through a block of code for each element in an array or each
          property in an object.
        </p>
        <p>
          The most common use of the{" "}
          <code className="bg-gray-100 text-red-500">foreach</code> loop, is to
          loop through the items of an array.
        </p>
        <CodeExample
          component={`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  echo "$x <br>";
}
`}
          language="php"
        />
        <p>
          For every loop iteration, the value of the current array element is
          assigned to the variable{" "}
          <code className="bg-gray-100 text-red-500">$x</code>. The iteration
          continues until it reaches the last array element.
        </p>
      </SectionComponent>
      <SectionComponent title="PHP Break & Continue">
        <p>
          With the <code className="bg-gray-100 text-red-500">break</code>{" "}
          statement we can stop the loop even if the condition is still true:
        </p>
        <CodeExample
          component={`$i = 1;
while ($i < 6) {
  if ($i == 3) break;
  echo $i;
  $i++;
}

# Output
12
`}
          language="php"
        />
        <hr />
        <p>
          With the <code className="bg-gray-100 text-red-500">continue</code>{" "}
          statement we can stop the current iteration, and continue with the
          next:
        </p>
        <CodeExample
          component={`$i = 0;
while ($i < 6) {
  $i++;
  if ($i == 3) continue;
  echo $i;
}

# Output
12456
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Activity 8: PHP Loops - Inventory Management System">
        <CodeExample component={activity_8} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_8;
