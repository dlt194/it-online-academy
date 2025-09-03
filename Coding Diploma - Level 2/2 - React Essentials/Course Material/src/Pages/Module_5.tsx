import CodeExample from "../Components/CodeExample";
import { CourseSectionComponent } from "../Components/CourseSectionComponent";

import { default as ScheduledTaskForms_5_1_1 } from "../Components/Module_5/5.1/ScheduledTaskForms.tsx?raw";
import { default as Header_5_1_1 } from "../Components/Module_5/5.1/Header.tsx?raw";
import { default as JobForm_5_1_1 } from "../Components/Module_5/5.1/JobForm.tsx?raw";
import { default as FormButton } from "../Components/Module_5/5.3/FormButton.tsx?raw";
import { default as ScheduledTaskForms_5_3_1 } from "../Components/Module_5/5.3.1/ScheduledTaskForms.tsx?raw";
import { default as JobColumnComponent } from "../Components/Module_5/5.3.1/JobColumnComponent.tsx?raw";
import { default as JobColumnComponent_5_4 } from "../Components/Module_5/5.4/JobColumnComponent.tsx?raw";

import JobFormCSS from "../Components/Module_5/5.2/JobForm.css?raw";
import FormButtonCSS from "../Components/Module_5/5.3/FormButton.css?raw";

import { default as ScheduledTaskFormsExample } from "../Components/Module_5/5.1/ScheduledTaskForms";
import { default as ScheduledTaskForms_5_2_1 } from "../Components/Module_5/5.2/ScheduledTaskForms";
import { default as FormButtonExample } from "../Components/Module_5/5.3/FormButton";
import { default as ScheduledTaskFormsExample_5_3_1 } from "../Components/Module_5/5.3.1/ScheduledTaskForms";
import { default as ScheduledTaskForms_5_4_1 } from "../Components/Module_5/5.4.1/ScheduledTaskForms";

