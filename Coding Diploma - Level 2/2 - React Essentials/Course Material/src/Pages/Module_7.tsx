import { CourseSectionComponent } from "../Components/CourseSectionComponent";
import CodeExample from "../Components/CodeExample";

import { default as InputAndBinding_7_1 } from "../Components/Module_7/7.1/InputAndBinding.tsx?raw";
import { default as InputAndBinding_7_1_Example } from "../Components/Module_7/7.1/InputAndBinding";

import { default as UserInput_7_1_1 } from "../Components/Module_7/7.1.1/UserInput.tsx?raw";
import { default as InVestMe_7_1_1 } from "../Components/Module_7/7.1.1/InVestMe";

import { default as OutputResults_7_2 } from "../Components/Module_7/7.2/OutputResults.tsx?raw";
import { default as InputAndBinding_7_2_Example } from "../Components/Module_7/7.2/InputAndBinding";

import { default as Output_7_2_1 } from "../Components/Module_7/7.2.1/Output.tsx?raw";
import { default as InVestMe_7_2_1 } from "../Components/Module_7/7.2.1/InVestMe";

import { default as DataTable_7_3 } from "../Components/Module_7/7.3/DataTable.tsx?raw";
import { default as DataTable_7_3_Example } from "../Components/Module_7/7.3/DataTable";

import { default as Output_7_3_1 } from "../Components/Module_7/7.3.1/Output.tsx?raw";
import { default as InVestMe_7_3_1 } from "../Components/Module_7/7.3.1/InVestMe";

import { default as Report_7_4 } from "../Components/Module_7/7.4/Report.tsx?raw";
import { default as Report_7_4_Example } from "../Components/Module_7/7.4/Report";

import { default as Report_7_4_1 } from "../Components/Module_7/7.4.1/Report.tsx?raw";
import { default as InVestMe_7_4_1 } from "../Components/Module_7/7.4.1/InVestMe";

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
        children={
          <div>
            <CodeExample component={OutputResults_7_2} />
            <InputAndBinding_7_2_Example />
          </div>
        }
      />
      {/* 7.2.1 */}
      <CourseSectionComponent
        title="Practical Activity: Create an Output Component for the Investment Calculator App"
        children={
          <div>
            <CodeExample component={Output_7_2_1} />
            <InVestMe_7_2_1 />
          </div>
        }
      />
      {/* 7.3 */}
      <CourseSectionComponent
        title="Displaying Data in Table"
        children={
          <div>
            <CodeExample component={DataTable_7_3} />
            <DataTable_7_3_Example />
          </div>
        }
      />
      {/* 7.3.1 */}
      <CourseSectionComponent
        title="Practical Activity: Implementing an Investment Calculator Table"
        children={
          <div>
            <CodeExample component={Output_7_3_1} />
            <InVestMe_7_3_1 />
          </div>
        }
      />
      {/* 7.4 */}
      <CourseSectionComponent
        title="Generating Reports"
        children={
          <div>
            <CodeExample component={Report_7_4} />
            <Report_7_4_Example />
          </div>
        }
      />
      {/* 7.4.1 */}
      <CourseSectionComponent
        title="Practical Activity: Enhancing the Investment Calculator"
        children={
          <div>
            <CodeExample component={Report_7_4_1} />
            <InVestMe_7_4_1 />
          </div>
        }
      />
    </>
  );
}

export default Module_7;
