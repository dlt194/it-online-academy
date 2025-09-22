import { useRef } from "react";
import CodeExample from "../Components/CodeExample";
import { CourseSectionComponent } from "../Components/CourseSectionComponent";

import AddAndRemoveElements from "../Components/Module_4/AddAndRemoveElements.tsx?raw";
import DynamicBotListManager from "../Components/Module_4/DynamicBotListManager.tsx?raw";
import ConditionalTemplates from "../Components/Module_4/ConditionalTemplates.tsx?raw";
import PropsComponent from "../Components/Module_4/PropsComponent.tsx?raw";

import { default as AddAndRemoveElementsExample } from "../Components/Module_4/AddAndRemoveElements";
import { default as DynamicBotListManagerExample } from "../Components/Module_4/DynamicBotListManager";
import { default as ConditionalTemplatesExample } from "../Components/Module_4/ConditionalTemplates";
import { default as PropsExample } from "../Components/Module_4/PropsComponent";

import App from "../../../Activities/4.2.1/src/App.jsx?raw";
import HeaderComponent from "../../../Activities/4.2.1/src/components/HeaderComponent.jsx?raw";
import ShowJobsComponent from "../../../Activities/4.2.1/src/components/ShowJobsComponent.jsx?raw";
import AddJobComponent from "../../../Activities/4.2.1/src/components/AddJobComponent.jsx?raw";
import JobListComponent from "../../../Activities/4.2.1/src/components/JobListComponent.jsx?raw";
import JobItemComponent from "../../../Activities/4.2.1/src/components/JobItemComponent.jsx?raw";
import FooterComponent from "../../../Activities/4.2.1/src/components/FooterComponent.jsx?raw";

import StatusBoard from "../Components/Module_4/Activities/4.4.1/StatusBoard.tsx";

