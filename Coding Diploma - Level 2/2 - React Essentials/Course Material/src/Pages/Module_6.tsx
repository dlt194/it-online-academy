import CodeExample from "../Components/CodeExample";
import { CourseSectionComponent } from "../Components/CourseSectionComponent";

import { default as AppForm_6_1 } from "../Components/Module_6/6.1/AppForm.tsx?raw";
import { default as FormButton_6_1 } from "../Components/Module_6/6.1/FormButton.tsx?raw";

import { default as JobForm_6_1_1 } from "../Components/Module_6/6.1.1/JobForm.tsx?raw";
import { default as JobFormButton_6_2 } from "../Components/Module_6/6.2/JobFormButton.tsx?raw";
import { default as CategorySelector_6_2_1 } from "../Components/Module_6/6.2.1/CategorySelector.tsx?raw";
import { default as JobForm_6_3 } from "../Components/Module_6/6.3/JobForm.tsx?raw";
import { default as JobManager_6_3_1 } from "../Components/Module_6/6.3.1/JobManager.tsx?raw";
import { default as DeleteJob_6_4 } from "../Components/Module_6/6.4/DeleteJob.tsx?raw";

import { default as JobManager_6_4_1 } from "../Components/Module_6/6.4.1/JobManager.tsx?raw";
import { default as JobCard_6_4_1 } from "../Components/Module_6/6.4.1/JobCard.tsx?raw";
import { default as JobColumn_6_4_1 } from "../Components/Module_6/6.4.1/JobColumn.tsx?raw";
import { default as DeleteJob_6_4_1 } from "../Components/Module_6/6.4.1/DeleteJob.tsx?raw";
import { default as JobManager_6_5_1 } from "../Components/Module_6/6.5.1/JobManager.tsx?raw";
import { default as Button_6_6 } from "../Components/Module_6/6.6/Button.tsx?raw";
import { default as ButtonExample_6_6 } from "../Components/Module_6/6.6/ButtonExample.tsx?raw";
import { default as ResponsiveCardComponent } from "../Components/Module_6/6.6.1/ResponsiveCardComponent.tsx?raw";
import { default as Header_6_7_1 } from "../Components/Module_6/6.7.1/Header.tsx?raw";

import { default as AppForm_6_1_Example } from "../Components/Module_6/6.1/AppForm";
import { default as JobForm_6_1_1_Example } from "../Components/Module_6/6.1.1/JobForm";
import { default as JobForm_6_2_Example } from "../Components/Module_6/6.2/JobForm";
import { default as JobForm_6_2_1_Example } from "../Components/Module_6/6.2.1/JobForm";
import { default as ScheduledTaskForms_6_3_Example } from "../Components/Module_6/6.3/ScheduledTaskForms";
import { default as ScheduledTaskForms_6_3_1_Example } from "../Components/Module_6/6.3.1/ScheduledTaskForms";
import { default as ScheduledTaskForms_6_4_Example } from "../Components/Module_6/6.4/ScheduledTaskForms";
import { default as ScheduledTaskForms_6_4_1_Example } from "../Components/Module_6/6.4.1/ScheduledTaskForms";
import { default as ScheduledTaskForms_6_5_1_Example } from "../Components/Module_6/6.5.1/ScheduledTaskForms";
import { default as Button_6_6_Example } from "../Components/Module_6/6.6/ButtonExample";
import { default as ResponsiveCardComponentExample } from "../Components/Module_6/6.6.1/ResponsiveCardComponent";
import { default as InVestMeExample_6_7 } from "../Components/Module_6/6.7/InVestMe";
import { default as InVestMeExample_6_7_1 } from "../Components/Module_6/6.7.1/InVestMe";

