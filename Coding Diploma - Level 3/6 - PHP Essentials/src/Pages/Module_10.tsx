import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_10_1 from "../../PHP Files/Activity 10.1 - Array Manipulation Practice/index.php?raw";
import activity_10_2 from "../../PHP Files/Activity 10.2 - Multidimensional Array Challenge/index.php?raw";
import activity_10_3 from "../../PHP Files/Activity 10.3 - Array Function Exploration/index.php?raw";

function Module_10() {
  return (
    <>
      <SectionComponent title="Activity 10.1: Array Manipulation Practice">
        <CodeExample component={activity_10_1} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 10.2: Multidimensional Array Challenge">
        <CodeExample component={activity_10_2} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 10.3: Array Function Exploration">
        <CodeExample component={activity_10_3} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_10;
