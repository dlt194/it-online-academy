import { useState } from "react";

import Header from "./Header";
import JobColumnComponent from "./JobColumnComponent";

const ScheduledTaskForms_5_3_1 = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Job 1", status: "pending" },
    { id: 2, title: "Job 2", status: "complete" },
    { id: 3, title: "Job 3", status: "in progress" },
    { id: 4, title: "Job 4", status: "complete" },
  ]);

  return (
    <>
      <Header />
      <div className="mt-10">
        <div className="container mx-auto px-4 md:px-8">
          {/* Responsive 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <JobColumnComponent
              title="Need to Start"
              icon="/time.svg"
              tasks={tasks.filter((task) => task.status === "pending")}
            >
              <p>Content for Section 1</p>
            </JobColumnComponent>
            <JobColumnComponent
              title="In Progress"
              icon="/clock.svg"
              tasks={tasks.filter((task) => task.status === "in progress")}
            >
              <p>Content for Section 2</p>
            </JobColumnComponent>
            <JobColumnComponent
              title="Completed"
              icon="/tick.svg"
              tasks={tasks.filter((task) => task.status === "complete")}
            >
              <p>Content for Section 3</p>
            </JobColumnComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduledTaskForms_5_3_1;
