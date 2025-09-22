import { CourseSectionComponent } from "../Components/CourseSectionComponent";
import CodeExample from "../Components/CodeExample";

import { default as PasswordGenerator_8_1 } from "../Components/Module_8/8.1/PasswordGenerator.tsx?raw";
import { default as PasswordGenerator_8_1_Example } from "../Components/Module_8/8.1/PasswordGenerator";

import { default as PasswordGenerator_8_1_1 } from "../Components/Module_8/8.1.1/PasswordGenerator.tsx?raw";
import { default as PasswordGenerator_8_1_1_Example } from "../Components/Module_8/8.1.1/PasswordGenerator";

import { default as PasswordGenerator_8_2 } from "../Components/Module_8/8.2/PasswordGenerator.tsx?raw";
import { default as PasswordGenerator_8_2_Example } from "../Components/Module_8/8.2/PasswordGenerator";

import { default as PasswordGenerator_8_2_1 } from "../Components/Module_8/8.2.1/PasswordGenerator.tsx?raw";
import { default as PasswordGenerator_8_2_1_Example } from "../Components/Module_8/8.2.1/PasswordGenerator";

import { default as PasswordGenerator_8_3 } from "../Components/Module_8/8.3/PasswordGenerator.tsx?raw";
import { default as PasswordGenerator_8_3_Example } from "../Components/Module_8/8.3/PasswordGenerator";

import { default as PasswordGenerator_8_3_1 } from "../Components/Module_8/8.3.1/PasswordGenerator.tsx?raw";
import { default as PasswordGenerator_8_3_1_Example } from "../Components/Module_8/8.3.1/PasswordGenerator";

import { default as PasswordGenerator_8_4 } from "../Components/Module_8/8.4/PasswordGenerator.tsx?raw";
import { default as PasswordGenerator_8_4_Example } from "../Components/Module_8/8.4/PasswordGenerator";

import { default as usePasswordGenerator_8_4_1 } from "../Components/Module_8/8.4.1/hooks/usePasswordGenerator.tsx?raw";
import { default as PasswordGenerator_8_4_1 } from "../Components/Module_8/8.4.1/PasswordGenerator.tsx?raw";
import { default as PasswordGenerator_8_4_1_Example } from "../Components/Module_8/8.4.1/PasswordGenerator";

function Module_8() {
  return (
    <>
      {/* 8.1 */}
      <CourseSectionComponent
        title="Password Generator"
        children={
          <div>
            <CodeExample component={PasswordGenerator_8_1} />
            <PasswordGenerator_8_1_Example />
          </div>
        }
      />
      {/* 8.1.1 */}
      <CourseSectionComponent
        title="Practical Activity: Setting Up a Pasword Generator"
        children={
          <div>
            <CodeExample component={PasswordGenerator_8_1_1} />
            <PasswordGenerator_8_1_1_Example />
          </div>
        }
      />
      {/* 8.2 */}
      <CourseSectionComponent
        title="Use Callback"
        children={
          <div>
            <CodeExample component={PasswordGenerator_8_2} />
            <PasswordGenerator_8_2_Example />
          </div>
        }
      />
      {/* 8.2.1 */}
      <CourseSectionComponent
        title="Practical Activity: Implementing Password Generator Functionality"
        children={
          <div>
            <CodeExample component={PasswordGenerator_8_2_1} />
            <PasswordGenerator_8_2_1_Example />
          </div>
        }
      />
      {/* 8.3 */}
      <CourseSectionComponent
        title="Fields and Checkboxes"
        children={
          <div>
            <CodeExample component={PasswordGenerator_8_3} />
            <PasswordGenerator_8_3_Example />
          </div>
        }
      />
      {/* 8.3.1 */}
      <CourseSectionComponent
        title="Practical Activity: Implementing Password Generator UI and Functionality"
        children={
          <div>
            <CodeExample component={PasswordGenerator_8_3_1} />
            <PasswordGenerator_8_3_1_Example />
          </div>
        }
      />
      {/* 8.4 */}
      <CourseSectionComponent
        title="Adding Copy and UseDef"
        children={
          <div>
            <CodeExample component={PasswordGenerator_8_4} />
            <PasswordGenerator_8_4_Example />
          </div>
        }
      />
      {/* 8.4.1*/}
      <CourseSectionComponent
        title="Practical Activity: Advanced Password Generator Implementation"
        children={
          <div>
            <CodeExample component={usePasswordGenerator_8_4_1} />
            <CodeExample component={PasswordGenerator_8_4_1} />
            <PasswordGenerator_8_4_1_Example />
          </div>
        }
      />
    </>
  );
}

export default Module_8;
