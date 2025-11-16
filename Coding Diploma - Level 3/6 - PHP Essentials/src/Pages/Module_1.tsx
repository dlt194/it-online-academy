import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_1 from "../../PHP Files/Activity 1 - Showcase the Basics of PHP/index.php?raw";

function Module_1() {
  return (
    <>
      <SectionComponent title="PHP Code in a PHP File">
        <h2 className="font-semibold pb-2">
          Characteristics of PHP in a PHP File
        </h2>
        <ul className="list-disc pl-5">
          <li>
            A PHP file contains PHP code or script (but it could also include
            HTML)
          </li>
          <li>
            Has the .php file extension to define it as a PHP file, so that
            programs such as web browsers can read it.
          </li>
          <li>
            Must start with the opening &lt;?php tag, but does not require a
            closing tag.
          </li>
        </ul>
        <br />
        <CodeExample
          component={`// This is an example of a PHP file
<?php
    echo "Hello World!";`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Some Basics of a PHP File">
        <ul className="list-disc pl-5">
          <li>
            Each statement must be executed with a semicolon ";" (is a common
            error to forget it!)
          </li>
          <li>
            In PHP, keywords (e.g. if, else, while, echo, etc.), classes,
            functions, and user-defined functions are not case-sensitive.
          </li>
          <li>
            Must contain the opening and closing PHP tags to parse in HTML and
            only the opening tag in php files
          </li>
          <li>echo is used to output to the screen</li>
        </ul>
        <br />
        <CodeExample
          component={`<! DOCTYPE html>
<html>
  <body>
    <h1>My first PHP page</h1>
      <? php
      echo "Hello World!";
      ?>
  </body>
</html>`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="How to use PHP Code in a PHP File Type">
        <CodeExample
          component={`// index.php
<?php
  echo "<h1>Hello User, </h1> <p>Welcome to this webpage</p>`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Case Sensitivity in PHP">
        <p>
          In PHP, keywords (e.g.{" "}
          <code className="bg-gray-100 text-red-500">if</code>,{" "}
          <code className="bg-gray-100 text-red-500">else</code>,{" "}
          <code className="bg-gray-100 text-red-500">while</code>,{" "}
          <code className="bg-gray-100 text-red-500">echo</code>), classes,
          functions, and user-defined functions are not case-sensitive.
        </p>
        <p>
          In the example below, all three echo statements are equal and legal
        </p>
        <CodeExample
          component={`<!DOCTYPE html>
<html>
  <body>
    <?php
    ECHO "Hello World!<br>";
    echo "Hello World!<br>";
    EcHo "Hello World!<br>";
    ?>
  </body>
</html>`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Case Sensitivity in Variable Declarations">
        <p>
          In the example below, only the first statement will display the value
          of the $color variable! This is because{" "}
          <code className="bg-gray-100 text-red-500">$color</code>,{" "}
          <code className="bg-gray-100 text-red-500">$COLOR</code>, and{" "}
          <code className="bg-gray-100 text-red-500">$coLOR</code> are treated
          as three different variables:
        </p>
        <CodeExample
          component={`<!DOCTYPE html>
<html>
  <body>
    <?php
    $color = "red";
    echo "My car is " . $color . "<br>";
    echo "My house is " . $COLOR . "<br>";
    echo "My boat is " . $coLOR . "<br>";
    ?>
  </body>
</html>`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP Comments">
        <p>
          A comment in PHP code is a line that is not executed as a part of the
          program. Its only purpose is to be read by someone who is looking at
          the code.
        </p>
        <p>Comments can be used to:</p>
        <ul className="list-disc pl-5">
          <li>Let others understand your code</li>
          <li>
            Remind yourself of what you did - Most programmers have experienced
            coming back to their own work a year or two later and having to
            re-figure out what they did. Comments can remind you of what you
            were thinking when you wrote the code
          </li>
          <li>Leave out some parts of your code</li>
        </ul>
        <p>PHP supports several ways of commenting:</p>
        <CodeExample
          component={`// This is a single-line comment

# This is also a single-line comment

/* This is a
multi-line comment */`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Activity 1: Showcase the Basics of PHP">
        <CodeExample component={activity_1} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_1;
