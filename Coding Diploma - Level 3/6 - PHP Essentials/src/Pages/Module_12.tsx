import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_12_1 from "../../PHP Files/Activity 12.1 - Regular Expression Matcher/index.php?raw";
import activity_12_2 from "../../PHP Files/Activity 12.2 - Email Validator/index.php?raw";
import activity_12_3 from "../../PHP Files/Activity 12.3 - Log File Analyzer/index.php?raw";

function Module_12() {
  return (
    <>
      <SectionComponent title="Activity 12.1: Regular Expression Matcher">
        <CodeExample component={activity_12_1} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 12.2: Email Validator">
        <CodeExample component={activity_12_2} language="php" />
      </SectionComponent>
      <SectionComponent title="Activity 12.3: Log File Analyzer">
        <CodeExample component={activity_12_3} language="php" />
      </SectionComponent>
    </>
  );
}

export default Module_12;
