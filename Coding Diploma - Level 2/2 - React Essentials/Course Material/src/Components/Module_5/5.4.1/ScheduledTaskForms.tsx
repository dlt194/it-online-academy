import { useState } from "react";

import Header from "./Header";
import { default as JobForm } from "./JobForm";
import JobColumnComponent from "./JobColumnComponent";

type Task = {
  id: number;
  title: string;
  jobs: string[]; // explicitly string[]
  status: string;
};

const ScheduledTaskForms_5_3_1 = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Job 1", jobs: [], status: "stopped" },
    { id: 2, title: "Job 2", jobs: [], status: "running" },
    { id: 3, title: "Job 3", jobs: [], status: "running" },
    { id: 4, title: "Job 4", jobs: [], status: "completed" },
  ]);

  let nextId = tasks.length + 1;

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleAdd = (title: string, jobs: string[], status: string) => {
    const newTask = { id: nextId, title, jobs, status };
    setTasks((prev) => [...prev, newTask]);
    nextId += 1;
  };

  const handleUpdate = (id: number, title: string, status: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title, status } : task))
    );
  };

  return (
    <>
      <Header />
      <div className="mt-10">
        <div className="m-10">
          <JobForm onSubmit={handleAdd} />
        </div>
        <div className="container mx-auto px-4 md:px-8">
          {/* Responsive 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <JobColumnComponent
              title="Need to Start"
              icon="/time.svg"
              tasks={tasks.filter((task) => task.status === "stopped")}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            >
              <p>Content for Section 1</p>
            </JobColumnComponent>
            <JobColumnComponent
              title="In Progress"
              icon="/clock.svg"
              tasks={tasks.filter((task) => task.status === "running")}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            >
              <p>Content for Section 2</p>
            </JobColumnComponent>
            <JobColumnComponent
              title="Completed"
              icon="/tick.svg"
              tasks={tasks.filter((task) => task.status === "completed")}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
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
