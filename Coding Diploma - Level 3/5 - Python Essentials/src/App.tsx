import { Routes, Route, NavLink } from "react-router-dom";

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
import Final_Project from "./Pages/Final_Project";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-3 md:mb-0">Python Essentials</h1>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-2">
            {[
              { to: "module_1", label: "Module 1" },
              { to: "module_2", label: "Module 2" },
              { to: "module_3", label: "Module 3" },
              { to: "module_4", label: "Module 4" },
              { to: "module_5", label: "Module 5" },
              { to: "module_6", label: "Module 6" },
              { to: "module_7", label: "Module 7" },
              { to: "module_8", label: "Module 8" },
              { to: "module_9", label: "Module 9" },
              { to: "module_10", label: "Module 10" },
              { to: "final_project", label: "Final Project" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1 rounded transition-colors ${
                    isActive
                      ? "bg-blue-800 font-semibold text-white"
                      : "hover:bg-blue-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
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
          <Route path="final_project" element={<Final_Project />} />
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
