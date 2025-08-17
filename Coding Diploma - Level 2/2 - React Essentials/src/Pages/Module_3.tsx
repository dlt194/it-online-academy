import CodeExample from "../Components/CodeExample";
import { CourseSectionComponent } from "../Components/CourseSectionComponent";
import { StyledButtonComponent } from "../Components/StyledButtonComponent";

import CreateJobComponent from "../Components/Module_3/CreateJobComponent.tsx?raw";
import StyleAttributeCompontent from "../Components/Module_3/StyleAttributeCompontent.tsx?raw";
import InteractiveJobCounterWithEvents from "../Components/Module_3/InteractiveJobCounterWithEvents.tsx?raw";

import { default as StyleAttributeCompontentExample } from "../Components/Module_3/StyleAttributeCompontent";
import { default as InteractiveJobCounterWithEventsExample } from "../Components/Module_3/InteractiveJobCounterWithEvents";

function Module_3() {
  return (
    <>
      <CourseSectionComponent
        title="Style Attributes"
        children={
          <div>
            <CodeExample component={StyleAttributeCompontent} />
            <StyleAttributeCompontentExample />
          </div>
        }
      />
      <CourseSectionComponent
        title="Practical Activity - Styling React Components with Inline Styles"
        children={
          <StyledButtonComponent heading="Styled Heading" button="Click Me" />
        }
      />
      <CourseSectionComponent
        title="Events and States"
        children={
          <div>
            <h3 className="font-bold">Events in ReactJS</h3>
            <p>
              Actions that occur due to user interactions, like clicking a
              button, hovering over an element, typing in an input field.
            </p>
            <br />
            <h3 className="font-bold">Common Event Handling Patterns</h3>
            <ul className="list-disc pl-5">
              <li>Handling Click Events</li>
              <li>Handling Form Submission</li>
              <li>Handling Events in Keyboards</li>
            </ul>
            <br />
            <h3 className="font-bold">Why do we use Events?</h3>
            <ul className="list-disc pl-5">
              <li>Interactivity</li>
              <li>State Management</li>
              <li>Immediate Responses</li>
              <li>Form Handling</li>
            </ul>
            <br />

            <CodeExample component={CreateJobComponent} />
            <br />
            <h3 className="font-bold">How to use State in Real Time?</h3>
            <p>
              A single variable ina component is considered a State Variable.
              These are some ways to use State during Development:
            </p>
            <ul className="list-disc pl-5">
              <li>useState</li>
              <li>useReducer</li>
              <li>Context API</li>
            </ul>
            <br />
            <h3 className="font-bold">Why do we use States?</h3>

            <ul className="list-disc pl-5">
              <li>Dynamic UI Updates</li>
              <li>Event Handling</li>
              <li>Component Isolation</li>
              <li>
                Efficient Rendering: Updating the Component triggers React to
                render
              </li>
            </ul>
            <br />
          </div>
        }
      />

      <CourseSectionComponent
        title="Practical Activity - Interactive Job Counter with Events"
        children={
          <div>
            <CodeExample component={InteractiveJobCounterWithEvents} />
            <br />
            <InteractiveJobCounterWithEventsExample />
          </div>
        }
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
