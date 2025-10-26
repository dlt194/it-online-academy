function Module_10() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Python Lamdas</h2>
        <div className="prose max-w-none">
          <p>A lambda function is a small anonymous function.</p>
          <p>
            A lambda function can take any number of arguments, but can only
            have one expression.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`x = lambda a : a + 10
print(x(5))

# Output
15`}</pre>
          </code>
          <br />
          <p>Lambda functions can take any number of arguments:</p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`x = lambda a, b : a * b
print(x(5, 6)) 

# Output
30`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Why Use Lambda Functions?</h2>
          <p>
            The power of lambda is better shown when you use them as an
            anonymous function inside another function.
          </p>
          <p>
            Say you have a function definition that takes one argument, and that
            argument will be multiplied with an unknown number:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def myfunc(n):
  return lambda a : a * n `}</pre>
          </code>
          <br />
          <p>
            Use that function definition to make a function that always doubles
            the number you send in:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)

print(mydoubler(11))

# Output
22`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Lambda with Built-in Functions</h2>
          <p>
            Lambda functions are commonly used with built-in functions like
            <code className="bg-gray-100 text-red-500">map()</code>,{" "}
            <code className="bg-gray-100 text-red-500">filter()</code>, and{" "}
            <code className="bg-gray-100 text-red-500">sorted()</code>.
          </p>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">map()</code> function
            applies a function to every item in an iterable:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)

# Output
[2, 4, 6, 8, 10]`}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">filter()</code>{" "}
            function creates a list of items for which a function returns{" "}
            <code className="bg-gray-100 text-red-500">True</code>:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`numbers = [1, 2, 3, 4, 5, 6, 7, 8]
odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))
print(odd_numbers)

# Output
[1, 3, 5, 7]`}</pre>
          </code>
          <br />
          <p>
            The <code className="bg-gray-100 text-red-500">sorted()</code>{" "}
            function can use a lambda as a key for custom sorting:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`students = [("Emil", 25), ("Tobias", 22), ("Linus", 28)]
sorted_students = sorted(students, key=lambda x: x[1])
print(sorted_students)

# Output
[('Tobias', 22), ('Emil', 25), ('Linus', 28)]`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Python Arrays</h2>
        <div className="prose max-w-none">
          <p>
            Python does not have built-in support for Arrays, but Python Lists
            can be used instead.
          </p>
          <p>
            Arrays are used to store multiple values in one single variable:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`cars = ["Ford", "Volvo", "BMW"] `}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">What is an Array?</h2>
          <p>
            An array is a special variable, which can hold more than one value
            at a time.
          </p>
          <p>
            If you have a list of items (a list of car names, for example),
            storing the cars in single variables could look like this:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`car1 = "Ford"
car2 = "Volvo"
car3 = "BMW"`}</pre>
          </code>
          <br />
          <p>
            However, what if you want to loop through the cars and find a
            specific one? And what if you had not 3 cars, but 300?
          </p>
          <p>
            An array can hold many values under a single name, and you can
            access the values by referring to an index number.
          </p>
          <br />
          <h2 className="font-semibold pb-2">
            Access the Elements of an Array
          </h2>
          <p>You refer to an array element by referring to the index number.</p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`x = cars[0] `}</pre>
          </code>
          <br />
          <p>Modify the value of the first array item:</p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`cars[0] = "Toyota"`}</pre>
          </code>
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
                  append()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Adds an element at the end of the list
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  clear()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Removes all the elements from the list
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  copy()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a copy of the list
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  count()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns the number of elements with the specified value
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  extend()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Add the elements of a list (or any iterable), to the end of
                  the current list
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  index()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns the index of the first element with the specified
                  value
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  insert()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Adds an element at the specified position
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  pop()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Removes the element at the specified position
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  remove()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Removes the first item with the specified value
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  reverse()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Reverses the order of the list
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  sort()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Sorts the list
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Object Oriented Programming
        </h2>
        <div className="prose max-w-none">
          <p>
            Python is an object-oriented language, allowing you to structure
            your code using classes and objects for better organization and
            reusability.
          </p>
          <p>Advantages of OOP</p>
          <ul className="list-disc pl-6">
            <li>Provides a clear structure to programs</li>
            <li>Makes code easier to maintain, reuse, and debug</li>
            <li>Helps keep your code DRY (Don't Repeat Yourself)</li>
            <li>Allows you to build reusable applications with less code</li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">What are Classes and Objects?</h2>
          <p>
            Classes and objects are the two core concepts in object-oriented
            programming.
          </p>
          <p>
            A class defines what an object should look like, and an object is
            created based on that class. For example:
          </p>
          <br />
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Class
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Objects
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  Fruit
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Apple, Banana, Mango
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  Car
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Volvo, Audi, Toyota
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Scope</h2>
        <div className="prose max-w-none">
          <p>
            A variable is only available from inside the region it is created.
            This is called scope.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Local Scope</h2>
          <p>
            A variable created inside a function belongs to the local scope of
            that function, and can only be used inside that function.
          </p>
          <br />
          <code>
            <p>
              A variable created inside a function is available inside that
              function:
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`def myfunc():
  x = 300
  print(x)

