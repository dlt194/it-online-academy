import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_12_1 from "../../PHP Files/Activity 12.1 - Regular Expression Matcher/index.php?raw";
import activity_12_2 from "../../PHP Files/Activity 12.2 - Email Validator/index.php?raw";
import activity_12_3 from "../../PHP Files/Activity 12.3 - Log File Analyzer/index.php?raw";

function Module_12() {
  return (
    <>
      <SectionComponent title="Introduction to PHP Regular Expressions">
        <p>
          A regular expression is a sequence of characters that forms a search
          pattern. When you search for data in a text, you can use this search
          pattern to describe what you are searching for.
        </p>

        <p>
          A regular expression can be a single character, or a more complicated
          pattern.
        </p>
        <p>
          Regular expressions can be used to perform all types of text search
          and text replace operations.
        </p>
        <br />
        <p>
          In PHP, regular expressions are strings composed of delimiters, a
          pattern and optional modifiers.
        </p>
        <CodeExample
          component={`$exp = "/Hello/i";
`}
          language="php"
        />
        <p>
          In the example above,{" "}
          <code className="bg-gray-100 text-red-500">/</code> is the delimiter,{" "}
          <span className="italic">hello</span> is the pattern that is being
          searched for, and <code className="bg-gray-100 text-red-500">i</code>{" "}
          is a modifier that makes the search case-insensitive.
        </p>
        <p>
          The delimiter can be any character that is not a letter, number,
          backslash or space. The most common delimiter is the forward slash
          (/), but when your pattern contains forward slashes it is convenient
          to choose other delimiters such as # or ~.
        </p>
      </SectionComponent>
      <SectionComponent title="PHP Regular Expression Functions">
        <p>
          PHP provides a variety of functions that allow you to use regular
          expressions.
        </p>
        <p>The most common functions are:</p>
        <br />
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/5 px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                Function
              </th>
              <th className="w-4/5 px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                preg_match()
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Returns 1 if the pattern was found in the string and 0 if not
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                preg_match_all()
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Returns the number of times the pattern was found in the string,
                which may also be 0
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                preg_replace()
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Returns a new string where matched patterns have been replaced
                with another string
              </td>
            </tr>
          </tbody>
        </table>
      </SectionComponent>
      <SectionComponent title="How to use PHP preg_match()">
        <p>
          The <code className="bg-gray-100 text-red-500">preg_match()</code>{" "}
          function will tell you whether a string contains matches of a pattern.
        </p>
        <CodeExample
          component={`$str = "Hello World";
$pattern = "/Hello/i";
echo preg_match($pattern, $str);

# Output
1`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="How to use PHP preg_match_all()">
        <p>
          The <code className="bg-gray-100 text-red-500">preg_match_all()</code>{" "}
          function will tell you how many matches were found for a pattern in a
          string.
        </p>
        <CodeExample
          component={`$str = "The rain in SPAIN falls mainly on the plains.";
$pattern = "/ain/i";
echo preg_match_all($pattern, $str);

# Output
4`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="How to use PHP preg_replace()">
        <p>
          The <code className="bg-gray-100 text-red-500">preg_replace()</code>{" "}
          function will replace all of the matches of the pattern in a string
          with another string.
        </p>
        <CodeExample
          component={`$str = "Hello World!";
$pattern = "/world/i";
echo preg_replace($pattern, "Dan", $str);

# Output
Hello Dan!`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP Regular Expression Modifiers">
        <p>Modifiers can change how a search is performed.</p>
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-24 px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                Modifier
              </th>
              <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                i
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Performs a case-insensitive search
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                m
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Performs a multiline search (patterns that search for a match at
                the beginning or end of a string will now match the beginning or
                end of <span className="italic">each line</span>)
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                u
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Enables correct matching of UTF-8 encoded patterns
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <CodeExample
          component={`<?php
$txt = "Hello World";
$pattern = "/o/i";
echo preg_match_all($pattern, $txt);
?>  

<p>The matches were found here:</p>

<?php
echo preg_replace($pattern, "#", $txt);
?>

# Output
2

The matches were found here:
Hell# W#rld`}
          language="php"
        />
        <CodeExample
          component={`<?php
$txt = "you are better than\nyou think";
$pattern = "/^you/m";
echo preg_match_all($pattern, $txt);
?>  

<p>The matches were found here:</p>

<pre>
<?php
echo preg_replace($pattern, "#", $txt);
?>  

# Output
2

The matches were found here:

# are better than
# think  `}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP Regular Expression Patterns">
        <p>Brackets are used to find a range of characters:</p>
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/4 px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                Expression
              </th>
              <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                [abc]
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find one or many of the characters inside the brackets
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                [^abc]
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any character NOT between the brackets
              </td>
            </tr>{" "}
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                [a-z]
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any character alphabetically between two letters
              </td>
            </tr>{" "}
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                [A-z]
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any character alphabetically between a specified upper-case
                letter and a specified lower-case letter
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                [A-Z]
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any character alphabetically between two upper-case letters
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                [123]
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find one or many of the digits inside the brackets
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                [0-5]
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any digits between the two numbers
              </td>
            </tr>{" "}
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                [0-9]
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any digits
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <CodeExample
          component={`<?php
$txt = "Hello World";
$pattern = "/[T-e]/";
echo preg_match_all($pattern, $txt);
?>  

<p>The matches were found here:</p>

<?php
echo preg_replace($pattern, "#", $txt);
?>

# Output
3

The matches were found here:
H#llo #orl#`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP Regular Expression Metacharacters">
        <p>Metacharacters are characters with a special meaning:</p>
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/4 px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                Metacharacter
              </th>
              <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                |
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find a match for any one of the patterns separated by{" "}
                <code>|</code> as in: <code>cat|dog|fish</code>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                .
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any character
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                ^
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Finds a match at the beginning of a string as in:{" "}
                <code>^Hello</code>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                $
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Finds a match at the end of the string as in:{" "}
                <code>World$</code>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                \d
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any digits
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                \D
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any non-digits
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                \s
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any whitespace character
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                \S
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any non-whitespace character
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                \w
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any alphabetical letter (a to Z) and digit (0 to 9)
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                \W
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find any non-alphabetical and non-digit character
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                \b
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find a match at the beginning of a word like this:{" "}
                <code>\bWORD</code>, or at the end of a word like this:{" "}
                <code>WORD\b</code>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                \uxxxx
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Find the Unicode character specified by the hexadecimal number{" "}
                <code>xxxx</code>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <CodeExample
          component={`<?php
$txt = "Hello World";
$pattern = "/^H/";
echo preg_match_all($pattern, $txt);
?>  

<p>This method returns 1 if there is a match, otherwise 0.</p>

<p>The matches were found here:</p>

<?php
echo preg_replace($pattern, "#", $txt);
?> 

# Output
1

This method returns 1 if there is a match, otherwise 0.

The matches were found here:
#ello World`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="PHP Regular Expression Quantifiers">
        <p>Quantifiers define quantities:</p>
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/4 px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                Quantifier
              </th>
              <th className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                <em>n</em>+
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Matches any string that contains at least one <em>n</em>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                <em>n</em>*
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Matches any string that contains zero or more occurrences of{" "}
                <em>n</em>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                <em>n</em>?
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Matches any string that contains zero or one occurrences of{" "}
                <em>n</em>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                <em>n</em>
                {"{"}
                <em>3</em>
                {"}"}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Matches any string that contains a sequence of <em>3</em>{" "}
                <em>n</em>'s
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                <em>n</em>
                {"{"}
                <em>2</em>, <em>5</em>
                {"}"}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Matches any string that contains a sequence of at least 2, but
                not more than 5 <em>n</em>'s
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200 font-mono">
                <em>n</em>
                {"{"}3,{"}"}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                Matches any string that contains a sequence of at least 3{" "}
                <em>n</em>'s
              </td>
            </tr>
          </tbody>
        </table>
        <CodeExample
          component={`<?php
$txt = "Hello World";
$pattern = "/l{2}/";
echo preg_match_all($pattern, $txt);
?>  

<p>The matches were found here:</p>

<?php
echo preg_replace($pattern, "#", $txt);
?>

# Output
1

The matches were found here:
He#o World`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Regular Expression Grouping">
        <p>
          You can use parentheses{" "}
          <code className="bg-gray-100 text-red-500">( )</code> to apply
          quantifiers to entire patterns. They also can be used to select parts
          of the pattern to be used as a match.
        </p>
        <CodeExample
          component={`<?php
$str = "Apples and bananas.";
$pattern = "/ba(na){2}/i";
echo preg_match($pattern, $str);

?> 
# Output
1`}
          language="php"
        />
      </SectionComponent>
      <SectionComponent title="Activity 12.1: Regular Expression Matcher">
        <CodeExample component={activity_12_1} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 12.2: Email Validator">
        <CodeExample component={activity_12_2} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 12.3: Log File Analyzer">
        <CodeExample component={activity_12_3} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_12;
