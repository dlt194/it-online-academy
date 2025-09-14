import { CourseSectionComponent } from "../Components/CourseSectionComponent";
import CodeExample from "../Components/CodeExample";

import { default as InputAndBinding_7_1 } from "../Components/Module_7/7.1/InputAndBinding.tsx?raw";
import { default as InputAndBinding_7_1_Example } from "../Components/Module_7/7.1/InputAndBinding";

import { default as UserInput_7_1_1 } from "../Components/Module_7/7.1.1/UserInput.tsx?raw";
import { default as InVestMe_7_1_1 } from "../Components/Module_7/7.1.1/InVestMe";

function Module_7() {
  return (
    <>
      {/* 7.1 */}
      <CourseSectionComponent
        title="Input & Binding"
        children={
          <div>
            <CodeExample component={InputAndBinding_7_1} />
            <InputAndBinding_7_1_Example />
          </div>
        }
      />
      {/* 7.1.1 */}
      <CourseSectionComponent
        title="Practical Activity: Create a User Input Component for an Investment Calculator App"
        children={
          <div>
            <CodeExample component={UserInput_7_1_1} />
            <InVestMe_7_1_1 />
          </div>
        }
      />
      {/* 7.2 */}
      <CourseSectionComponent
        title="Handling Output Results"
        children={<div></div>}
      />
      {/* 7.2.1 */}
      <CourseSectionComponent
        title="Practical Activity: Create an Output Component for the Investment Calculator App"
        children={<div></div>}
      />
      {/* 7.3 */}
      <CourseSectionComponent
        title="Displaying Data in Table"
        children={<div></div>}
      />
      {/* 7.3.1 */}
      <CourseSectionComponent
        title="Practical Activity: Implementing an Investment Calculator Table"
        children={<div></div>}
      />
      {/* 7.4 */}
      <CourseSectionComponent
        title="Generating Report"
        children={<div></div>}
      />
      {/* 7.4.1 */}
      <CourseSectionComponent
        title="Practical Activity: Enhancing the Investment Calculator"
        children={<div></div>}
      />
      {/* 7.5 */}
      <CourseSectionComponent
        title="Debugging (Browser & Breakpoint)"
        children={<div></div>}
      />
      {/* 7.5.1 */}
      <CourseSectionComponent
        title="Practical Activity: Debugging in React"
        children={<div></div>}
      />
    </>
  );
}

export default Module_7;
