import { Routes, Route, Link } from "react-router-dom";

import Module1 from "./Pages/Module_1";
import Module2 from "./Pages/Module_2";
import Module3 from "./Pages/Module_3";
import Module4 from "./Pages/Module_4";
import Module5 from "./Pages/Module_5";
import Module6 from "./Pages/Module_6";
import Module7 from "./Pages/Module_7";
import Module8 from "./Pages/Module_8";
import Module9 from "./Pages/Module_9";
import Module10 from "./Pages/Module_10";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">React Essentials</h1>
          <nav className="space-x-1">
            <Link to="module_1" className="px-3 py-1 hover:bg-blue-500 rounded">
              Module 1
            </Link>
            <Link to="module_2" className="px-3 py-1 hover:bg-blue-500 rounded">
              Module 2
            </Link>
            <Link to="module_3" className="px-3 py-1 hover:bg-blue-500 rounded">
              Module 3
            </Link>

            <Link to="module_4" className="px-3 py-1 hover:bg-blue-500 rounded">
              Module 4
            </Link>
            <Link to="module_5" className="px-3 py-1 hover:bg-blue-500 rounded">
              Module 5
            </Link>
            <Link to="module_6" className="px-3 py-1 hover:bg-blue-500 rounded">
              Module 6
            </Link>

            <Link to="module_7" className="px-3 py-1 hover:bg-blue-500 rounded">
              Module 7
            </Link>

            <Link to="module_8" className="px-3 py-1 hover:bg-blue-500 rounded">
              Module 8
            </Link>
            <Link to="module_9" className="px-3 py-1 hover:bg-blue-500 rounded">
              Module 9
            </Link>
            <Link
              to="module_10"
              className="px-3 py-1 hover:bg-blue-500 rounded"
            >
              Module 10
            </Link>
          </nav>
        </div>
      </header>

      {/* <!-- Main Content --> */}
      <main className="flex-1 container mx-auto p-6 grid grid-cols-1 gap-6">
        {/* <!-- Course Content --> */}
        <Routes>
          <Route path="/" element={<Module1 />} />
          <Route path="module_1" element={<Module1 />} />
          <Route path="module_2" element={<Module2 />} />
          <Route path="module_3" element={<Module3 />} />
          <Route path="module_4" element={<Module4 />} />
          <Route path="module_5" element={<Module5 />} />
          <Route path="module_6" element={<Module6 />} />
          <Route path="module_7" element={<Module7 />} />
          <Route path="module_8" element={<Module8 />} />
          <Route path="module_9" element={<Module9 />} />
          <Route path="module_10" element={<Module10 />} />
        </Routes>
      </main>

      {/* <!-- Footer --> */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2025 Dan Thomas. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
