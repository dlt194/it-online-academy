import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_7 from "../../PHP Files/Activity 7 - PHP Conditional Statements - User Profile System/index.php?raw";

function Module_7() {
  return (
    <>
      <SectionComponent title="Introduction to Conditional Statements">
        <p>
          Conditional statements are used to perform different actions based on
          different conditions.
        </p>
        <p>
          Very often when you write code, you want to perform different actions
          for different conditions. You can use conditional statements in your
          code to do this.
        </p>
        <p>In PHP we have the following conditional statements:</p>
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">if</code> statement -
            executes some code if one condition is true
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">if...else</code>{" "}
            statement - executes some code if a condition is true and another
            code if that condition is false
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">if...elseif...else</code>{" "}
            statement - executes different codes for more than two conditions
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">switch</code> statement -
            selects one of many blocks of code to be executed
          </li>
        </ul>
      </SectionComponent>
      <SectionComponent title="The PHP 'if' Statement">
        <p>
          The <code className="bg-gray-100 text-red-500">if</code> statement
          executes some code if one condition is true.
        </p>
        <CodeExample
          component={`if (5 > 3) {
  echo "Have a good day!";
}

# Output
Have a good day!
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="The PHP 'if....else' Statement">
        <p>
          The <code className="bg-gray-100 text-red-500">if...else</code>{" "}
          statement executes some code if a condition is true and another code
          if that condition is false
        </p>
        <CodeExample
          component={`$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}

# Output
Have a good day!
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP 'if....elseif...else'">
        <p>
          The{" "}
          <code className="bg-gray-100 text-red-500">if...elseif...else</code>{" "}
          statement executes different codes for more than two conditions.
        </p>
        <CodeExample
          component={`$t = date("H");

if ($t < "10") {
  echo "Have a good morning!";
} elseif ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}

# Output
Have a good day!
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP Switch Statement">
        <p>
          The PHP <code className="bg-gray-100 text-red-500">switch</code>{" "}
          statement is used to perform different actions based on different
          conditions.
        </p>
        <p>
          Use the <code className="bg-gray-100 text-red-500">switch</code>{" "}
          statement to select one of many blocks of code to be executed.
        </p>
        <ul className="list-disc pl-6">
          <li>The expression is evaluated once</li>
          <li>
            The value of the expression is compared with the values of each case
          </li>
          <li>If there is a match, the associated block of code is executed</li>
          <li>
            The <code className="bg-gray-100 text-red-500">break</code> keyword
            breaks out of the switch block
          </li>
          <li>
            The <code className="bg-gray-100 text-red-500">default</code> code
            block is executed if there is no match
          </li>
        </ul>
        <CodeExample
          component={`$favcolor = "red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}
`}
          language="php"
        />
      </SectionComponent>

      <SectionComponent title="Activity 7: PHP Conditional Statements - User Profile System">
        <CodeExample component={activity_7} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_7;