function Module_4() {
  const PracticalActivity_4_2_1 = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const PropsChildrenExample = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return <div>{children}</div>;
  };

  return (
    <>
      <CourseSectionComponent
        title="Add & Remove Elements"
        children={
          <div>
            <CodeExample component={AddAndRemoveElements} />
            <AddAndRemoveElementsExample />
          </div>
        }
      />
      <CourseSectionComponent
        title="Practical Activity - Dynamic Bot List Manager with Add and Delete Functionality"
        children={
          <div>
            <CodeExample component={DynamicBotListManager} />
            <DynamicBotListManagerExample />
          </div>
        }
      />
      <CourseSectionComponent
        title="Conditional Templates"
        children={
          <div>
            <CodeExample component={ConditionalTemplates} />
            <ConditionalTemplatesExample />
          </div>
        }
      />
      <div ref={PracticalActivity_4_2_1}>
        <CourseSectionComponent
          title="Practical Activity - Building a Modular Job Board Application"
          children={
            <div>
              <CodeExample component={App} />
              <CodeExample component={HeaderComponent} />
              <CodeExample component={ShowJobsComponent} />
              <CodeExample component={AddJobComponent} />
              <CodeExample component={JobListComponent} />
              <CodeExample component={JobItemComponent} />
              <CodeExample component={FooterComponent} />
            </div>
          }
        />
      </div>
      <CourseSectionComponent
        title="Props"
        children={
          <div>
            <p>
              In React, props (short for properties) are a way of passing data
              from parent to child components. They allow you to customize the
              behavior and appearance of child components based on the data
              provided by the parent.
            </p>
            <br />
            <p>
              Props are read-only, meaning that a child component cannot modify
              the props it receives from its parent. This helps maintain a
              unidirectional data flow in React applications.
            </p>
            <br />
            <CodeExample component={PropsComponent} />
            <br />
            <PropsExample name="John Doe" age={30} />
            <br />
            <p>
              In this example, we are passing the name "John Doe" and age 30 as
              props to the PropsExample component.
            </p>
          </div>
        }
      />
      <CourseSectionComponent
        title="Practical Activity - Building a Modular Job Board with Props"
        children={
          <div>
            <button
              className="underline text-blue-500"
              onClick={() => scrollToSection(PracticalActivity_4_2_1)}
            >
              <p>
                Please See - Practical Activity - Building a Modular Job Board
                Application
              </p>
            </button>
          </div>
        }
      />
      <CourseSectionComponent
        title="Props Children"
        children={
          <div>
            <p>
              Props can also be used to pass children elements to a component.
            </p>
            <p>
              In this example, we are passing a child element to the
              PropsChildrenExample component.
            </p>
            <br />
            <CodeExample
              component={`const PropsChildrenExample = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return <div>{children}</div>;
  };

<PropsChildrenExample>
  <p>This is a child element!</p>
</PropsChildrenExample>
            `}
            />

            <PropsChildrenExample>
              <p>This is a child element!</p>
            </PropsChildrenExample>
            <br />
            <p>
              Passing information to grandchild components is tedious, error
              prone and less flexible. This is where prop children comes in, it
              helps us transfer data from parent to child components without
              having to pass props through every level of the component tree.
            </p>
          </div>
        }
      />
      <CourseSectionComponent
        title="Practical Activity - Building a Status Board with Dynamic Components"
        children={
          <div>
            <p className="mb-4">
              <strong className="mr-2">Objective:</strong>
              Create a React application that displays a status board with
              different ticket statuses (completed, in progress, failed) using
              reusable components and props.children.
            </p>
            <p className="mb-4">
              <strong className="mr-2">Remember:</strong>
              Before you carry out this activity it is important to remember the
              importance of props.children for creating flexible, reusable
              components, and how it can help in avoiding prop drilling in more
              complex applications.
            </p>
            <strong className="mr-2">Instructions:</strong>
            <ul className="list-decimal ml-4 mb-4">
              <li>
                Create the following components:
                <ul className="list-disc ml-6">
                  <li>StatusBoard (main component)</li>
                  <li>TicketInfo (reuseable component for each status)</li>
                </ul>
              </li>
              <li>
                Use props and props.children to pass data between components.
              </li>
              <li>Implement conditional styling based on the ticket status.</li>
              <li>Implement conditional styling based on the ticket status.</li>
            </ul>
            <strong className="mr-2">Tasks:</strong>
            <ul className="list-decimal ml-4 mb-4">
              <li>
                In the StatusBoard component:
                <ul className="list-disc ml-6">
                  <li>Import necessary images.</li>
                  <li>
                    Create three TicketInfo components, one for each status
                    (completed, in progress, failed).
                  </li>
                  <li>
                    Pass appropriate props (result and image) to each TicketInfo
                    component.
                  </li>
                  <li>
                    Use props.children to pass the status text to each
                    TicketInfo component.
                  </li>
                </ul>
              </li>
              <li>
                In the TicketInfo component:
                <ul className="list-disc ml-6">
                  <li>
                    Implement the component to display the image and the
                    children (status text) passed from StatusBoard.
                  </li>
                  <li>Use the result prop to apply conditional styling.</li>
                </ul>
              </li>
              <li>
                Add CSS to style the components:
                <ul className="list-disc ml-6">
                  <li>
                    Create a flex layout for the StatusBoard to display
                    TicketInfo components side by side.
                  </li>
                  <li>
                    Style each TicketInfo component with a border, padding, and
                    different background colors based on the status.
                  </li>
                </ul>
              </li>
              <li>
                (Optional) Add a count for each status and pass it as a prop to
                TicketInfo.
              </li>
            </ul>
            <strong className="mr-2 mb-4">Bonus Challenges:</strong>
            <ul className="list-decimal ml-4 mb-4">
              <li>
                Make the TicketInfo component more interactive by adding a click
                event that shows more details about the tickets in that status.
              </li>
              <li>
                Implement a feature to add new tickets and update the counts
                dynamically.
              </li>
              <li>
                Create an animation for when the status of a ticket changes.
              </li>
            </ul>

            <StatusBoard />
          </div>
        }
      />
    </>
  );
}

export default Module_4;
