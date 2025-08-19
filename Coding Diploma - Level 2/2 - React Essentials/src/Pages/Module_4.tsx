import CodeExample from "../Components/CodeExample";
import { CourseSectionComponent } from "../Components/CourseSectionComponent";

import AddAndRemoveElements from "../Components/Module_4/AddAndRemoveElements.tsx?raw";
import DynamicBotListManager from "../Components/Module_4/DynamicBotListManager.tsx?raw";

import { default as AddAndRemoveElementsExample } from "../Components/Module_4/AddAndRemoveElements";
import { default as DynamicBotListManagerExample } from "../Components/Module_4/DynamicBotListManager";

function Module_4() {
  return (
    <>
      <CourseSectionComponent
        title="Add & Remove Elements"
        children={
          <div>
            <CodeExample component={AddAndRemoveElements} />
            <AddAndRemoveElementsExample />
          </div>
        }
      />
      <CourseSectionComponent
        title="Practical Activity - Dynamic Bot List Manager with Add and Delete Functionality"
        children={
          <div>
            <CodeExample component={DynamicBotListManager} />
            <DynamicBotListManagerExample />
          </div>
        }
      />
      <CourseSectionComponent
        title="Conditional Templates"
        children={<div></div>}
      />
      <CourseSectionComponent
        title="Practical Activity - Building a Modular Job Board Application"
        children={<div></div>}
      />
      <CourseSectionComponent title="Props" children={<div></div>} />
      <CourseSectionComponent
        title="Practical Activity - Building a Modular Job Board with Props"
        children={<div></div>}
      />
      <CourseSectionComponent title="Props Children" children={<div></div>} />
      <CourseSectionComponent
        title="Practical Activity - Building a Status Board with Dynamic Components"
        children={<div></div>}
      />
    </>
  );
}

export default Module_4;
