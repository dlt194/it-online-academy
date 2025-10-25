function Module_9() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Dictionaries</h2>
        <div className="prose max-w-none">
          <p>
            Dictionaries are a fundamental data structure in Python that allow
            you to store and retrieve data in key-value pairs. Each key in a
            dictionary is unique, and you can use it to access the corresponding
            value quickly. Dictionaries are also known as associative arrays or
            hash maps in other programming languages.
          </p>

          <p>
            Here's how you can work with dictionaries in Python: You can create
            an empty dictionary or initialise it with values using curly braces{" "}
            {} or the dict() constructor.
          </p>
          <br />
          <p>Empty Dictionary</p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`myDict = {}`}</pre>
          </code>
          <br />
          <p>Dictionary with initial values</p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`person = {
'name'.'John',
'age': 30,
'city': 'London'
}`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Conditional Statements
        </h2>
        <div className="prose max-w-none">
          <p>Python supports the usual logical conditions from mathematics:</p>
          <ul className="list-disc pl-6">
            <li>Equals: a == b</li>
            <li>Not Equals: a != b</li>
            <li>Less than: a &lt; b</li>
            <li>Less than or equal to: a &lt;= b</li>
            <li>Greater than: a &gt; b</li>
            <li>Greater than or equal to: a &gt;= b</li>
          </ul>
          <p>
            These conditions can be used in several ways, most commonly in "if
            statements" and loops.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = 33
b = 200
if b > a:
  print("b is greater than a")
}`}</pre>
          </code>
          <br />
          <p>
            In this example we use two variables,{" "}
            <code className="bg-gray-100 text-red-500">a</code> and{" "}
            <code className="bg-gray-100 text-red-500">b</code>, which are used
            as part of the if statement to test whether{" "}
            <code className="bg-gray-100 text-red-500">b</code> is greater than{" "}
            <code className="bg-gray-100 text-red-500">a</code>. As{" "}
            <code className="bg-gray-100 text-red-500">a</code>
            is <code className="bg-gray-100 text-red-500">33</code>, and{" "}
            <code className="bg-gray-100 text-red-500">b</code> is{" "}
            <code className="bg-gray-100 text-red-500">200</code>, we know that
            200 is greater than 33, and so we print to screen that "b is greater
            than a".
          </p>
          <br />
          <p>
            The if statement evaluates a condition (an expression that results
            in <code className="bg-gray-100 text-red-500">True</code> or{" "}
            <code className="bg-gray-100 text-red-500">False</code>). If the
            condition is true, the code block inside the if statement is
            executed. If the condition is false, the code block is skipped.
          </p>
          <br />
          <h2 className="font-semibold pb-2">The Elif Keyword</h2>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">elif</code> keyword
            is Python's way of saying "if the previous conditions were not true,
            then try this condition".
          </p>
          <p>
            The <code className="bg-gray-100 text-red-500">elif</code> keyword
            allows you to check multiple expressions for{" "}
            <code className="bg-gray-100 text-red-500">True</code>
            and execute a block of code as soon as one of the conditions
            evaluates to <code className="bg-gray-100 text-red-500">True</code>.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")`}</pre>
          </code>
          <br />
          <p>
            You can have as many{" "}
            <code className="bg-gray-100 text-red-500">elif</code> statements as
            you need. Python will check each condition in order and execute the
            first one that is true.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`score = 75

if score >= 90:
  print("Grade: A")
elif score >= 80:
  print("Grade: B")
elif score >= 70:
  print("Grade: C")
elif score >= 60:
  print("Grade: D")`}</pre>
          </code>
          <br />
          <p>
            When you use <code className="bg-gray-100 text-red-500">elif</code>,
            Python evaluates the conditions from top to bottom. As soon as it
            finds a condition that is true, it executes that block and skips all
            remaining conditions.
          </p>
          <br />
          <p>
            Use <code className="bg-gray-100 text-red-500">elif</code> when you
            have multiple mutually exclusive conditions to check. This is more
            efficient than using multiple separate{" "}
            <code className="bg-gray-100 text-red-500">if</code>
            statements because Python stops checking once it finds a true
            condition.
          </p>
          <br />
          <h2 className="font-semibold pb-2">The Else Keyword</h2>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">else</code> keyword
            catches anything which isn't caught by the preceding conditions.
          </p>

          <p>
            The <code className="bg-gray-100 text-red-500">else</code> statement
            is executed when the{" "}
            <code className="bg-gray-100 text-red-500">if</code> condition (and
            any <code className="bg-gray-100 text-red-500">elif</code>{" "}
            conditions) evaluate to{" "}
            <code className="bg-gray-100 text-red-500">False</code>.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = 200
