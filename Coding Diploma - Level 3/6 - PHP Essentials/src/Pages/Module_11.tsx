import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_11_1 from "../../PHP Files/Activity 11.1 - Super Global Variables Explorer/index.php?raw";
import activity_11_2 from "../../PHP Files/Activity 11.2 - Dynamic Query Parameter Handler/index.php?raw";
import activity_11_3 from "../../PHP Files/Activity 11.3 - Server Information Dashboard/index.php?raw";

function Module_11() {
  return (
    <>
      <SectionComponent title="Activity 11.1: Super Global Variables Explorer">
        <CodeExample component={activity_11_1} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 11.2: Dynamic Query Parameter Handler">
        <CodeExample component={activity_11_2} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 11.3: Server Information Dashboard">
        <CodeExample component={activity_11_3} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_11;
