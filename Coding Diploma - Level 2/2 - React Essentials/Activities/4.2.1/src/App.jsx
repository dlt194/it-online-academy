import HeaderComponent from "./components/HeaderComponent";
import JobListComponent from "./components/JobListComponent";
import FooterComponent from "./components/FooterComponent";
import { useState } from "react";
import ShowJobsComponent from "./components/ShowJobsComponent";
import AddJobComponent from "./components/AddJobComponent";

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      jobName: "Build Header Component",
      jobStatus: "Complete",
      jobTask:
        "Complete the Header component by adding a logo image (you can use a placeholder image URL).",
    },
    {
      id: 2,
      jobName: "Job List Component",
      jobStatus: "Complete",
      jobTask:
        "Implement the JobList component to map through the jobs prop and render JobItem components.",
    },
    {
      id: 3,
      jobName: "Job Item Component",
      jobStatus: "Complete",
      jobTask:
        "Complete the JobItem component to display job information and implement conditional rendering based on the job status.",
    },
    {
      id: 4,
      jobName: "Toggle Job Visibility",
      jobStatus: "Complete",
      jobTask:
        "Add a simple toggle button in the App component to show/hide the job list.",
    },
    {
      id: 5,
      jobName: "Conditional Styling",
      jobStatus: "Complete",
      jobTask:
        "Implement basic styling for each component, especially for different job statuses.",
    },
    {
      id: 6,
      jobName: "Add Job Form",
      jobStatus: "Complete",
      jobTask:
        "Add a 'Add Job' button in the App component that adds a new job to the list (you'll need to use state for this).",
    },
    {
      id: 7,
      jobName: "Delete Job",
      jobStatus: "Complete",
      jobTask: "Implement a delete functionality for each job item.",
    },
    {
      id: 8,
      jobName: "Search Bar",
      jobStatus: "Complete",
      jobTask: "Add a search bar to filter jobs by name.",
    },
    {
      id: 9,
      jobName: "Update Add Job Form",
      jobStatus: "Complete",
      jobTask: "Create a form to add new jobs with custom details.",
    },
  ]);

  const [nextId, setNextId] = useState(jobs.length + 1);

  const [searchValue, setSearchValue] = useState("");

  const updateJob = (id) => {
    console.log(id);
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? {
              ...job,
              jobStatus:
                job.jobStatus === "Complete" ? "Incomplete" : "Complete",
            }
          : job
      )
    );
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => id !== job.id));
  };

  const handleAddJob = ({ name, task }) => {
    if (name.trim() !== "" || task.trim() !== "") {
      setJobs((prevJobs) => [
        ...prevJobs,
        {
          id: nextId,
          jobName: name,
          jobStatus: "Incomplete",
          jobTask: task,
        },
      ]);
      setNextId(nextId + 1);
    }
  };

  const [showJobs, setShowJobs] = useState(true);

  const filteredJobs = jobs.filter((job) => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return true;
    return (
      job.jobName.toLowerCase().includes(query) ||
      job.jobStatus.toLowerCase().includes(query) ||
      job.jobTask.toLowerCase().includes(query)
    );
  });

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <HeaderComponent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ShowJobsComponent showJobs={showJobs} setShowJobs={setShowJobs} />
      <AddJobComponent onAddJob={handleAddJob} nextId={nextId} />
      {showJobs ? (
        <JobListComponent
          jobs={filteredJobs}
          setJobs={setJobs}
          updateJob={updateJob}
          deleteJob={deleteJob}
        />
      ) : null}

      <FooterComponent />
    </div>
  );
}

export default App;
