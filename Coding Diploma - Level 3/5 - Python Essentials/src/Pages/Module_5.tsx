function Module_5() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Strings</h2>
        <div className="prose max-w-none">
          <p>
            Strings in python are surrounded by either single quotation marks,
            or double quotation marks.
          </p>
          <br />
          <p>
            <code className="bg-gray-100 text-red-500">'hello'</code> is the
            same as <code className="bg-gray-100 text-red-500">"hello"</code>{" "}
          </p>
          <br />
          <p>You can assign multiline strings by using three quotes</p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Loop Through a String
        </h2>
        <div className="prose max-w-none">
          <p>
            Since strings are arrays, we can loop through the characters in a
            string, with a <code className="bg-gray-100 text-red-500">for</code>{" "}
            loop.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`for x in "banana":
  print(x)`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">String Length</h2>
        <div className="prose max-w-none">
          <p>
            To get the length of a string, use the{" "}
            <code className="bg-gray-100 text-red-500">len()</code> function.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = "Hello, World!"
print(len(a))

# Output
13`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Python Slicing Strings
        </h2>
        <div className="prose max-w-none">
          <p>You can return a range of characters by using the slice syntax.</p>
          <p>
            Specify the start index and the end index, separated by a colon, to
            return a part of the string.
          </p>
          <br />
          <p>
            Get the characters from position 2 to position 5 (not included):
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`b = "Hello, World!"
print(b[2:5])

# Output
llo`}</pre>
          </code>
          <br />
          <p>
            By leaving out the start index, the range will start at the first
            character:
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`b = "Hello, World!"
print(b[:5])

# Output
Hello`}</pre>
          </code>
          <br />
          <p>By leaving out the end index, the range will go to the end</p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`b = "Hello, World!"
print(b[2:])

# Output
Hello`}</pre>
          </code>
          <br />
          <p>
            Use negative indexes to start the slice from the end of the string:{" "}
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`b = "Hello, World!"
print(b[-5:-2])

# Output
orl`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Python Modify Strings
        </h2>
        <div className="prose max-w-none">
          <p>
            Python has a set of built-in methods that you can use on strings.
          </p>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">upper()</code> method
            returns the string in upper case
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = "Hello, World!"
print(a.upper()) `}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">lower()</code> method
            returns the string in lower case
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = "Hello, World!"
print(a.lower()) `}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">strip()</code> method
            removes any whitespace from the beginning or the end
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = " Hello, World! "
print(a.strip()) # returns "Hello, World!" `}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">replace() </code>{" "}
            method replaces a string with another string:
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = "Hello, World!"
print(a.replace("H", "J"))`}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">split() </code>method
            returns a list where the text between the specified separator
            becomes the list items.
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!'] `}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          String Concatenation
        </h2>
        <div className="prose max-w-none">
          <p>
            To concatenate, or combine, two strings you can use the + operator.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = "Hello"
