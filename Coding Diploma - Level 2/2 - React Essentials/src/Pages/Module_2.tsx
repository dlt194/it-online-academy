import CardComponent from "../Components/CardComponent";
import CodeExample from "../Components/CodeExample";
import VariableDisplayComponent from "../Components/VariableDisplayComponent";

function Module_2() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          React Components
        </h2>
        <div className="prose max-w-none">
          <p>
            Components are the building blocks of a React application. They
            allow you to split the UI into independent, reusable pieces.
          </p>
          <br />
          <ul className="list-disc pl-5">
            <li>
              Component returns HTML using Render() and updates when you change
              the internal state
            </li>
            <li>Manages and handles events occurring on a webpage</li>
            <li>Building blocks of UI</li>
            <li>Reusable code, handling data, logic and UI</li>
            <li>
              Build UI with smaller components and combine them to create
              complex UIs
            </li>
            <li>
              Reused and nested inside each other and can pass data between them
            </li>
          </ul>
          <br />
          <p>
            Because React is component based, there is no requirement to reload
            the entire web application for state changes.
          </p>
          <br />
          <h3 className="font-bold">Why we have used Components?</h3>
          <ul className="list-disc pl-5">
            <li>Reusability: Write Once, Use Anywhere</li>
            <li>Modularity: Each component has specific functionality</li>
            <li>
              Composition: Combine simple components to create complex UIs
            </li>
            <li>
              Optimisation: Fine-tune performance by controlling re-renders with
              smaller components
            </li>
          </ul>
          <br />
          <h3 className="font-bold">Class vs Functional Component</h3>
          <ul className="list-disc pl-5">
            <li>
              Class does support state management while functional components do
              not but React provides a Hook, useState()
            </li>
          </ul>
          <ul>
            Class components have a lifecycle and access to each lifecycle
            through dedicated APIs which function components do not have and use
            hook useEffect().
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Modern App Building
        </h2>
        <div className="prose max-w-none">
          <h3 className="font-bold">What is JSX?</h3>
          <ul className="list-disc pl-5">
            <li>
              Syntax to describe what components looks like and how they work.
            </li>
            <li>Components must return a block of JSX</li>
            <li>
              Extension of JavaScript that allows to embed JS, CSS and React
              Components into HTML
            </li>
            <li>
              Each JSX element is converted into React.createElement() function
              call
            </li>
          </ul>
          <br />
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Practical Activity: Building a Reusable Card Component
        </h2>
        <div className="prose max-w-none flex">
          <CardComponent
            image="https://placehold.co/400"
            name="Dan Thomas"
            jobTitle="Software Engineer"
            bio="Passionate about building scalable applications."
            skills={["JavaScript", "React", "Node.js", "Python"]}
          />
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Creating Variables in JSX
        </h2>
        <div className="prose max-w-none">
          <CodeExample
            codeString={`function VariableDisplayComponent() {\n\n\tconst myVar1 = 'Variable in JSX';\n\tconst myVar2 = [1, 2, 3]\n\n\treturn (\n\t\t<p>{myVar1}</p>\n\t\t<p>{myVar2}</p>\n\t\t<p>{myVar3.name}</p>\n\t);\n}`}
          />
          <br />
          <VariableDisplayComponent />
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Practical Activity: Working with React JSX, Variables and Objects
        </h2>
        <div className="prose max-w-none">
          <p></p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Expression and Practice in JSX
        </h2>
        <div className="prose max-w-none">
          <p></p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Practical Activity: Dynamic Job Board with JSX Expressions
        </h2>
        <div className="prose max-w-none">
          <p></p>
        </div>
      </section>
    </>
  );
}

export default Module_2;
