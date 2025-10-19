function Module_2() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Getting Started & Syntax
        </h2>
        <div className="prose max-w-none">
          <ul className="list-disc pl-6">
            <li>
              Python syntax defines the rules that are used to create Python
              statements while writing a Python program.
            </li>

            <li>
              Indentation refers to the spaces at the beginning of a code line.
            </li>
            <li>
              Where in other programming languages the indentation in code is
              for readability only, the indentation in Python is very important
              as it is used to indicate block of code.
            </li>

            <li>
              When we say "a block of code", we refer to where the code begins
              to where the code ends. If you skip indentation in python, you are
              likely to get an error.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Indentation Example
        </h2>
        <div className="prose max-w-none"></div>
        <ul className="list-disc pl-6">
          <li>
            Given the following two variables, X and Y and assign them with 34
            and 45 respectively.
          </li>
          <li>
            You will notice that within the If statement, indentation has been
            applied. Not applying the indentation will throw an error.
          </li>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">
              {`x=34
y=45

if x>y:
  print("x is greater than y")
else:
  print("x is less than y")
              `}
            </pre>
          </code>
        </ul>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Comments</h2>
        <div className="prose max-w-none">
          <ul className="list-disc pl-6">
            <li>Comments can be used to explain Python code.</li>

            <li>Comments can be used to make the code more readable.</li>

            <li>
              Comments can be used to prevent executing when testing code.
            </li>
          </ul>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">
              {`# This is a comment
print("Hello, World!")
              `}
            </pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Variables</h2>
        <div className="prose max-w-none">
          <ul className="list-disc pl-6">
            <li>Variables are containers for storing data values.</li>

            <li>
              A variable is created the moment you first assign a value to it.
            </li>

            <li>
              Variables do not need to be declared with any particular type, and
              can even change type after they have been set.
            </li>
          </ul>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">
              {`x - 5
y = "Dan"
              `}
            </pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project: Product Price Check
        </h2>
        <div className="prose max-w-none"></div>
        <code>
          <pre className="bg-gray-100 p-4 rounded">
            {`mclaren = 280000
bmw = 45000

if mclaren < bmw:
  print("McLaren is cheaper than BMW.")
elif bmw < mclaren:
  print("BMW is cheaper than McLaren.")
else:
  print("BMW & McLaren are the same price.")
              `}
          </pre>
        </code>
      </section>
    </>
  );
}

export default Module_2;