myfunc() `}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Function Inside Function</h2>
          <p>
            As explained in the example above, the variable{" "}
            <code className="bg-gray-100 text-red-500">x</code> is not available
            outside the function, but it is available for any function inside
            the function:
          </p>
          <code>
            <p>
              The local variable can be accessed from a function within the
              function:
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`def myfunc():
  x = 300
  def myinnerfunc():
    print(x)
  myinnerfunc()

myfunc()`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Global Scope</h2>
          <p>
            A variable created in the main body of the Python code is a global
            variable and belongs to the global scope.
          </p>
          <p>
            Global variables are available from within any scope, global and
            local.
          </p>
          <br />
          <code>
            <p>
              A variable created outside of a function is global and can be used
              by anyone:
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`x = 300

def myfunc():
  print(x)

myfunc()

print(x)`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Naming Variables</h2>
          <p>
            If you operate with the same variable name inside and outside of a
            function, Python will treat them as two separate variables, one
            available in the global scope (outside the function) and one
            available in the local scope (inside the function):
          </p>
          <br />
          <code>
            <p>
              The function will print the local{" "}
              <code className="bg-gray-100 text-red-500">x</code>, and then the
              code will print the global x:
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`x = 300

def myfunc():
  x = 200
  print(x)

myfunc()

print(x)`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Global Keyword</h2>
          <p>
            If you need to create a global variable, but are stuck in the local
            scope, you can use the{" "}
            <code className="bg-gray-100 text-red-500">global</code> keyword.
          </p>
          <br />
          <code>
            <p>
              If you use the{" "}
              <code className="bg-gray-100 text-red-500">global</code> keyword,
              the variable belongs to the global scope:
              <code className="bg-gray-100 text-red-500">x</code>, and then the
              code will print the global x:
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`def myfunc():
  global x
  x = 300

myfunc()

print(x) `}</pre>
          </code>
          <br />
          <p>
            Also, use the global keyword if you want to make a change to a
            global variable inside a function.
          </p>
          <br />
          <code>
            <p>
              If you use the{" "}
              <code className="bg-gray-100 text-red-500">global</code> keyword,
              the variable belongs to the global scope:
              <code className="bg-gray-100 text-red-500">x</code>, and then the
              code will print the global x:
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`x = 300

def myfunc():
  global x
  x = 200

myfunc()

print(x) `}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Nonlocal Keyword</h2>
          <p>
            The <code className="bg-gray-100 text-red-500">nonlocal</code>{" "}
            keyword is used to work with variables inside nested functions.
          </p>
          <p>
            The <code className="bg-gray-100 text-red-500">nonlocal</code>{" "}
            keyword makes the variable belong to the outer function.
          </p>
          <br />
          <code>
            <p>
              If you use the{" "}
              <code className="bg-gray-100 text-red-500">nonlocal</code>{" "}
              keyword, the variable will belong to the outer function:
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`def myfunc1():
  x = "Jane"
  def myfunc2():
    nonlocal x
    x = "hello"
  myfunc2()
  return x

print(myfunc1()) `}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">The LEGB Rule</h2>
          <p>
            Python follows the LEGB rule when looking up variable names, and
            searches for them in this order:
          </p>
          <ul className="list-decimal pl-6">
            <li>
              <strong>L</strong>ocal- Inside the current function
            </li>
            <li>
              <strong>E</strong>nclosing- Inside enclosing functions (from inner
              to outer)
            </li>
            <li>
              <strong>G</strong>lobal - At the top level of the module
            </li>
            <li>
              <strong>B</strong>uilt-in - In Python's built-in namespace
            </li>
          </ul>
          <code>
            <p>Understanding the LEGB rule:</p>
            <pre className="bg-gray-100 p-4 rounded">{`x = "global"

def outer():
  x = "enclosing"
  def inner():
    x = "local"
    print("Inner:", x)
  inner()
  print("Outer:", x)

outer()
print("Global:", x)`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Python Modules</h2>
        <div className="prose max-w-none">
          <p>Consider a module to be the same as a code library.</p>
          <p>
            A file containing a set of functions you want to include in your
            application.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Create a Module</h2>
          <p>
            To create a module just save the code you want in a file with the
            file extension <code className="bg-gray-100 text-red-500">.py</code>
            :
          </p>
          <br />
          <code>
            <p>
              Save this code in a file named{" "}
              <code className="bg-gray-100 text-red-500">mymodule.py</code>
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`def greeting(name):
  print("Hello, " + name) `}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Use a Module</h2>
          <p>
            Now we can use the module we just created, by using the{" "}
            <code className="bg-gray-100 text-red-500">import</code> statement:
          </p>
          <br />
          <code>
            <p>
              Import the module named mymodule, and call the greeting function:
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`import mymodule

