import CodeExample from "../Components/CodeExample";
import { CourseSectionComponent } from "../Components/CourseSectionComponent";

import { default as AppForm_6_1 } from "../Components/Module_6/6.1/AppForm.tsx?raw";
import { default as FormButton_6_1 } from "../Components/Module_6/6.1/FormButton.tsx?raw";

import { default as JobForm_6_1_1 } from "../Components/Module_6/6.1.1/JobForm.tsx?raw";
import { default as JobFormButton_6_2 } from "../Components/Module_6/6.2/JobFormButton.tsx?raw";
import { default as CategorySelector_6_2_1 } from "../Components/Module_6/6.2.1/CategorySelector.tsx?raw";

import { default as AppForm_6_1_Example } from "../Components/Module_6/6.1/AppForm";
import { default as JobForm_6_1_1_Example } from "../Components/Module_6/6.1.1/JobForm";
import { default as JobForm_6_2_Example } from "../Components/Module_6/6.2/JobForm";
import { default as JobForm_6_2_1_Example } from "../Components/Module_6/6.2.1/JobForm";

function Module_6() {
  return (
    <>
      {/* 6.1 */}
      <CourseSectionComponent
        title="Restrict Mode and Manage Selected Category"
        children={
          <div>
            <CodeExample component={AppForm_6_1} />
            <CodeExample component={FormButton_6_1} />

            <AppForm_6_1_Example />
          </div>
        }
      />
      {/* 6.1.1 */}
      <CourseSectionComponent
        title="Practical Activity - Implementing Multi-Select Category Functionality"
        children={
          <div>
            <p className="mb-4">
              <strong className="mr-2">Objective:</strong>
              Enhance the job management application by adding a multi-select
              category feature that allows users to select and deselect multiple
              job categories.
            </p>

            <p className="mb-4">
              <strong className="mr-2">Remember:</strong>
              Before you do this task, remember the importance of immutability
              when updating state, particularly when working with arrays. Think
              about user experience and how to provide clear visual feedback for
              user actions.
            </p>

            <strong className="mr-2">Instructions:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-2">
              <li>
                Update the existing <code>JobForm</code> component to include
                category selection buttons.
              </li>
              <li>Implement state management for selected categories.</li>
              <li>
                Create functions to handle category selection and deselection.
              </li>
              <li>Display selected categories in the UI.</li>
            </ul>

            <strong className="mr-2">Tasks:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-4">
              <li>
                <span className="font-semibold">
                  Implement the <code>handleCategoryToggle</code> function:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    If the category is already selected, remove it from the{" "}
                    <code>jobDetails.categories</code> array.
                  </li>
                  <li>
                    If the category is not selected, add it to the{" "}
                    <code>jobDetails.categories</code> array.
                  </li>
                  <li>
                    Use the spread operator to create a new array when updating
                    state.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Add visual feedback for selected categories:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Apply a different style (e.g., background color) to buttons
                    of selected categories.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Display the list of selected categories:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Add a section in the form that shows the currently selected
                    categories.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Modify the <code>handleSubmit</code> function:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Include the selected categories when logging job details.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Implement form validation:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Ensure that at least one category is selected before
                    allowing form submission.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Add a “Clear Categories” button:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Removes all selected categories.</li>
                </ul>
              </li>
            </ul>

            <strong className="mr-2">Bonus Challenges:</strong>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>
                Implement a maximum limit on the number of categories that can
                be selected (e.g., max 3).
              </li>
              <li>
                Add a search or filter functionality to the category list for
                easier selection.
              </li>
              <li>
                Create a custom hook to manage category selection logic, making
                it reusable across components.
              </li>
            </ul>

            <p className="mb-4">
              <strong className="mr-2">Summary:</strong>
              This activity will help students practice:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>Managing complex state in React</li>
              <li>Handling array updates in state</li>
              <li>Implementing toggle functionality</li>
              <li>Conditional rendering and styling</li>
              <li>Form validation in React</li>
            </ul>

            <p className="mb-4">
              Once you have achieved the desired result with your code you can
              add your code to your GitHub profile to showcase your React
              skills.
            </p>

            <CodeExample component={JobForm_6_1_1} />
            <JobForm_6_1_1_Example />
          </div>
        }
      />
      {/* 6.2 */}
      <CourseSectionComponent
        title="Add CSS to Selected Category"
        children={
          <div>
            <CodeExample component={JobFormButton_6_2} />
            <JobForm_6_2_Example />
          </div>
        }
      />
      {/* 6.2.1 */}
      <CourseSectionComponent
        title="Practical Activity - Enhance User Interface with Dynamic Category Selection"
        children={
          <div>
            <CodeExample component={CategorySelector_6_2_1} />
            <JobForm_6_2_1_Example />
          </div>
        }
      />
      {/* 6.3 */}
      <CourseSectionComponent
        title="Display Jobs in App"
        children={<div></div>}
      />
      {/* 6.3.1 */}
      <CourseSectionComponent
        title="Practical Activity - Implement a Job Management UI with React"
        children={<div></div>}
      />
      {/* 6.4 */}
      <CourseSectionComponent title="Deleting Jobs" children={<div></div>} />
      {/* 6.4.1 */}
      <CourseSectionComponent
        title="Practical Activity - Implement Delete Functionality and Form Reset in a React Job Management App"
        children={<div></div>}
      />
      {/* 6.5 */}
      <CourseSectionComponent title="Use Effect Jobs" children={<div></div>} />
      {/* 6.5.1 */}
      <CourseSectionComponent
        title="Practical Activity - Implement Local Storage Persistence with useEffect in a React Job Management App"
        children={<div></div>}
      />
      {/* 6.6 */}
      <CourseSectionComponent
        title="Tail Wind CSS with Props"
        children={<div></div>}
      />
      {/* 6.6.1 */}
      <CourseSectionComponent
        title="Practical Activity - Create a Responsive Card Component using React and Tailwind CSS"
        children={<div></div>}
      />
      {/* 6.7 */}
      <CourseSectionComponent title="Practice Project" children={<div></div>} />
      {/* 6.7.1 */}
      <CourseSectionComponent
        title="Practical Activity - Create a Header Component for an Investment Calculator App"
        children={<div></div>}
      />
    </>
  );
}

export default Module_6;
