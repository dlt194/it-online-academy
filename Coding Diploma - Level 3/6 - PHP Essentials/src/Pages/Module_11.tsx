import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_11_0 from "../../PHP Files/Activity 11.0 - Student Information Card/index.php?raw";
import activity_11_1 from "../../PHP Files/Activity 11.1 - Super Global Variables Explorer/index.php?raw";
import activity_11_2 from "../../PHP Files/Activity 11.2 - Dynamic Query Parameter Handler/index.php?raw";
import activity_11_3 from "../../PHP Files/Activity 11.3 - Server Information Dashboard/index.php?raw";

function Module_11() {
  return (
    <>
      <SectionComponent title="Introduction to PHP Superglobals">
        <p>
          Some predefined variables in PHP are "superglobals", which means that
          they are always accessible, regardless of scope - and you can access
          them from any function, class or file without having to do anything
          special.
        </p>
        <p>The PHP superglobal variables are:</p>
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">$GLOBALS</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">$_SERVER</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">$_REQUEST</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">$_POST</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">$_GET</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">$_FILES</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">$_ENV</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">$_COOKIE</code>
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">$_SESSION</code>
          </li>
        </ul>
      </SectionComponent>
      <SectionComponent title="How to use PHP $GLOBALS">
        <p>
          <code className="bg-gray-100 text-red-500">$GLOBALS</code> is an array
          that contains all global variables.
        </p>
        <p>
          Global variables are variables that can be accessed from any scope.
        </p>
        <p>
          Variables of the outer most scope are automatically global variables,
          and can be used by any scope, e.g. inside a function.
        </p>
        <p>
          To use a global variable inside a function you have to either define
          them as global with the{" "}
          <code className="bg-gray-100 text-red-500">global</code> keyword, or
          refer to them by using the{" "}
          <code className="bg-gray-100 text-red-500">$GLOBALS</code> syntax.
        </p>
        <CodeExample
          component={`$x = 75;
  
function myfunction() {
  echo $GLOBALS['x'];
}

myfunction()

# Output
75`}
          language="php"
        />
        <p>
          This is different from other programming languages where global
          variables are available without specifically referring to them as
          global.
        </p>
        <p>
          You can also refer to global variables inside functions by defining
          them as global with the{" "}
          <code className="bg-gray-100 text-red-500">global</code> keyword.
        </p>
        <CodeExample
          component={`$x = 75;
  
function myfunction() {
  global $x;
  echo $x;
}

myfunction()

# Output
75`}
          language="php"
        />
        <p>
          Variables created in the outer most scope are global variables either
          if they are created using the $GLOBALS syntax or not:
        </p>
        <CodeExample
          component={`$x = 100;

echo $GLOBALS["x"] . "<br>";
echo $x;

# Output
100
100`}
          language="php"
        />
        <p>
          Variables created inside a function belongs only to that function, but
          you can create global variables inside a function by using the{" "}
          <code className="bg-gray-100 text-red-500">$GLOBALS</code> syntax:
        </p>
        <CodeExample
          component={`function myfunction() {
  $GLOBALS["x"] = 100;
}

myfunction();

echo $GLOBALS["x"] . "<br>";
echo $x;

# Output
100
100
`}
          language="php"
        />
      </SectionComponent>

      <SectionComponent title="How to use PHP $_SERVER">
        <p>
          <code className="bg-gray-100 text-red-500">$_SERVER</code> is a PHP
          super global variable which holds information about headers, paths,
          and script locations.{" "}
        </p>
        <p>
          The example below shows how to use some of the elements in{" "}
          <code className="bg-gray-100 text-red-500">$_SERVER</code>:
        </p>
        <CodeExample
          component={`echo $_SERVER['PHP_SELF'];
echo $_SERVER['SERVER_NAME'];
echo $_SERVER['HTTP_HOST'];
echo $_SERVER['HTTP_REFERER'];
echo $_SERVER['HTTP_USER_AGENT'];
echo $_SERVER['SCRIPT_NAME'];`}
          language="php"
        />
        <br />
        <table className="min-w-full border-collapse text-sm text-gray-700 notranslate">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left w-1/3">
                Element / Code
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left w-2/3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['PHP_SELF']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the filename of the currently executing script
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['GATEWAY_INTERFACE']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the version of the Common Gateway Interface (CGI) the
                server is using
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['SERVER_ADDR']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the IP address of the host server
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['SERVER_NAME']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the name of the host server (such as www.w3schools.com)
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['SERVER_SOFTWARE']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the server identification string (such as Apache/2.2.24)
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['SERVER_PROTOCOL']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the name and revision of the information protocol (such
                as HTTP/1.1)
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['REQUEST_METHOD']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the request method used to access the page (such as
                POST)
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['REQUEST_TIME']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the timestamp of the start of the request (such as
                1377687496)
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['QUERY_STRING']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the query string if the page is accessed via a query
                string
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['HTTP_ACCEPT']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the Accept header from the current request
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['HTTP_ACCEPT_CHARSET']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the Accept_Charset header from the current request (such
                as utf-8, ISO-8859-1)
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['HTTP_HOST']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the Host header from the current request
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['HTTP_REFERER']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the complete URL of the current page (not reliable
                because not all user-agents support it)
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['HTTPS']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Indicates whether the script is queried through a secure HTTP
                protocol
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['REMOTE_ADDR']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the IP address from where the user is viewing the
                current page
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['REMOTE_HOST']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the Host name from where the user is viewing the current
                page
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['REMOTE_PORT']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the port being used on the user's machine to communicate
                with the web server
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['SCRIPT_FILENAME']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the absolute pathname of the currently executing script
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['SERVER_ADMIN']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the value given to the SERVER_ADMIN directive in the web
                server configuration file
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['SERVER_PORT']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the port on the server machine being used by the web
                server for communication (such as 80)
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['SERVER_SIGNATURE']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the server version and virtual host name which are added
                to server-generated pages
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['PATH_TRANSLATED']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the file system based path to the current script
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['SCRIPT_NAME']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the path of the current script
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-mono">
                $_SERVER['SCRIPT_URI']
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Returns the URI of the current page
              </td>
            </tr>
          </tbody>
        </table>
      </SectionComponent>

      <SectionComponent title="How to use PHP $_REQUEST">
        <p>
          <code className="bg-gray-100 text-red-500">$_REQUEST</code> is a PHP
          super global variable which contains submitted form data, and all
          cookie data.
        </p>
        <p>
          In other words,{" "}
          <code className="bg-gray-100 text-red-500">$_REQUEST</code> is an
          array containing data from{" "}
          <code className="bg-gray-100 text-red-500">$_GET</code>,{" "}
          <code className="bg-gray-100 text-red-500">$_POST</code>, and{" "}
          <code className="bg-gray-100 text-red-500">$_COOKIE</code>.
        </p>
        <p>
          You can access this data with the{" "}
          <code className="bg-gray-100 text-red-500">$_REQUEST</code> keyword
          followed by the name of the form field, or cookie, like this:
        </p>
        <CodeExample component={`$_REQUEST['firstname']`} language="php" />
        <br />
        <p>POST request are usually data submitted from an HTML form.</p>
        <p>Here is an example of how a HTML form could look like:</p>
        <CodeExample
          component={`<html>
<body>

<form method="post" action="demo_request.php">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

</body>
</html>`}
          language="php"
        />
        <p>
          When a user clicks the submit button, the form data is sent to a PHP
          file specified in the{" "}
          <code className="bg-gray-100 text-red-500">action</code> attribute of
          the <code className="bg-gray-100 text-red-500">&lt;form&gt;</code>{" "}
          tag.
        </p>
        <p>
          In the action file we can use the{" "}
          <code className="bg-gray-100 text-red-500">$_REQUEST</code> variable
          to collect the value of the input field.
        </p>
        <CodeExample
          component={`<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_REQUEST['fname']);
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
}
?>

</body>
</html>`}
          language="php"
        />
        <br />
        <p>
          GET request can be form submissions as in the example above, with the{" "}
          <code className="bg-gray-100 text-red-500">method</code> attribute of
          the HTML{" "}
          <code className="bg-gray-100 text-red-500">&lt;form&gt;</code> element
          set to <code className="bg-gray-100 text-red-500">GET</code>.
        </p>
        <p>
          GET requests can also be data from a query string (information added
          after a URL address).
        </p>
        <p>
          Here is an example of how an HTML hyperlink, with a query string could
          look like:
        </p>
        <CodeExample
          component={`<html>
<body>

<a href="demo_phpfile.php?subject=PHP&web=W3schools.com">Test $GET</a>

</body>
</html>`}
          language="php"
        />
        <p>
          When a user clicks the link, the query string data is sent to{" "}
          <code className="bg-gray-100 text-red-500">demo_phpfile.php</code>.
        </p>
        <p>
          In the PHP file we can use the{" "}
          <code className="bg-gray-100 text-red-500">$_REQUEST</code> variable
          to collect the value of the query string.
        </p>
        <CodeExample
          component={`<html>
<body>

<?php
echo "Study " . $_REQUEST['subject'] . " at " . $_REQUEST['web'];
?>

</body>
</html>`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="How to use PHP $_POST">
        <p>
          <code className="bg-gray-100 text-red-500">$_POST</code> contains an
          array of variables received via the HTTP POST method.
        </p>
        <p>
          There are two main ways to send variables via the HTTP Post method:
        </p>
        <ul className="list-disc pl-6">
          <li>HTML forms</li>
          <li>JavaScript HTTP requests</li>
        </ul>
        <p>
          A HTML form submits information via the HTTP POST method if the form's{" "}
          <code className="bg-gray-100 text-red-500">method</code> attribute is
          set to <code className="bg-gray-100 text-red-500">"POST"</code>.
        </p>
        <p>To demonstrate this, we start by creating a simple HTML form:</p>
        <CodeExample
          component={`<html>
<body>

<form method="POST" action="demo_request.php">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

</body>
</html>
`}
          language="php"
        />
        <p>
          When a user clicks the submit button, the form data is sent to a PHP
          file specified in the{" "}
          <code className="bg-gray-100 text-red-500">action</code> attribute of
          the <code className="bg-gray-100 text-red-500">&lt;form&gt;</code>{" "}
          tag.
        </p>
        <p>
          In the action file we can use the{" "}
          <code className="bg-gray-100 text-red-500">$_POST</code> variable to
          collect the value of the input field.
        </p>
        <CodeExample
          component={`<html>
<body>

<form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['fname']);
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
}
?>

</body>
</html>`}
          language="php"
        />
        <p>
          When sending a HTTP request in JavaScript, you can specify that the
          HTTP method is POST.
        </p>
        <p>
          To demonstrate this we start by creating a JavaScript function
          containing a HTTP request:
        </p>
        <CodeExample
          component={`function myfunction() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "demo_phpfile.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.send("fname=Mary");
  }
}`}
          language="javascript"
        />
        <p>The code above will:</p>
        <ul className="list-decimal pl-6">
          <li>Intiate a HTTP request</li>
          <li>Set the HTTP method to POST</li>
          <li>Set a valid request header</li>
          <li>Create a function to execute when the request is done</li>
          <li>
            Send the HTTP request with a variable{" "}
            <code className="bg-gray-100 text-red-500">fname</code> set to{" "}
            <code className="bg-gray-100 text-red-500">Mary</code>
          </li>
        </ul>
        <p>
          It will try to write a response from the operation in a HTML element
          with <code className="bg-gray-100 text-red-500">id="demo"</code>.{" "}
        </p>
        <br />
        <p>
          Let us make a HTML page with such element, and also a button that
          executes the function.
        </p>
        <p>If we also add the the JavaScript, the page looks like this:</p>
        <CodeExample
          component={`<html>
<script>
function myfunction() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "demo_ajax.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.send("fname=Mary");
  }
}
</script>
<body>

<button onclick="myfunction()">Click me!</button>

<h1 id="demo"></h1>

</body>
</html>
`}
          language="html"
        />
        <p>
          In the PHP file that receive this HTTP request (
          <code className="bg-gray-100 text-red-500">demo_ajax.php</code>), we
          simply use the{" "}
          <code className="bg-gray-100 text-red-500">$_POST</code> variable to
          retrieve the <code className="bg-gray-100 text-red-500">fname</code>{" "}
          variable, and writes it as a response.
        </p>
        <CodeExample
          component={`$name = $_POST['fname'];
echo $name;
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="How to use PHP $_GET">
        <p>
          <code className="bg-gray-100 text-red-500">$_GET</code> contains an
          array of variables received via the HTTP GET method.
        </p>
        <p>
          There are two main ways to send variables via the HTTP GET method:
        </p>
        <ul className="list-disc pl-6">
          <li>Query strings in the URL</li>
          <li>HTML Forms</li>
        </ul>
        <p>
          A query string is data added at the end of a URL. In the link below,
          everything after the ? sign is part of the query string:
        </p>
        <CodeExample
          component={`<a href="demo_phpfile.php?subject=PHP&web=W3schools.com">Test $GET</a>`}
          language="html"
        />
        <p>The query string above contains two key/value pairs:</p>
        <ul className="pl-6">
          <li>subject=PHP</li>
          <li>web=W3schools.com</li>
        </ul>
        <p>
          In the PHP file we can use the{" "}
          <code className="bg-gray-100 text-red-500">$_GET</code> variable to
          collect the value of the query string.
        </p>
        <CodeExample
          component={`<html>
<body>

<?php
echo "Study " . $_GET['subject'] . " at " . $_GET['web'];
?>

</body>
</html>`}
          language="php"
        />
        <br />
        <p>
          A HTML form submits information via the HTTP GET{" "}
          <code className="bg-gray-100 text-red-500">method</code> if the form's
          method attribute is set to{" "}
          <code className="bg-gray-100 text-red-500">"GET"</code>.
        </p>
        <p>To demonstrate this, we start by creating a simple HTML form:</p>
        <CodeExample
          component={`<html>
<body>

<form action="welcome_get.php" method="GET">
  Name: <input type="text" name="name">
  E-mail: <input type="text" name="email">
  <input type="submit">
</form>

</body>
</html>`}
          language="html"
        />
        <p>
          When a user clicks the submit button, the form data is sent to a PHP
          file specified in the{" "}
          <code className="bg-gray-100 text-red-500">action</code> attribute of
          the <code className="bg-gray-100 text-red-500">&lt;form&gt;</code>{" "}
          tag.
        </p>
        <p>
          The form fields are sent to the PHP file, with your input, as query
          strings:
        </p>
        <CodeExample
          component={`welcome_get.php?name=John&email=john@example.com`}
        />
        <p>
          In the action file we can use the{" "}
          <code className="bg-gray-100 text-red-500">$_GET</code> variable to
          collect the value of the input fields.
        </p>
        <CodeExample
          component={`<html>
<body>

Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

</body>
</html>`}
          language="html"
        />
      </SectionComponent>
      <SectionComponent title="Student Information Card">
        <CodeExample component={activity_11_0} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 11.1: Super Global Variables Explorer">
        <CodeExample component={activity_11_1} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 11.2: Dynamic Query Parameter Handler">
        <CodeExample component={activity_11_2} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 11.3: Server Information Dashboard">
        <CodeExample component={activity_11_3} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_11;