mymodule.greeting("Jonathan")`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Variables in Modules</h2>
          <p>
            The module can contain functions, as already described, but also
            variables of all types (arrays, dictionaries, objects etc):
          </p>
          <br />
          <code>
            <p>
              Save this code in a file named{" "}
              <code className="bg-gray-100 text-red-500">mymodule.py</code>
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
} `}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Naming a Module</h2>
          <p>
            You can name the module file whatever you like, but it must have the
            file extension <code className="bg-gray-100 text-red-500">.py</code>
          </p>
          <p>
            You can create an alias when you import a module, by using the{" "}
            <code className="bg-gray-100 text-red-500">as</code> keyword:
          </p>
          <br />
          <code>
            <p>
              Create an alias for{" "}
              <code className="bg-gray-100 text-red-500">mymodule</code> called{" "}
              <code className="bg-gray-100 text-red-500">mx</code>:
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`import mymodule as mx

a = mx.person1["age"]
print(a)`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Import From Module</h2>
          <p>
            You can choose to import only parts from a module, by using the{" "}
            <code className="bg-gray-100 text-red-500">from</code> keyword.
          </p>
          <br />
          <code>
            <p>
              The module named{" "}
              <code className="bg-gray-100 text-red-500">mymodule</code> has one
              function and one dictionary:
            </p>
            <pre className="bg-gray-100 p-4 rounded">{`def greeting(name):
  print("Hello, " + name)

person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}`}</pre>
          </code>
          <br />
          <code>
            <p>Import only the person1 dictionary from the module:</p>
            <pre className="bg-gray-100 p-4 rounded">{`from mymodule import person1

print (person1["age"])`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project: Library Inventory Management
        </h2>
        <div className="prose max-w-none">
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available


class Library:
    def __init__(self):
        self.books = []

        def addBook(self, book):
            self.books.append(book)

        def searchAuthor(self, query):
            q = query.lower()
            return [b for b in self.books if q in b.author.lower()]

        def searchTitle(self, query):
            q = query.lower()
            return [b for b in self.books if q in b.title.lower()]

        def updateAvailability(self, title, available):
            update_book = lambda book: (
                setattr(book, "available", available)
                if book.title.lower() == title.lower()
                else None
            )
            list(map(update_book, self.books))


books = [
    Book("Nineteen Eighty-Four", "George Orwell"),
    Book("War and Peace", "Leo Tolstoy"),
    Book("Odyssey", "Homer"),
    Book("Resurrection", "Leo Tolstoy"),
]

library = Library()

for book in books:
    library.add_book(book)


print("Books with Title 'Odyssey':")
for book in library.search_by_title("Odyssey"):
    print(f"- {book.title} by {book.author}")

print("Books by Author 'Leo Tolstoy':")
for book in library.search_by_author("Leo Tolstoy"):
    print(f"- {book.title} by {book.author}")

library.update_availability("War and Peace", False)

print("\nAvailability of 'War and Peace':")
for book in library.search_by_title("War and Peace"):
    print(f"- {book.title} is {'available' if book.available else 'not available'}")
`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project: Currency Converter
        </h2>
        <div className="prose max-w-none">
          <code>
            <p>exchange_rates.py</p>
            <pre className="bg-gray-100 p-4 rounded">{`BASE = "GBP"

RATES = {
    "USD": 1.32,
    "EUR": 1.1445,
    "GBP": 1.00,
    "JPY": 203.3237,
    "CHF": 1.05,
}
`}</pre>
          </code>
          <br />
          <code>
            <p>currency_converter.py</p>
            <pre className="bg-gray-100 p-4 rounded">{`import exchange_rates as fx


def convert(amount, from_currency, to_currency, rates=fx.RATES):
    from_currency = from_currency.upper()
    to_currency = to_currency.upper()

    if from_currency not in rates or to_currency not in rates:
        raise KeyError(
            f"Unknown currency code: {from_currency if from_currency not in rates else to_currency}"
        )

    value_in_gbp = amount / rates[from_currency]
    return f"{value_in_gbp:,.2f} {to_currency.upper()}"


def main():

    usd_to_eur = convert(100, "USD", "EUR")
    eur_to_gbp = convert(50, "EUR", "GBP")
    chf_to_jpy = convert(25, "CHF", "JPY")

    print("\n--- Conversions ---")
    print(f"{(100, 'USD')} -> {(usd_to_eur)}")
    print(f"{(50, 'EUR')}  -> {(eur_to_gbp)}")
    print(f"{(25, 'CHF')}  -> {(chf_to_jpy)}")


if __name__ == "__main__":
    main()
`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_10;
