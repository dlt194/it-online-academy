import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import activity_12_1 from "../../PHP Files/Activity 12.1 - Regular Expression Matcher/index.php?raw";
import activity_12_2 from "../../PHP Files/Activity 12.2 - Email Validator/index.php?raw";
import activity_12_3 from "../../PHP Files/Activity 12.3 - Log File Analyzer/index.php?raw";

function Module_12() {
  return (
    <>
      <SectionComponent title="Introduction to PHP Regular Expressions">
        <CodeExample component={``} language="php" />
      </SectionComponent>
      <SectionComponent title="PHP Regular Expression Functions">
        <CodeExample component={``} language="php" />
      </SectionComponent>
      <SectionComponent title="How to use PHP preg_match()">
        <CodeExample component={``} language="php" />
      </SectionComponent>
      <SectionComponent title="How to use PHP preg_match_all()">
        <CodeExample component={``} language="php" />
      </SectionComponent>
      <SectionComponent title="How to use PHP preg_replace()">
        <CodeExample component={``} language="php" />
      </SectionComponent>
      <SectionComponent title="PHP Regular Expression Modifiers">
        <CodeExample component={``} language="php" />
      </SectionComponent>
      <SectionComponent title="PHP Regular Expression Patterns">
        <CodeExample component={``} language="php" />
      </SectionComponent>
      <SectionComponent title="PHP Regular Expression Metacharacters">
        <CodeExample component={``} language="php" />
      </SectionComponent>
      <SectionComponent title="PHP Regular Expression Quantifiers">
        <CodeExample component={``} language="php" />
      </SectionComponent>
      <SectionComponent title="Regular Expression Grouping Part 1">
        <CodeExample component={``} language="php" />
      </SectionComponent>
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