function Module_5() {
  return (
    <>
      <CourseSectionComponent
        title="Scheduled Task Forms"
        children={
          <div>
            <CodeExample component={ScheduledTaskForms_5_1_1} />
            <CodeExample component={Header_5_1_1} />
            <CodeExample component={JobForm_5_1_1} />
          </div>
        }
      />
      <CourseSectionComponent
        title="Practical Activity: Building a Job Management Application Form"
        children={
          <div>
            <p className="mb-4">
              <strong className="mr-2">Objective:</strong>
              Create a React application with a form to add and categorize jobs,
              including input fields, category selection, and job status
              options.
            </p>

            <p className="mb-4">
              <strong className="mr-2">Remember:</strong>
              Before you do this activity, remember the importance of organizing
              code into components and the use of <code>className</code> for
              styling in React. Try to think about how you might handle form
              submission and data management in future iterations of this
              application.
            </p>

            <strong className="mr-2">Instructions:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-2">
              <li>
                Create a new React component called <code>JobForm</code>.
              </li>
              <li>
                Implement the following form elements within the{" "}
                <code>JobForm</code> component:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>An input field for entering job titles.</li>
                  <li>
                    Buttons for selecting job categories (e.g., Read Emails, Web
                    Parsing, Send Emails).
                  </li>
                  <li>A dropdown menu for selecting job status.</li>
                  <li>A submit button to add the job.</li>
                </ul>
              </li>
              <li>
                Structure the component with appropriate HTML elements and React
                JSX.
              </li>
              <li>
                Add basic CSS classes for initial styling (full styling will be
                addressed later).
              </li>
            </ul>

            <strong className="mr-2">Tasks:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-2">
              <li>Implement the input field for entering job titles.</li>
              <li>Create buttons for job categories.</li>
              <li>Implement the dropdown menu for job status.</li>
              <li>Add the submit button.</li>
              <li>Organize these elements within the form structure.</li>
              <li>
                Import and use the <code>JobForm</code> component in your main{" "}
                <code>App</code> or a relevant parent component.
              </li>
            </ul>

            <strong className="mr-2">Bonus Challenges:</strong>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>
                Add state management to the form using React’s{" "}
                <code>useState</code> hook.
              </li>
              <li>
                Implement a basic form submission handler that logs the form
                data to the console.
              </li>
              <li>
                Add basic validation to ensure all fields are filled before
                submission.
              </li>
            </ul>
            <br />
            <div className="border border-black rounded">
              <ScheduledTaskFormsExample />
            </div>
          </div>
        }
      />

      <CourseSectionComponent
        title="CSS Form App Layout"
        children={
          <div>
            <CodeExample component={JobFormCSS} language="css" />
            <br />
          </div>
        }
      />

      <CourseSectionComponent
        title="Practical Activity: Styling the Job Management Application Form"
        children={
          <div>
            <p className="mb-4">
              <strong className="mr-2">Objective:</strong>
              Enhance the visual appearance of the job management application
              form created in the previous activity by adding CSS styles.
            </p>

            <p className="mb-4">
              <strong className="mr-2">Remember:</strong>
              Before you carry out this activity, remember the importance of
              consistent naming conventions, the use of CSS variables for colors
              and sizes, and the benefits of organizing styles in a separate CSS
              file for each component. Experiment with different styles to
              understand how they affect the user experience.
            </p>

            <strong className="mr-2">Instructions:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-2">
              <li>
                Create a new CSS file named <code>AppForm.css</code> in your
                components folder.
              </li>
              <li>
                Import the CSS file into your <code>AppForm</code> component.
              </li>
              <li>
                Apply the following styles to your form elements:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Form container</li>
                  <li>Input field</li>
                  <li>Category buttons (tags)</li>
                  <li>Job status dropdown</li>
                  <li>Submit button</li>
                </ul>
              </li>
              <li>Ensure the form is responsive and visually appealing.</li>
            </ul>

            <strong className="mr-2">Tasks:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-4">
              <li>
                <span className="font-semibold">
                  Style the form container (<code>.form-header</code>):
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Set a max-width and center the form.</li>
                  <li>Add padding and a border.</li>
                  <li>Use flexbox to align items.</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Style the input field (<code>.bot-input</code>):
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Set appropriate font size and padding.</li>
                  <li>Add a border and border-radius.</li>
                  <li>Implement a focus state.</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Style the category buttons (<code>.tag</code>):
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Create a button-like appearance.</li>
                  <li>Use a distinct background color.</li>
                  <li>Add hover and active states.</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Style the job status dropdown (<code>.job-status</code>):
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Customize the appearance of the select element.</li>
                  <li>Ensure it matches the overall form style.</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Style the submit button (<code>.submit-data</code>):
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Use a standout color.</li>
                  <li>Add hover and active states.</li>
                  <li>Ensure good contrast for accessibility.</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Implement responsive design:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Use media queries to adjust styles for different screen
                    sizes.
                  </li>
                  <li>
                    Ensure the form is usable on both desktop and mobile
                    devices.
                  </li>
                </ul>
              </li>
            </ul>

            <strong className="mr-2">Bonus Challenges:</strong>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>
                Add subtle animations to button hover states using CSS
                transitions.
              </li>
              <li>
                Implement a dark mode toggle and create alternate styles for
                dark mode.
              </li>
              <li>
                Use CSS Grid for more complex layout arrangements within the
                form.
              </li>
            </ul>
            <br />
            <ScheduledTaskForms_5_2_1 />
          </div>
        }
      />

      <CourseSectionComponent
        title="Creating Button Components and Props Value"
        children={
          <div>
            <CodeExample component={FormButton} />
            <CodeExample component={FormButtonCSS} language="css" />
            <br />
            <FormButtonExample />
          </div>
        }
      />
      <CourseSectionComponent
        title="Practical Activity: Enhancing the Job Management Application with Reusable Components"
        children={
          <div>
            <p className="mb-4">
              <strong className="mr-2">Objective:</strong>
              Refactor the existing job management application to use more
              reusable components, implement props for dynamic content, and
              create a flexible layout for job status columns.
            </p>

            <p className="mb-4">
              <strong className="mr-2">Remember:</strong>
              Before you carry out this activity, remember the importance of
              component reusability and the power of props in creating flexible,
              maintainable React applications. Think about how we can further
              improve the application's structure and functionality.
            </p>

            <strong className="mr-2">Instructions:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-2">
              <li>
                Create a new reusable component called <code>JobColumn</code>.
              </li>
              <li>
                Implement props in the <code>JobColumn</code> component to make
                it flexible for different statuses.
              </li>
              <li>
                Refactor the main application to use the <code>JobColumn</code>{" "}
                component for different job statuses.
              </li>
              <li>
                Use props to pass different images and titles to each{" "}
                <code>JobColumn</code>.
              </li>
            </ul>

            <strong className="mr-2">Tasks:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-4">
              <li>
                <span className="font-semibold">
                  Complete the <code>JobColumn</code> component:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Add any necessary additional props (e.g., for job items).
                  </li>
                  <li>
                    Implement a list or grid to display job items within the
                    column.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  In the main App component:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Import necessary icons/images for different job statuses.
                  </li>
                  <li>
                    Create three <code>JobColumn</code> components with
                    different props for <em>Need to Start</em>,{" "}
                    <em>In Progress</em>, and <em>Completed</em> statuses.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Create a CSS file for the <code>JobColumn</code> component:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Style the column layout.</li>
                  <li>Ensure the image and title are properly aligned.</li>
                  <li>Make the columns responsive.</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Implement simple state management in the App component:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Create an array of job objects with properties like{" "}
                    <code>id</code>, <code>title</code>, and <code>status</code>
                    .
                  </li>
                  <li>
                    Pass relevant jobs to each <code>JobColumn</code> based on
                    their status.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  In the <code>JobColumn</code> component, map through the job
                  items and display them.
                </span>
              </li>
            </ul>

            <strong className="mr-2">Bonus Challenges:</strong>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>
                Add functionality to move jobs between columns (e.g., from{" "}
                <em>Need to Start</em> to <em>In Progress</em>).
              </li>
              <li>
                Implement a form to add new jobs to the <em>Need to Start</em>{" "}
                column.
              </li>
              <li>
                Add a search or filter functionality to find specific jobs
                across all columns.
              </li>
            </ul>
            <CodeExample component={ScheduledTaskForms_5_3_1} />
            <CodeExample component={JobColumnComponent} />
            <br />
            <ScheduledTaskFormsExample_5_3_1 />
          </div>
        }
      />

      <CourseSectionComponent
        title="Building Job Lists and Status Components"
        children={
          <div>
            <CodeExample component={JobColumnComponent_5_4} />
          </div>
        }
      />
      <CourseSectionComponent
        title="Practical Activity: Implementing Dynamic Functionality in the Job Management Application"
        children={
          <div>
            <p className="mb-4">
              <strong className="mr-2">Objective:</strong>
              Enhance the job management application by adding functionality to
              the delete button, implementing job status updates, and managing
              the overall state of the application.
            </p>

            <p className="mb-4">
              <strong className="mr-2">Remember:</strong>
              Before you start this activity, understand the importance of
              immutability when updating state, and think about component
              structure and the flow of data through the application.
            </p>

            <strong className="mr-2">Instructions:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-2">
              <li>Implement state management for the job list.</li>
              <li>Add functionality to the delete button.</li>
              <li>Implement job status updates.</li>
              <li>Create a mechanism to add new jobs to the list.</li>
            </ul>

            <strong className="mr-2">Tasks:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-4">
              <li>
                <span className="font-semibold">
                  Implement the <code>deleteJob</code> function:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Use the <code>setJobs</code> function to update state,
                    removing the job with the specified <code>id</code>.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Implement the <code>updateJobStatus</code> function:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Update the status of a job with the given <code>id</code> to
                    the new status.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Implement the <code>addNewJob</code> function:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Create a new job object and add it to the <code>jobs</code>{" "}
                    array.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Create a form component for adding new jobs:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Include an input field for the job title and a submit
                    button.
                  </li>
                  <li>
                    Use the <code>addNewJob</code> function to add the new job
                    to the list.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Update the <code>JobStatus</code> component to include:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    The delete button functionality (call <code>deleteJob</code>{" "}
                    when clicked).
                  </li>
                  <li>
                    A way to update the job status (e.g., a dropdown or buttons
                    for different statuses).
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  In the <code>App</code> component, render{" "}
                  <code>JobColumn</code> components for each status:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    <em>Need to Start</em>, <em>In Progress</em>, and{" "}
                    <em>Completed</em>.
                  </li>
                  <li>
                    Filter jobs based on their status and pass them to the
                    appropriate column.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Ensure that all state updates trigger re-renders of the
                  appropriate components.
                </span>
              </li>
            </ul>

            <strong className="mr-2">Bonus Challenges:</strong>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>
                Implement drag-and-drop functionality to move jobs between
                columns.
              </li>
              <li>Add a search feature to filter jobs by title.</li>
              <li>
                Implement local storage to persist the job list between page
                reloads.
              </li>
            </ul>
            <ScheduledTaskForms_5_4_1 />
          </div>
        }
      />

      <CourseSectionComponent
        title="Functional Aspects for Forms"
        children={<div></div>}
      />
      <CourseSectionComponent
        title="Practical Activity: Enhancing Form Handling in the Job Management Application"
        children={
          <div>
            <p className="mb-4">
              <strong className="mr-2">Objective:</strong>
              Improve the job management application by implementing more
              sophisticated form handling techniques, capturing user input for
              job details, and managing application state.
            </p>

            <p className="mb-4">
              <strong className="mr-2">Remember:</strong>
              Before you carry out this activity, understand the importance of
              keeping components focused on a single responsibility and the
              benefits of breaking down complex forms into smaller, manageable
              pieces. Think about how we can make our form handling more
              scalable for larger applications.
            </p>

            <strong className="mr-2">Instructions:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-2">
              <li>Enhance the existing form to capture job details.</li>
              <li>Implement state management for form inputs.</li>
              <li>
                Create functions to handle form submission and input changes.
              </li>
              <li>Display captured job details in the console.</li>
            </ul>

            <strong className="mr-2">Tasks:</strong>
            <ul className="list-decimal ml-6 mb-4 space-y-4">
              <li>
                <span className="font-semibold">
                  Implement the <code>handleInputChange</code> function:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    Update the <code>jobDetails</code> state based on the input
                    that changed.
                  </li>
                  <li>
                    Use the input’s <code>name</code> attribute to determine
                    which property to update.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Complete the <code>handleSubmit</code> function:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Prevent the default form submission behavior.</li>
                  <li>
                    Log the current <code>jobDetails</code> state to the
                    console.
                  </li>
                  <li>Optionally, reset the form fields after submission.</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Add validation to ensure all fields are filled before
                  submission:
                </span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Disable the submit button if any field is empty.</li>
                  <li>
                    Display an error message if the user tries to submit with
                    empty fields.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  Implement a function to reset the form to its initial state.
                </span>
              </li>

              <li>
                <span className="font-semibold">
                  Add visual feedback when a job is successfully added
                </span>{" "}
                (e.g., a success message).
              </li>

              <li>
                <span className="font-semibold">
                  Create a separate component to display the list of added jobs.
                </span>
              </li>
            </ul>

            <strong className="mr-2">Bonus Challenges:</strong>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>
                Implement error handling for each input field (e.g., job title
                must be at least 3 characters long).
              </li>
              <li>Add a feature to edit existing jobs.</li>
              <li>
                Implement local storage to persist added jobs between page
                reloads.
              </li>
            </ul>
          </div>
        }
      />
    </>
  );
}

export default Module_5;
