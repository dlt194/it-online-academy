import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

function Module_2() {
  return (
    <>
      <SectionComponent title="What is a Variable?">
        <h2 className="font-semibold pb-2">In programming, a variable</h2>
        <ul className="list-disc pl-6">
          <li>
            is a container for storing information - we can store data inside a
            variable and access or change it in the program{" "}
            <ul className="list-disc pl-4">
              <li>this helps us define dynamic behaviour in our programmes</li>
              <li>this helps with memory effciency in the program</li>
              <li>
                this helps with readability and classification, helps to
                describe the data that is held and for programmers to understand
                it
              </li>
              <li>
                helps with and allows programs to work with dynamic user
                supplied input (E.g. the same program can process different data
                provided by a user during different program runs.)
              </li>
            </ul>
          </li>
          <li>
            can be different types of data - we can define what kind of data it
            is and what can be done to it
          </li>
          <li>
            can have a scope - we can define where they can be accessed from
            (local or global)
          </li>
          <li>
            can have a lifespan - we can define how long the variable stays in
            memory
          </li>
        </ul>
        <p>
          Without variables, programming would not be as flexible, efficient and
          lack dynamic data manipulation which is fundamental to solving complex
          problems.
        </p>
      </SectionComponent>
      <SectionComponent title="How to Create a PHP Variable?">
        <p>
          In PHP, a variable starts with the{" "}
          <code className="bg-gray-100 text-red-500">$</code> sign, followed by
          the name of the variable:
        </p>
        <CodeExample
          component={`$x = 5;
$y = "John";`}
          language="php"
        />
        <p>
          In the example above, the variable{" "}
          <code className="bg-gray-100 text-red-500">$x</code> will hold the
          value <code className="bg-gray-100 text-red-500">5</code>, and the
          variable <code className="bg-gray-100 text-red-500">$y</code> will
          hold the value{" "}
          <code className="bg-gray-100 text-red-500">"John"</code>.
        </p>
        <br />
        <p>
          A variable can have a short name (like{" "}
          <code className="bg-gray-100 text-red-500">$x</code> and{" "}
          <code className="bg-gray-100 text-red-500">$y</code>) or a more
          descriptive name (
          <code className="bg-gray-100 text-red-500">$age</code>,{" "}
          <code className="bg-gray-100 text-red-500">$carname</code>,{" "}
          <code className="bg-gray-100 text-red-500">$total_volume</code>).
        </p>
        <br />
        <p>Rules for PHP variables:</p>
        <ul className="list-disc pl-6">
          <li>
            A variable starts with the{" "}
            <code className="bg-gray-100 text-red-500">$</code> sign, followed
            by the name of the variable
          </li>
          <li>
            A variable name must start with a letter or the underscore character
          </li>
          <li>A variable name cannot start with a number</li>
          <li>
            A variable name can only contain alpha-numeric characters and
            underscores (A-z, 0-9, and _ )
          </li>
          <li>
            Variable names are case-sensitive (
            <code className="bg-gray-100 text-red-500">$age</code> and{" "}
            <code className="bg-gray-100 text-red-500">$AGE</code> are two
            different variables)
          </li>
        </ul>
      </SectionComponent>
    </>
  );
}

export default Module_2;
