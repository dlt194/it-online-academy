import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_6 from "../../PHP Files/Activity 6 - PHP Constants - Configuration Manager/index.php?raw";

function Module_6() {
  return (
    <>
      <SectionComponent title="Introduction to PHP Constants">
        <p>
          A constant is an identifier (name) for a simple value. The value
          cannot be changed during the script.
        </p>
        <p>
          A valid constant name starts with a letter or underscore (no $ sign
          before the constant name).
        </p>
        <p>
          Unlike variables, constants are automatically global across the entire
          script.
        </p>
        <br />
        <p>
          To create a constant, use the{" "}
          <code className="bg-gray-100 text-red-500">define()</code> function.
        </p>
        <CodeExample
          component={`

define(name, value);
`}
          language="php"
        />
        <ul className="list-disc pl-6">
          <li>name: Specifies the name of the constant</li>
          <li>value: Specifies the value of the constant</li>
        </ul>
        <CodeExample
          component={`define("GREETING", "Hello, World!");
echo GREETING;

# Output
Hello, World!
`}
          language="php"
        />
        <p>You can also create a constant by using the const keyword.</p>
        <CodeExample
          component={`const MYCAR = "Volvo";
echo MYCAR;

# Output
Volvo
`}
          language="php"
        />
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">const</code> cannot be
            created inside another block scope, like inside a function or inside
            an if statement.
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">define()</code> can be
            created inside another block scope.
          </li>
        </ul>
      </SectionComponent>

      <SectionComponent title="PHP Constant Arrays">
        <p>
          From PHP7, you can create an Array constant using the{" "}
          <code className="bg-gray-100 text-red-500">define()</code> function.
        </p>
        <CodeExample
          component={`define("cars", [
  "Alfa Romeo",
  "BMW",
  "Toyota"
]);
echo cars[0];

# Output
Alfa Romeo
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP Constant as Globals">
        <p>
          Constants are automatically global and can be used across the entire
          script.
        </p>
        <CodeExample
          component={`define("GREETING", "Hello, World!");

function myTest() {
  echo GREETING;
}

myTest();


# Output
Hello, World!
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Activity 6: PHP Constants - Configuration Manager">
        <CodeExample component={activity_6} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_6;
