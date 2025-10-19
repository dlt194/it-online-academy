function Module_3() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Legal & Illegal Variable Names
        </h2>
        <div className="prose max-w-none">
          <h2 className="font-semibold pb-2">Legal Variable Names</h2>
          <code>
            <pre className="bg-gray-100 p-4 rounded">
              {`myvar = "Dan
my_var = "Dan"
_my_var = "Dan"
myVar = "Dan"
MYVAR = "Dan"
myvar2 = "Dan"`}
            </pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Illegal Variable Names</h2>
          <code>
            <pre className="bg-gray-100 p-4 rounded">
              {`2myvar = "Dan
my-var = "Dan
my var = "Dan`}
            </pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Python Variables - Assign Multiple Variables
        </h2>
        <div className="prose max-w-none">
          <p>Python allows you to assign multilpe variables in one line</p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">
              {`x, y, z = "Orange", "Banana", "Cherry"`}
            </pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Unpack a Collection
        </h2>
        <div className="prose max-w-none">
          <p>
            If you have a collection of values in a list, Tuple etc. Python
            allows you to extract the variables. This is called Unpacking
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">
              {`fruits = ["Orange", "Banana", "Cherry"]
x, y, z = fruits`}
            </pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Output Variables
        </h2>
        <div className="prose max-w-none">
          <ul className="list-disc pl-6">
            <li>
              The Python print() function is often used to output variables.
              <br />
              <code>
                <pre className="bg-gray-100 p-4 rounded">{`x = "Python is awesome"
print(x)`}</pre>
              </code>
            </li>
            <li>
              In the print() function, you output multiple variables, separated
              by a comma:
              <br />
              <code>
                <pre className="bg-gray-100 p-4 rounded">{`x = "Python"
y = "is"
z = "awesome"

print(x, y, z)`}</pre>
              </code>
            </li>
            <li>
              You can also use the + operator to output multiple variable:
              <br />
              <code>
                <pre className="bg-gray-100 p-4 rounded"></pre>
              </code>
            </li>

            <li>
              Notice the space character after "Python" and "IS", without them
              the result would be "Pythonisawesome".
              <br />
              <code>
                <pre className="bg-gray-100 p-4 rounded">{`x = "Python"
y = "is "
z = "awesome"

print(x, y, z)`}</pre>
              </code>
            </li>

            <li>
              For numbers, the + character works as a mathematical operator:
              <br />
              <code>
                <pre className="bg-gray-100 p-4 rounded">{`x = 5
y = 10
print(x + 7)`}</pre>
              </code>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Casting</h2>
        <div className="prose max-w-none">
          <p>
            If you want to specify the data type of a variable, this can be done
            with casting.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`x = str(3) # x iwll be '3'
y = int(3) # y will be 3
z = float(3) # z will be 3.0`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Global Variables
        </h2>
        <div className="prose max-w-none">
          <p>
            In Python a Global Variable is any variable defined outside of a
            function i.e. in the Global Scope.
          </p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`x = "Dan" # Global Scope

def myfunction():

  print("My Name is " + x)


myfunction() # Outputs "My Name is Dan" 
`}</pre>
          </code>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`x = "Dan" # Global Scope

def myfunction():
  x = "Bob"

  print("My Name is " + x)


myfunction() # Outputs "My Name is Bob" 
`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project: Personal Information Card
        </h2>
        <div className="prose max-w-none">
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`name = "Dan Thomas"
age = 31
city = "Colchester"
hobby = "Golf"


print("##################################")
print("       Personal Information       ")
print("##################################")
print("Name:  ", name)
print("Age:   ", age)
print("City:  ", city)
print("Hobby: ", hobby)
print("##################################")
`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_3;