function Module_6() {
  const cardData = [
    {
      title: "React Development",
      description:
        "Learn how to build web applications with React and Tailwind CSS.",
      buttonText: "Learn More",
      imageUrl:
        "https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png",
    },
    {
      title: "Tailwind CSS Mastery",
      description: "Master the art of rapid UI development with Tailwind CSS.",
      buttonText: "Explore",
      imageUrl:
        "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
    },
  ];

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
        children={
          <div>
            <CodeExample component={JobForm_6_3} />
            <ScheduledTaskForms_6_3_Example />
          </div>
        }
      />
      {/* 6.3.1 */}
      <CourseSectionComponent
        title="Practical Activity - Implement a Job Management UI with React"
        children={
          <div>
            <p className="mb-4">
              <strong className="mr-2">Objective:</strong>
              Create a React application that allows users to add jobs with
              different statuses and categories, and display them in organised
              columns.
            </p>

            <p className="mb-4">
              <strong className="mr-2">Remember:</strong>
              The importance of using state to manage dynamic data in React. How
              to use props to pass data between components. The concept of
              filtering and mapping arrays in React. The use of conditional
              rendering to display content based on state.
            </p>

            <strong className="mr-2">Instructions:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-2">
              <li>
                Create a new React component called <code>JobManager</code>.
              </li>
              <li>
                Inside the component, create a state variable called{" "}
                <code>jobs</code> using the <code>useState</code> hook to store
                an array of job objects.
              </li>
              <li>
                Create three columns to represent different job statuses:{" "}
                <code>Need to Complete</code>, <code>In Progress</code>, and{" "}
                <code>Completed</code>.
              </li>
              <li>
                Implement a form that allows users to add new jobs with the
                following fields:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Job activity (text input)</li>
                  <li>
                    Category (multiple selection, e.g., <code>Read Emails</code>
                    , <code>Send Emails</code>, <code>Web Parsing</code>)
                  </li>
                  <li>
                    Status (dropdown: <code>Need to Complete</code>,{" "}
                    <code>In Progress</code>, <code>Completed</code>)
                  </li>
                </ul>
              </li>
              <li>
                Create a function to add new jobs to the <code>jobs</code> state
                when the form is submitted.
              </li>
              <li>
                Implement a <code>JobColumn</code> component that receives props
                for <code>title</code>, <code>status</code>, and{" "}
                <code>jobs</code>. This component should filter and display jobs
                based on their status.
              </li>
              <li>
                Create a <code>JobCard</code> component to display individual
                job details, including the activity and categories.
              </li>
              <li>
                Use the <code>map</code> function to render <code>JobCard</code>{" "}
                components within each <code>JobColumn</code>.
              </li>
              <li>
                Implement a basic styling to make the UI visually appealing and
                easy to understand.
              </li>
            </ul>

            <strong className="mr-2">Bonus Challenges:</strong>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Add the ability to edit existing jobs.</li>
              <li>
                Implement drag-and-drop functionality to move jobs between
                columns.
              </li>
              <li>
                Add a search feature to filter jobs based on activity or
                category.
              </li>
            </ul>

            <p className="mb-4">
              <strong className="mr-2">Summary:</strong>
              This activity reinforces the concepts of state management in
              React, component composition, and conditional rendering. It
              provides hands-on experience in creating a dynamic UI that
              responds to user input and manages complex data structures.
            </p>

            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>
                Creating and managing state with <code>useState</code> hook
              </li>
              <li>Passing props between parent and child components</li>
              <li>Filtering and mapping arrays to render dynamic content</li>
              <li>Implementing form handling in React</li>
              <li>Creating reusable components for better code organization</li>
              <li>
                Applying basic styling to create an intuitive user interface
              </li>
            </ul>

            <p className="mb-4">
              Once you have achieved the desired result with your code you can
              add your code to your GitHub profile to showcase your React
              skills.
            </p>

            <CodeExample component={JobManager_6_3_1} />
            <ScheduledTaskForms_6_3_1_Example />
          </div>
        }
      />
      {/* 6.4 */}
      <CourseSectionComponent
        title="Deleting Jobs"
        children={
          <div>
            <CodeExample
              component={
                "const handleDelete = (id: number) => {\nsetJobs((prev) => prev.filter((job) => job.id !== id));\n};"
              }
            />
            <CodeExample component={DeleteJob_6_4} />
            <ScheduledTaskForms_6_4_Example />
          </div>
        }
      />
      {/* 6.4.1 */}
      <CourseSectionComponent
        title="Practical Activity - Implement Delete Functionality and Form Reset in a React Job Management App"
        children={
          <div>
            <CodeExample component={JobManager_6_4_1} />
            <CodeExample component={JobColumn_6_4_1} />
            <CodeExample component={JobCard_6_4_1} />
            <CodeExample component={DeleteJob_6_4_1} />

            <ScheduledTaskForms_6_4_1_Example />
          </div>
        }
      />
      {/* 6.5 */}
      <CourseSectionComponent
        title="Use Effect Jobs"
        children={
          <div>
            <ul className="pl-6 list-disc">
              <li>
                Perform side effects in components and lets you synchronise
                component with an external system
              </li>
              <li>
                These are performed with an external system such as:
                <ul className="pl-8 list-disc">
                  <li>Fetching data from an API</li>
                  <li>Directly updating DOM</li>
                  <li>Timer functions (setTimeOut)</li>
                </ul>
              </li>
            </ul>
            <h3>
              Using useEffect with Local Storage in a ReactJS Todo Application
            </h3>
            <ul className="pl-6 list-disc">
              <li>
                Local Storage is featured in browsers helping to store data on
                the local machine
              </li>
              <li>
                Data is accessed by Web Applications, even if you close the
                browser
              </li>
            </ul>
            <CodeExample
              component={
                "import { useEffect, useState } from 'react'\n\nconst prevJobs = localStorage.getItem('jobs')\n\nconst App = () => {\nconst initialJobState = prevJobs ?JSON.parse(prevJob) : [];\nconst [jobs, setJobs ] = useState(initialJobState)\n\nuseEffect(() => {\n  localStorage.setItem('jobs', JSON.stringify(jobs))\n}, [jobs])"
              }
            />
          </div>
        }
      />
      {/* 6.5.1 */}
      <CourseSectionComponent
        title="Practical Activity - Implement Local Storage Persistence with useEffect in a React Job Management App"
        children={
          <div>
            <CodeExample component={JobManager_6_5_1} />
            <ScheduledTaskForms_6_5_1_Example />
          </div>
        }
      />
      {/* 6.6 */}
      <CourseSectionComponent
        title="TailWind CSS with Props"
        children={
          <div>
            <CodeExample component={Button_6_6} />
            <CodeExample component={ButtonExample_6_6} />

            <Button_6_6_Example />
          </div>
        }
      />
      {/* 6.6.1 */}
      <CourseSectionComponent
        title="Practical Activity - Create a Responsive Card Component using React and Tailwind CSS"
        children={
          <div>
            <CodeExample component={ResponsiveCardComponent} />
            <div className="container mx-auto p-4">
              <h1 className="text-3xl font-bold text-center mb-8">
                My Card Application
              </h1>
              <div className="flex flex-wrap justify-center">
                {cardData.map((card, index) => (
                  <ResponsiveCardComponentExample key={index} {...card} />
                ))}
              </div>
            </div>
          </div>
        }
      />
      {/* 6.7 */}
      <CourseSectionComponent
        title="Practice Project"
        children={
          <div>
            <img src="/Module_6_PracticeProject.png"></img>
            <InVestMeExample_6_7 />
          </div>
        }
      />
      {/* 6.7.1 */}
      <CourseSectionComponent
        title="Practical Activity - Create a Header Component for an Investment Calculator App"
        children={
          <div>
            <CodeExample component={Header_6_7_1} />
            <InVestMeExample_6_7_1 />
          </div>
        }
      />
    </>
  );
}

export default Module_6;
