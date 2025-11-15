import CodeExample from "../Components/CodeExample";

import recipe_manager from "../../Python Files/recipe_manager/recipe_manager.py?raw";
import recipe_manager_utils from "../../Python Files/recipe_manager/utilities/utils.py?raw";

function Final_Project() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project Title: Recipe Manager
        </h2>
        <div className="prose max-w-none">
          <CodeExample component={recipe_manager} language="python" />
          <br />
          <CodeExample component={recipe_manager_utils} language="python" />
        </div>
      </section>
    </>
  );
}

export default Final_Project;