b = 33
if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")`}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">else</code> statement
            provides a default action when none of the previous conditions are
            true. Think of it as a "catch-all" for any scenario not covered by
            your <code className="bg-gray-100 text-red-500">if</code> and{" "}
            <code className="bg-gray-100 text-red-500">elif</code> statements.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Logical Operators</h2>
          <br />
          <p>
            Logical operators are used to combine conditional statements. Python
            has three logical operators:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <code className="bg-gray-100 text-red-500">and</code> - Returns
              True if both statements are true
            </li>
            <li>
              <code className="bg-gray-100 text-red-500">or</code> - Returns
              True if one of the statements is true
            </li>
            <li>
              <code className="bg-gray-100 text-red-500">not</code> - Reverses
              the result, returns False if the result is true
            </li>
          </ul>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`a = 200
b = 33
c = 500
if a > b and c > a:
  print("Both conditions are True")`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Loops</h2>
        <div className="prose max-w-none">
          <p>Python has two primitive loop commands:</p>
          <ul className="list-disc pl-6">
            <li>
              <code className="bg-gray-100 text-red-500">while</code> loops
            </li>
            <li>
              <code className="bg-gray-100 text-red-500">for</code> loops
            </li>
          </ul>
          <br />
          <h2 className="font-semibold border-b pb-2">The while loop</h2>
          <br />
          <p>
            With the <code className="bg-gray-100 text-red-500">while</code>{" "}
            loop we can execute a set of statements as long as a condition is
            true.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`i = 1
while i < 6:
  print(i)
  i += 1
  
# Output
1
2
3
4
5`}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">while</code> loop
            requires relevant variables to be ready, in this example we need to
            define an indexing variable, i, which we set to 1.
          </p>
          <br />
          <h2 className="font-semibold pb-2">The break Statement</h2>
          <br />
          <p>
            With the <code className="bg-gray-100 text-red-500">break</code>{" "}
            statement we can stop the loop even if the while condition is true:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`i = 1
while i < 6:
  print(i)
  if i == 3:
    break
  i += 1 
  
# Output
1
2
3`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">The continue Statement</h2>
          <br />
          <p>
            With the <code className="bg-gray-100 text-red-500">continue</code>{" "}
            statement we can stop the current iteration, and continue with the
            next:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i) 
  
# Output
1
2
4
5
6`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">The else Statement</h2>
          <br />
          <p>
            With the <code className="bg-gray-100 text-red-500">else</code>{" "}
            statement we can run a block of code once when the condition no
            longer is true:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")
  
# Output
1
2
3
4
5
i is no longer less than 6`}</pre>
          </code>
          <br />
          <h2 className="font-semibold border-b pb-2">The for loop</h2>
          <br />
          <p>
            A <code className="bg-gray-100 text-red-500">for</code> loop is used
            for iterating over a sequence (that is either a list, a tuple, a
            dictionary, a set, or a string).
          </p>
          <p>
            This is less like the{" "}
            <code className="bg-gray-100 text-red-500">for</code> keyword in
            other programming languages, and works more like an iterator method
            as found in other object-orientated programming languages.
          </p>
          <p>
            With the <code className="bg-gray-100 text-red-500">for</code> loop
            we can execute a set of statements, once for each item in a list,
            tuple, set etc.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  
# Output
apple
banana
cherry`}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">for</code> loop does
            not require an indexing variable to set beforehand.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Looping through a string</h2>
          <p>
            Even strings are iterable objects, they contain a sequence of
            characters:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`for x in "banana":
  print(x)
  
# Output
b
a
n
a
n
a`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">The range() Function</h2>
          <p>
            To loop through a set of code a specified number of times, we can
            use the <code className="bg-gray-100 text-red-500">range()</code>{" "}
            function.
          </p>
          <p>
            The <code className="bg-gray-100 text-red-500">range()</code>{" "}
            function returns a sequence of numbers, starting from 0 by default,
            and increments by 1 (by default), and ends at a specified number.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`for x in range(6):
  print(x)
  
# Output
0
1
2
3
4
5`}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">range()</code>{" "}
            function defaults to 0 as a starting value, however it is possible
            to specify the starting value by adding a parameter:{" "}
            <code className="bg-gray-100 text-red-500">range(2, 6)</code>, which
            means values from 2 to 6 (but not including 6):
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`for x in range(2, 6):
  print(x)
  
