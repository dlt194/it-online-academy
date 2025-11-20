import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_10_1 from "../../PHP Files/Activity 10.1 - Array Manipulation Practice/index.php?raw";
import activity_10_2 from "../../PHP Files/Activity 10.2 - Multidimensional Array Challenge/index.php?raw";
import activity_10_3 from "../../PHP Files/Activity 10.3 - Array Function Exploration/index.php?raw";

function Module_10() {
  return (
    <>
      <SectionComponent title="Introduction to Arrays">
        <p>
          An array is a special variable that can hold many values under a
          single name, and you can access the values by referring to an index
          number or name.
        </p>
        <p>In PHP, there are three types of arrays:</p>
        <ul className="list-disc pl-6">
          <li>
            <strong className="underline">Indexed arrays</strong> - Arrays with
            a numeric index
          </li>
          <li>
            <strong className="underline">Associative arrays</strong> - Arrays
            with named keys
          </li>
          <li>
            <strong className="underline">Multidimensional arrays</strong> -
            Arrays containing one or more arrays
          </li>
        </ul>
      </SectionComponent>
      <SectionComponent title="How to Create PHP Arrays">
        <p>
          You can create arrays by using the{" "}
          <code className="bg-gray-100 text-red-500">array()</code> function:
        </p>
        <CodeExample
          component={`$cars = array("Volvo", "BMW", "Toyota");`}
          language="php"
        />
        <p>
          You can also use a shorter syntax by using the{" "}
          <code className="bg-gray-100 text-red-500">[]</code> brackets:
        </p>
        <CodeExample
          component={`$cars = ["Volvo", "BMW", "Toyota"];`}
          language="php"
        />
        <p>
          Line breaks are not important, so an array declaration can span
          multiple lines:
        </p>
        <CodeExample
          component={`$cars = [
  "Volvo",
  "BMW",
  "Toyota"
];`}
          language="php"
        />
        <p>A comma after the last item is allowed:</p>
        <CodeExample
          component={`$cars = [
  "Volvo",
  "BMW",
  "Toyota",
];`}
          language="php"
        />
        <p>
          When creating indexed arrays the keys are given automatically,
          starting at 0 and increased by 1 for each item, so the array above
          could also be created with keys:
        </p>
        <CodeExample
          component={`$cars = [
  0 => "Volvo",
  1 => "BMW",
  2 =>"Toyota"
];
`}
          language="php"
        />
        <p>
          As you can see, indexed arrays are the same as associative arrays, but
          associative arrays have names instead of numbers:
        </p>
        <CodeExample
          component={`$myCar = [
  "brand" => "Ford",
  "model" => "Mustang",
  "year" => 1964
];
`}
          language="php"
        />
      </SectionComponent>

      <SectionComponent title="Multidimensional Arrays">
        <p>
          Sometimes you want to store values with more than one key. For this,
          we have multidimensional arrays.
        </p>
        <p>
          A multidimensional array is an array containing one or more arrays.
        </p>
        <p>
          PHP supports multidimensional arrays that are two, three, four, five,
          or more levels deep. However, arrays more than three levels deep are
          hard to manage for most people.
        </p>
        <p>
          The dimension of an array indicates the number of indices you need to
          select an element.
        </p>
        <ul className="list-disc pl-6">
          <li>
            For a two-dimensional array you need two indices to select an
            element
          </li>
          <li>
            For a three-dimensional array you need three indices to select an
            element
          </li>
        </ul>
        <p>
          A two-dimensional array is an array of arrays (a three-dimensional
          array is an array of arrays of arrays).
        </p>

        <CodeExample
          component={`$cars = array (
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
);
`}
          language="php"
        />
        <p>
          Now the two-dimensional $cars array contains four arrays, and it has
          two indices: row and column.
        </p>
        <p>
          To get access to the elements of the $cars array we must point to the
          two indices (row and column):
        </p>
        <CodeExample
          component={`echo $cars[0][0].": In stock: ".$cars[0][1].", sold: ".$cars[0][2].".<br>";
echo $cars[1][0].": In stock: ".$cars[1][1].", sold: ".$cars[1][2].".<br>";
echo $cars[2][0].": In stock: ".$cars[2][1].", sold: ".$cars[2][2].".<br>";
echo $cars[3][0].": In stock: ".$cars[3][1].", sold: ".$cars[3][2].".<br>";
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Get the Length of a PHP Array">
        <p>
          To get the number of elements in an array, we can use the{" "}
          <code className="bg-gray-100 text-red-500">count()</code> function.
        </p>
        <CodeExample
          component={`$cars=array("Volvo","BMW","Toyota");
echo count($cars);`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Sorting PHP Arrays">
        <p>
          The elements in an array can be sorted in alphabetical or numerical
          order, descending or ascending.
        </p>
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">sort()</code> - sort
            arrays in ascending order
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">rsort()</code> - sort
            arrays in descending order
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">asort()</code> - sort
            associative arrays in ascending order, according to the value
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">ksort()</code> - sort
            associative arrays in ascending order, according to the key
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">arsort()</code> - sort
            associative arrays in descending order, according to the value
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">krsort()</code> - sort
            associative arrays in descending order, according to the key
          </li>
        </ul>
      </SectionComponent>
      <SectionComponent title="Check is a Value is in a PHP Array">
        <p>
          The <code className="bg-gray-100 text-red-500">in_array()</code>{" "}
          function searches an array for a specific value.
        </p>
        <CodeExample
          component={`$people = array("Peter", "Joe", "Glenn", "Cleveland");

if (in_array("Glenn", $people))
  {
  echo "Match found";
  }
else
  {
  echo "Match not found";
  }`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Activity 10.1: Array Manipulation Practice">
        <CodeExample component={activity_10_1} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 10.2: Multidimensional Array Challenge">
        <CodeExample component={activity_10_2} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 10.3: Array Function Exploration">
        <CodeExample component={activity_10_3} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_10;
