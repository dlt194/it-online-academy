import CodeExample from "../Components/CodeExample";
import Video from "../Components/Module_1/VideoComponent.tsx?raw";

function Module_2() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          What is React and Why Use It?
        </h2>
        <div className="prose max-w-none">
          <p>
            React JS is an open source JavaScript library for building user
            interfaces or UI Components.
          </p>
          <br />
          <p>
            We can use React JS not just for web interfaces but also native
            mobile applications using React Native.
          </p>
          <p>
            React JS is maintained by Facebook and a community of individual
            developers and companies. It is a popular choice for building
            single-page applications (SPAs) where you need a fast, interactive
            user experience.
          </p>
          <br />

          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              <CodeExample component={Video} />
            </pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Create React App
        </h2>
        <div className="prose max-w-none">
          <p>
            Create React App is a command line tool that helps you set up a new
            React project with a good default configuration. It handles the
            build setup, development server, and other configurations so you can
            focus on writing your application.
          </p>
          <br />
          <p>To create a new React app, you can use the following command:</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              npx create-react-app my-app cd my-app npm start
            </pre>
          </code>
          <p>
            This will create a new directory called `my-app` with all the
            necessary files and dependencies to get started with React.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Frameworks</h2>
        <div className="prose max-w-none">
          <p>
            React is often compared to other JavaScript frameworks like Angular
            and Vue.js. Each framework has its own strengths and weaknesses, and
            the choice between them depends on the specific needs of your
            project.
          </p>
        </div>
      </section>
    </>
  );
}

export default Module_2;