# Output
2
3
4
5`}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">range()</code>{" "}
            function defaults to increment the sequence by 1, however it is
            possible to specify the increment value by adding a third parameter:{" "}
            <code className="bg-gray-100 text-red-500">
              range(2, 30, <strong>3</strong>)
            </code>
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`for x in range(2, 30, 3):
  print(x)
  
# Output
2
5
8
11
14
17
20
23
26
29`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Nested Loops</h2>
          <p>A nested loop is a loop inside a loop.</p>
          <p>
            The "inner loop" will be executed one time for each iteration of the
            "outer loop":
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y) 
  
# Output
red apple
red banana
red cherry
big apple
big banana
big cherry
tasty apple
tasty banana
tasty cherry`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">The pass Statement</h2>
          <p>
            <code className="bg-gray-100 text-red-500">for</code> loops cannot
            be empty, but if you for some reason have a{" "}
            <code className="bg-gray-100 text-red-500">for</code> loop with no
            content, put in the{" "}
            <code className="bg-gray-100 text-red-500">pass</code> statement to
            avoid getting an error.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`for x in [0, 1, 2]:
  pass`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Functions</h2>
        <div className="prose max-w-none">
          <p>
            A function is a block of code which only runs when it is called.
          </p>
          <p>A function can return data as a result.</p>
          <p>A function helps avoiding code repetition.</p>
          <br />
          <h2 className="font-semibold pb-2">Creating a Function</h2>
          <p>
            In Python, a function is defined using the{" "}
            <code className="bg-gray-100 text-red-500">def</code> keyword,
            followed by a function name and parentheses:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def greet():
  print("Hello from a function") `}</pre>
          </code>
          <p>
            This creates a function named{" "}
            <code className="bg-gray-100 text-red-500">my_function</code> that
            prints "Hello!" when called.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Calling a Function</h2>
          <p>To call a function, write its name followed by parentheses:</p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def my_function():
  print("Hello from a function")

my_function()

# Output
Hello from a function`}</pre>
          </code>
          <br />
          <p>You can call the same function multiple times:</p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def my_function():
  print("Hello from a function")

my_function()
my_function()
my_function()

# Output
Hello from a function
Hello from a function
Hello from a function`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Function Names</h2>
          <p>
            Function names follow the same rules as variable names in Python:
          </p>
          <ul className="list-disc pl-6">
            <li>A function name must start with a letter or underscore</li>
            <li>
              A function name can only contain letters, numbers, and underscores
            </li>
            <li>
              Function names are case-sensitive (
              <code className="bg-gray-100 text-red-500">myFunction</code> and{" "}
              <code className="bg-gray-100 text-red-500">myfunction</code> are
              different)
            </li>
          </ul>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`calculate_sum()
_private_function()
myFunction2()`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Why use Functions?</h2>
          <p>
            Imagine you need to convert temperatures from Fahrenheit to Celsius
            several times in your program. Without functions, you would have to
            write the same calculation code repeatedly:
          </p>
          <br />
          <p>Without Functions</p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`temp1 = 77
celsius1 = (temp1 - 32) * 5 / 9
print(celsius1)

temp2 = 95
celsius2 = (temp2 - 32) * 5 / 9
print(celsius2)

temp3 = 50
celsius3 = (temp3 - 32) * 5 / 9
print(celsius3)

# Output
25.0
35.0
10.0`}</pre>
          </code>
          <br />
          <p>With functions, you write the code and reuse it:</p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def fahrenheit_to_celsius(fahrenheit):
  return (fahrenheit - 32) * 5 / 9

print(fahrenheit_to_celsius(77))
print(fahrenheit_to_celsius(95))
print(fahrenheit_to_celsius(50))

# Output
25.0
35.0
10.0
`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Return Values</h2>
          <p>
            Functions can send data back to the code that called them using the{" "}
            <code className="bg-gray-100 text-red-500">return</code> statement.
          </p>
          <p>
            When a function reaches a{" "}
            <code className="bg-gray-100 text-red-500">return</code> statement,
            it stops executing and sends the result back:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def get_greeting():
  return "Hello from a function"

message = get_greeting()
print(message)

