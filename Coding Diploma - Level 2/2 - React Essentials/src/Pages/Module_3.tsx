import CodeExample from "../Components/CodeExample";
import { CourseSectionComponent } from "../Components/CourseSectionComponent";
import { StyledButtonComponent } from "../Components/StyledButtonComponent";

import CreateJobComponent from "../Components/Module_3/CreateJobComponent.tsx?raw";
import StyleAttributeCompontent from "../Components/Module_3/StyleAttributeCompontent.tsx?raw";
import InteractiveJobCounterWithEvents from "../Components/Module_3/InteractiveJobCounterWithEvents.tsx?raw";
import InteractiveJobCounterWithUseState from "../Components/Module_3/InteractiveJobCounterWithUseState.tsx?raw";
import WorkingWithStateAndHandlingUserValues from "../Components/Module_3/WorkingWithStateAndHandlingUserValues.tsx?raw";
import DynamicFormComponent from "../Components/Module_3/DynamicFormComponent.tsx?raw";

import { default as StyleAttributeCompontentExample } from "../Components/Module_3/StyleAttributeCompontent";
import { default as InteractiveJobCounterWithEventsExample } from "../Components/Module_3/InteractiveJobCounterWithEvents";
import { default as InteractiveJobCounterWithUseStateExample } from "../Components/Module_3/InteractiveJobCounterWithUseState";
import { default as WorkingWithStateAndHandlingUserValuesExample } from "../Components/Module_3/WorkingWithStateAndHandlingUserValues";
import { default as DynamicFormComponentExample } from "../Components/Module_3/DynamicFormComponent";

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
            <br />
            <p>
              In this example, we see the message logged to the console but the
              value for the jobCount does not update on the screen. This is
              because we are updating a local variable which does not trigger a
              re-render because the update does not notify React that a change
              has happened. To fix this issue, we should use the hook useState
              which would trigger an update and display the change to the end
              user.
            </p>
          </div>
        }
      />
      <CourseSectionComponent
        title="Use State"
        children={
          <div>
            <h3 className="font-bold">useState</h3>
            <ul className="list-disc pl-5">
              <li>Add state to a functional component</li>
              <li>
                It returns an array with two values: the current state and the
                function to update the state
              </li>
              <li>
                The Hook takes an initial state as an argument and returns an
                updated state value whenever the setter function is called.
              </li>
            </ul>
            <br />
            <CodeExample
              component="const [state, setState] = useState(initalValue)"
              showLineNumbers={false}
            />
            <br />
            <h3 className="font-bold">What can useState hold?</h3>
            <p>
              useState can store any type of value, whereas the state in a class
              component is limited to being an object
            </p>
          </div>
        }
      />
      <CourseSectionComponent
        title="Practical Activity - Job Counter with useState"
        children={
          <div>
            <CodeExample component={InteractiveJobCounterWithUseState} />
            <br />
            <InteractiveJobCounterWithUseStateExample />
          </div>
        }
      />
      <CourseSectionComponent
        title="Working with State and Handling User Values"
        children={
          <div>
            <CodeExample component={WorkingWithStateAndHandlingUserValues} />
            <br />
            <WorkingWithStateAndHandlingUserValuesExample />
          </div>
        }
      />
      <CourseSectionComponent
        title="Dynamic Input Form with useState"
        children={
          <div>
            <CodeExample component={DynamicFormComponent} />
            <br />
            <DynamicFormComponentExample />
          </div>
        }
      />
      <CourseSectionComponent
        title="Practice Exercise Using useState"
        children={<div></div>}
      />
      <CourseSectionComponent
        title="Practical Activity - Dynamic Bot List Manager"
        children={<div></div>}
      />
    </>
  );
}

export default Module_3;
