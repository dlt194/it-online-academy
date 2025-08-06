import CodeExample from "./Components/CodeExample";

function App() {
  return (
    <>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">React Essentials</h1>
          <nav className="space-x-1">
            <a
              href="index.html"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 1
            </a>
            <a
              href="module_2.html"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 2
            </a>
            <a
              href="module_3.html"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 3
            </a>
            <a
              href="module_4.html"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 4
            </a>
            <a
              href="module_5.html"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 5
            </a>
            <a
              href="module_6.html"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 6
            </a>
            <a
              href="module_7.html"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 7
            </a>
            <a
              href="module_8.html"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 8
            </a>
            <a
              href="module_9.html"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 9
            </a>
            <a
              href="module_10.html"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 10
            </a>
          </nav>
        </div>
      </header>

      {/* <!-- Main Content --> */}
      <main className="flex-1 container mx-auto p-6 grid grid-cols-1 gap-6">
        {/* <!-- Course Content --> */}

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
                <CodeExample
                  codeString={`function Video({ video  }) {\n\treturn (\n\t\t<div>\n\t\t\t<Thumbnail video={video} />\n\t\t\t<a href={video.url}>\n\t\t\t\t<h3>{video.title}</h3>\n\t\t\t\t<p>{video.description}</p>\n\t\t\t</a>\n\t\t\t<LikeButton video={video} />\n\t\t</div>\n\t);\n}}`}
                />
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
              Create React App is a command line tool that helps you set up a
              new React project with a good default configuration. It handles
              the build setup, development server, and other configurations so
              you can focus on writing your application.
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
          <div className="prose max-w-none"></div>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2025 Dan Thomas. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
