import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

function Module_3() {
  return (
    <>
      <SectionComponent title="What is a String?">
        <p>A string is a sequence of characters, like "Hello world!".</p>
        <p>
          Strings in PHP are surrounded by either double quotation marks, or
          single quotation marks.
        </p>
        <CodeExample
          component={`echo "Hello";
echo 'Hello';
`}
          language="php"
        />
        <p>
          You can use double or single quotes, but you should be aware of the
          differences between the two.
        </p>
        <p>Double quoted strings perform action on special characters.</p>
        <p>
          E.g. when there is a variable in the string, it returns the value of
          the variable:
        </p>
        <CodeExample
          component={`$x = "John";
echo "Hello $x";

# Output
Hello John
`}
          language="php"
        />
        <p>
          Single quoted strings does not perform such actions, it returns the
          string like it was written, with the variable name:
        </p>
        <CodeExample
          component={`$x = "John";
echo 'Hello $x';

# Output
Hello $x 
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="What are PHP String Functions?">
        <p>In PHP we have a number of functions to manipulate strings.</p>

        <p>Some common string functions are:</p>
        <ul className="list-disc pl-6">
          <li>
            <code className="bg-gray-100 text-red-500">strlen()</code> - Return
            the length of a string
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">str_word_count()</code> -
            Count words in a string
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">strrev()</code> - Reverse
            a string
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">strpos()</code> - Search
            for a text within a string
          </li>
          <li>
            <code className="bg-gray-100 text-red-500">str_replace()</code> -
            Replace text within a string
          </li>
        </ul>
      </SectionComponent>
      <SectionComponent title="How to Return the Length of a String?">
        <CodeExample
          component={`echo strlen("Hello");
# Output
5`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="How to Count Words in a PHP String?">
        <CodeExample
          component={`echo str_word_count("Hello world!");
# Output
2
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="How to Reverse a String?">
        <CodeExample
          component={`echo strrev("Hello World!");
# Output
!dlroW olleH`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="How to Search for Text in a String?">
        <CodeExample
          component={`echo strpos("Hello world!", "world");

# Output
6
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="How to Replace Text in a String?">
        <CodeExample
          component={`echo str_replace("world","Dan","Hello world!");
# Output
Hello Dan! 
`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Activity 3: Simple PHP Password Checker">
        <CodeExample component={``} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_3;