# Output
Hello from a function`}</pre>
          </code>
          <br />
          <p>You can use the returned value directly:</p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def get_greeting():
  return "Hello from a function"

print(get_greeting()) 

# Output
Hello from a function`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Functions(Recursions)
        </h2>
        <div className="prose max-w-none">
          <p>Recursion is when a function calls itself.</p>
          <p>
            Recursion is a common mathematical and programming concept. It means
            that a function calls itself. This has the benefit of meaning that
            you can loop through data to reach a result.
          </p>
          <p>
            The developer should be very careful with recursion as it can be
            quite easy to slip into writing a function which never terminates,
            or one that uses excess amounts of memory or processor power.
            However, when written correctly recursion can be a very efficient
            and mathematically-elegant approach to programming.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def countdown(n):
  if n <= 0:
    print("Done!")
  else:
    print(n)
    countdown(n - 1)

countdown(5) 

# Output
5
4
3
2
1
Done!`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Base Case and Recursive Case</h2>
          <p>Every recursive function must have two parts:</p>
          <ul className="list-disc pl-6">
            <li>
              A <strong className="pr-1">base case</strong>- A condition that
              stops the recursion
            </li>
            <li>
              A <strong className="pr-1">recursive case</strong>- The function
              calling itself with a modified argument
            </li>
          </ul>
          <p>
            Without a base case, the function would call itself forever, causing
            a stack overflow error.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def factorial(n):
  # Base case
  if n == 0 or n == 1:
    return 1
  # Recursive case
  else:
    return n * factorial(n - 1)

print(factorial(5)) 

# Output
120`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Fibonacci Sequence</h2>
          <p>
            The Fibonacci sequence is a classic example where each number is the
            sum of the two preceding ones. The sequence starts with 0 and 1:
          </p>
          <p>0, 1, 1, 2, 3, 5, 8, 13, ...</p>
          <p>
            The sequence continues indefinitely, with each number being the sum
            of the two preceding ones.
          </p>
          <p>We can use recursion to find a specific number in the sequence:</p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def fibonacci(n):
  if n <= 1:
    return n
  else:
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(7)) 

# Output
13`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Recursion with Lists</h2>
          <p>
            Recursion can be used to process lists by handling one element at a
            time:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def sum_list(numbers):
  if len(numbers) == 0:
    return 0
  else:
    return numbers[0] + sum_list(numbers[1:])

my_list = [1, 2, 3, 4, 5]
print(sum_list(my_list))

# Output
15`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Recursion Depth Limit</h2>
          <p>
            Python has a limit on how deep recursion can go. The default limit
            is usually around 1000 recursive calls.
          </p>
          <br />
          <p>Check the recursion limit:</p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`import sys
print(sys.getrecursionlimit()) 

# Output
1000`}</pre>
          </code>
          <br />
          <p>
            If you need deeper recursion, you can increase the limit, but be
            careful as this can cause crashes:
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`import sys
sys.setrecursionlimit(2000)
print(sys.getrecursionlimit())

# Output
2000`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project: Word Frequency Counter
        </h2>
        <div className="prose max-w-none">
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def countFrequency(text):
    if not text:
        return

    strippedText = (
        text.lower().replace(",", "").replace(".", "").replace("!", "").replace("?", "")
    )

    words = strippedText.split()

    wordCount = {}

    def countWords(words, index):
        if index == len(words):
            return

        word = words[index]

        if word in wordCount:
            wordCount[word] += 1
        else:
            wordCount[word] = 1

        countWords(words, index + 1)

    countWords(words, 0)

    return wordCount


test = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

freq = countFrequency(test)

for word, count in freq.items():
    print(f"{word}: {count}")


# Output
lorem: 1
ipsum: 1
dolor: 2
sit: 1
amet: 1
consectetur: 1
adipiscing: 1
elit: 1
sed: 1
do: 1
eiusmod: 1
tempor: 1
incididunt: 1
ut: 3
labore: 1
et: 1
dolore: 2
magna: 1
aliqua: 1
enim: 1
ad: 1
minim: 1
veniam: 1
quis: 1
nostrud: 1
exercitation: 1
ullamco: 1
laboris: 1
nisi: 1
aliquip: 1
ex: 1
ea: 1
commodo: 1
consequat: 1
duis: 1
aute: 1
irure: 1
in: 3
reprehenderit: 1
voluptate: 1
velit: 1
esse: 1
cillum: 1
eu: 1
fugiat: 1
nulla: 1
pariatur: 1
excepteur: 1
sint: 1
occaecat: 1
cupidatat: 1
non: 1
proident: 1
sunt: 1
culpa: 1
qui: 1
officia: 1
deserunt: 1
mollit: 1
anim: 1
id: 1
est: 1
laborum: 1`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_9;