b = "World"
c = a + b
print(c) # Returns HelloWorld`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Python String Formats
        </h2>
        <div className="prose max-w-none">
          <p>
            F-String was introduced in Python 3.6, and is now the preferred way
            of formatting strings.
          </p>
          <p>
            To specify a string as an f-string, simply put an f in front of the
            string literal, and add curly brackets {} as placeholders for
            variables and other operations.
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`age = 36
txt = f"My name is John, I am {age}"
print(txt)`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Escape Characters
        </h2>
        <div className="prose max-w-none">
          <p>
            To insert characters that are illegal in a string, use an escape
            character.
          </p>
          <p>
            An escape character is a backslash{" "}
            <code className="bg-gray-100 text-red-500">\</code> followed by the
            character you want to insert.
          </p>
          <p>
            An example of an illegal character is a double quote inside a string
            that is surrounded by double quotes:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`unescapedTxt = "We are the so-called "Vikings" from the north."
            
escapedTxt = "We are the so-called \\\"Vikings\\\" from the north."
            `}</pre>
          </code>
          <br />
          <ul className="list-disc pl-6">
            <li>\' Single Quote </li>
            <li>\\ Backslash </li>
            <li>\n New Line </li>
            <li>\r Carriage Return </li>
            <li>\t Tab </li>
            <li>\b Backspace </li>
            <li>\f Form Feed </li>
            <li>\ooo Octal value </li>
            <li>\xhh Hex value</li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">String Methods</h2>
        <div className="prose max-w-none">
          <p>
            Python has a set of built-in methods that you can use on strings.
          </p>
          <p>
            Note: All string methods return new values. They do not change the
            original string.
          </p>
          <br />
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Method
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    capitalize()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Converts the first character to upper case
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    casefold()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Converts string into lower case
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">center()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a centered string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">count()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns the number of times a specified value occurs in a
                  string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">encode()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns an encoded version of the string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    endswith()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns true if the string ends with the specified value
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    expandtabs()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Sets the tab size of the string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">find()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Searches the string for a specified value and returns the
                  position of where it was found
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">format()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Formats specified values in a string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    format_map()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Formats specified values in a string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">index()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Searches the string for a specified value and returns the
                  position of where it was found
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">isalnum()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if all characters in the string are alphanumeric
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">isalpha()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if all characters in the string are in the
                  alphabet
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">isascii()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if all characters in the string are ascii
                  characters
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    isdecimal()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if all characters in the string are decimals
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">isdigit()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if all characters in the string are digits
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    isidentifier()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if the string is an identifier
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">islower()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if all characters in the string are lower case
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    isnumeric()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if all characters in the string are numeric
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    isprintable()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if all characters in the string are printable
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">isspace()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if all characters in the string are whitespaces
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">istitle()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if the string follows the rules of a title
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">isupper()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if all characters in the string are upper case
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">join()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Joins the elements of an iterable to the end of the string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">ljust()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a left justified version of the string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">lower()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Converts a string into lower case
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">lstrip()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a left trim version of the string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    maketrans()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a translation table to be used in translations
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    partition()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a tuple where the string is parted into three parts
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">replace()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a string where a specified value is replaced with a
                  specified value
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">rfind()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Searches the string for a specified value and returns the last
                  position of where it was found
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">rindex()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Searches the string for a specified value and returns the last
                  position of where it was found
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">rjust()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a right justified version of the string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    rpartition()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a tuple where the string is parted into three parts
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">rsplit()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Splits the string at the specified separator, and returns a
                  list
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">rstrip()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a right trim version of the string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">split()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Splits the string at the specified separator, and returns a
                  list
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    splitlines()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Splits the string at line breaks and returns a list
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    startswith()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns true if the string starts with the specified value
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">strip()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a trimmed version of the string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    swapcase()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Swaps cases, lower case becomes upper case and vice versa
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">title()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Converts the first character of each word to upper case
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">
                    translate()
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a translated string
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">upper()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Converts a string into upper case
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">zfill()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Fills the string with a specified number of 0 values at the
                  beginning
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project: String Manipulation Tool
        </h2>
        <div className="prose max-w-none">
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`input_string = input("Enter a string: ")

print("\nString Manipulation Menu:")
print("a. Convert to uppercase")
print("b. Convert to lowercase")
print("c. Slice the string")
print("d. Calculate string length")
print("e. Loop through characters")

selection = int(input("Enter your selection (1-5): "))

if selection == 1:
    result = input_string.upper()
    print("Uppercase:", result)
elif selection == 2:
    result = input_string.lower()
    print("Lowercase:", result)
elif selection == 3:
    start = int(input("Enter start index: "))
    end = int(input("Enter end index: "))
    result = input_string[start:end]
    print("Sliced string:", result)
elif selection == 4:
    length = len(input_string)
    print("String length:", length)
elif selection == 5:
    print("Characters:")
    for char in input_string:
        print(char)
else:
    print("Invalid selection.")
`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project: User Profile Generator
        </h2>
        <div className="prose max-w-none">
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`firstName = input("Enter your First Name: ")
lastName = input("Enter your Surname: ")
age = input("Enter your age: ")
city = input("Enter your city: ")
job = input("Enter your job: ")


fullName = firstName + " " + lastName


description = f"{fullName} is {age} years old, lives in {city}, and works as a {job}."


info = "\"Profile:\"\n" + description


modified_name = fullName.upper()
modified_desc = info.replace("a", "an") if job.startswith(("a", "e", "i", "o", "u")) else info

print("##### User Profile #####")
print(modified_name)
print(modified_desc)
print("########################")`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_5;
