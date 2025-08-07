import CodeExample from "../Components/CodeExample";
import { CourseSectionComponent } from "../Components/CourseSectionComponent";
import { StyledButtonComponent } from "../Components/StyledButtonComponent";

function Module_3() {
  const jobCount: number = 25;

  const countJob = () => {
    return jobCount === 0
      ? "No Jobs to Schedule Today"
      : `Jobs Running Today from Bot: ${jobCount}`;
  };

  return (
    <>
      <CourseSectionComponent
        title="Style Attributes"
        children={
          <div>
            <CodeExample
              codeString={`function App() {\n\tconst jobCount = 25;\n\tconst hideProperty = true;\n\tconst countJob = () => {\n\t\treturn jobCount === 0 ? "No Jobs to Schedule Today"\n\t\t: "Jobs Running Today from Bot: ${jobCount}"\n\t};\n\treturn (\n\t\t<button\n\t\t\tclassName="border m-2 p-2 bg-blue-600 text-white rounded-sm shadow shadow-gray-100 hover:bg-blue-700"\n\t\t\tdisabled={hideProperty}\n\t\t\tvalue="Create a Job"\n\t\t>\n\t\t\tCreate a Job\n\t\t</button>\n\t)\n}`}
            />
            <h1>Jobs: {countJob()}</h1>
            <StyledButtonComponent
              heading="Styled Heading"
              button="Create a Job"
            />
          </div>
        }
      />
      <CourseSectionComponent
        title="Practical Activity - Styling React Components with Inline Styles"
        children={<p></p>}
      />
      <CourseSectionComponent title="Events and States" children={<p></p>} />
      <CourseSectionComponent
        title="Practical Activity - Interactive Job Counter with Events"
        children={<p></p>}
      />
      <CourseSectionComponent title="Use State" children={<p></p>} />
      <CourseSectionComponent
        title="Practical Activity - Job Counter with useState"
        children={<p></p>}
      />
      <CourseSectionComponent
        title="Working with State and Handling User Values"
        children={<p></p>}
      />
      <CourseSectionComponent
        title="Dynamic Input Form with useState"
        children={<p></p>}
      />
      <CourseSectionComponent
        title="Practice Exercise Using useState"
        children={<p></p>}
      />
      <CourseSectionComponent
        title="Practical Activity - Dynamic Bot List Manager"
        children={<p></p>}
      />
    </>
  );
}

export default Module_3;
