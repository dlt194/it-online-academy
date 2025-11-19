import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import project_1 from "../../PHP Files/Projects/Simple Blog System/index.php?raw";
import project_2 from "../../PHP Files/Projects/E-commerce Website for a Small Business/index.php?raw";
import project_3 from "../../PHP Files/Projects/Task Management System/index.php?raw";
import project_4 from "../../PHP Files/Projects/Secure File Sharing Platform/index.php?raw";
import project_5 from "../../PHP Files/Projects/Social Media Analytics Dashboard/index.php?raw";

function Projects() {
  return (
    <>
      <SectionComponent title="Simple Blog System">
        <CodeExample component={project_1} />
      </SectionComponent>
      <SectionComponent title="E-commerce Website for a Small Business">
        <CodeExample component={project_2} />
      </SectionComponent>
      <SectionComponent title="Task Management System">
        <CodeExample component={project_3} />
      </SectionComponent>
      <SectionComponent title="Secure File Sharing Platform">
        <CodeExample component={project_4} />
      </SectionComponent>
      <SectionComponent title="Social Media Analytics Dashboard">
        <CodeExample component={project_5} />
      </SectionComponent>
    </>
  );
}

export default Projects;
