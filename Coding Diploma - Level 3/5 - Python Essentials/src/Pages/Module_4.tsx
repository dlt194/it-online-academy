function Module_4() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Variable Types</h2>
        <div className="prose max-w-none">
          <p>
            In Python, variables are used to store data that can be referenced
            and manipulated during program execution. A variable is essentially
            a name that is assigned to a value.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Unlike Java and many other languages, Python variables do not
              require explicit declaration of type.
            </li>
            <li>
              The type of the variable is inferred based on the value assigned.
            </li>
          </ul>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`# Variable 'x' stores the integer value 5
x = 5

# Variable 'name' stores the string "Samantha"
name = "Samantha"  

print(x)
print(name)


# Output
5
Samantha`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          String Variables
        </h2>
        <div className="prose max-w-none">
          <p>
            String variables can be declared either by using single or double
            quotes.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`x = "John"
# is the same as
x = 'John'`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Multi Words Variable Names
        </h2>
        <div className="prose max-w-none">
          <ul className="list-disc pl-6">
            <li>
              Variable names with more than one word can be difficult to read.
            </li>

            <li>
              There are several techniques you can use to make them more
              readable
            </li>

            <li>
              Hence this is how we handle them by using:
              <ul className="list-disc pl-6">
                <li>Camel Case</li> <li>Pascal Case</li> <li>Snake Case</li>
              </ul>
            </li>
          </ul>
          <br />
          <p>Camel Case</p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`numberOfDonuts = 34

favePhrase = "Hello World"`}</pre>
          </code>
          <br />
          <p>Pascal Case</p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`NumberOfDonuts = 34

FavePhrase = "Hello World"`}</pre>
          </code>
          <br />
          <p>Snake Case</p>
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`number_of_donuts = 34

fave_phrase = "Hello World"`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Data Types</h2>
        <div className="prose max-w-none">
          <p>
            In programming, data type is an important concept. Variables can
            store data of different types, and different types can do different
            things. Python has the following data types built-in by default, in
            these categories:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">Text: </strong>
              <code className="bg-gray-100 text-red-500">str</code>
            </li>
            <li>
              <strong className="mr-1">Numeric Types:</strong>
              <code className="bg-gray-100 text-red-500">
                int, float, complex
              </code>
            </li>
            <li>
              <strong className="mr-1">Sequence Types:</strong>
              <code className="bg-gray-100 text-red-500">
                list, tuple, range
              </code>
            </li>
            <li>
              <strong className="mr-1">Mapping Type:</strong>
              <code className="bg-gray-100 text-red-500">dict</code>
            </li>
            <li>
              <strong className="mr-1">Set Types:</strong>
              <code className="bg-gray-100 text-red-500">set, frozenset</code>
            </li>
            <li>
              <strong className="mr-1">Boolean Type:</strong>
              <code className="bg-gray-100 text-red-500">bool</code>
            </li>
            <li>
              <strong className="mr-1">Binary Types:</strong>
              <code className="bg-gray-100 text-red-500">
                bytes, bytearray, memoryview
              </code>
            </li>
            <li>
              <strong className="mr-1">None Type:</strong>
              <code className="bg-gray-100 text-red-500">NoneType</code>
            </li>
          </ul>
          <br />
          <p>
            If you want to specify the data type, you can use the following
            constructor functions:
          </p>
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`x = "Hello World" 	str 	
x = 20 	int 	
x = 20.5 	float 	
x = 1j 	complex 	
x = ["apple", "banana", "cherry"] 	list 	
x = ("apple", "banana", "cherry") 	tuple 	
x = range(6) 	range 	
x = {"name" : "John", "age" : 36} 	dict 	
x = {"apple", "banana", "cherry"} 	set 	
x = frozenset({"apple", "banana", "cherry"}) 	frozenset 	
x = True 	bool 	
x = b"Hello" 	bytes 	
x = bytearray(5) 	bytearray 	
x = memoryview(bytes(5)) 	memoryview 	
x = None 	NoneType`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Type Conversion</h2>
        <div className="prose max-w-none">
          <ul className="list-disc pl-6">
            <li>
              You can convert from one type to another with the int(), float()
              and complex() methods
            </li>

            <li>
              NOTE: You can't convert complex numbers into another number type.
            </li>
          </ul>
          <br />
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`x = 1 # int
y = 2.8 # float
z = 1j # complex

#convert from int to float:
a = float(x)

#convert from float to int:
b = int(y)

#convert from int to complex:
c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))

# Output
1.0
2
(1+0j)
<class 'float'>
<class 'int'>
<class 'complex'> `}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Random Number</h2>
        <div className="prose max-w-none">
          <p>
            Python does not have a random() function to make a random number,
            but Python has a built-in module called random that can be used to
            make random numbers
          </p>

          <p>
            Import the random module, and display a random number between 1 and
            9
          </p>
          <br />
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`import random
print(random.randrange(1,10))`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project: Random Number Generator
        </h2>
        <div className="prose max-w-none">
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`import random

random_number = random.randrange(1, 100)

print("Random Number: ", random_number)
print("Random Number Type: " + type(random_number))


floatNumber = float(random_number)
ComplexNumber = complex(random_number)

print("Random Number as Float:", floatNumber)
print("Random Number Type after Conversion to Float:", type(floatNumber))

print("Random Number as Complex:", ComplexNumber)
print("Random Number Type after Conversion to Complex:", type(ComplexNumber))`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_4;
