import { useState, useEffect } from "react";
import JobColumn from "./JobColumn";

interface Job {
  id: number;
  activity: string;
  categories: string[];
  status: string;
}

const prevJobs = localStorage.getItem("jobs");

function JobManager() {
  const initialJobState = prevJobs ? JSON.parse(prevJobs) : [];
  const [jobs, setJobs] = useState<Job[]>(initialJobState);
  const [activity, setActivity] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [status, setStatus] = useState("Need to Complete");

  useEffect(() => {
    // useEffect Hook has a dependency on jobs so will run when the state updates.
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const handleCategoryToggle = (category: string) => {
    setCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // remove if selected
          : [...prev, category] // add if not selected
    );
  };

  const resetForm = () => {
    setActivity("");
    setCategories([]);
    setStatus("Need to Complete");
  };

  const addJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activity.trim()) return;

    const newJob = { id: Date.now(), activity, categories, status };
    setJobs([...jobs, newJob]);

    resetForm();
  };

  const handleDelete = (id: number) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 rounded-2xl">
      {/* Form */}
      <form
        onSubmit={addJob}
        className="bg-white shadow-md rounded-lg p-6 mb-10 max-w-xl mx-auto flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Add a New Job</h2>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter job activity"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <div className="flex justify-between mx-8">
          {["Read Emails", "Send Emails", "Web Parsing"].map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={categories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="Need to Complete">Need to Complete</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Job
        </button>
      </form>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobColumn
          title="Need to Complete"
          status="Need to Complete"
          jobs={jobs}
          onDelete={handleDelete}
        />
        <JobColumn
          title="In Progress"
          status="In Progress"
          jobs={jobs}
          onDelete={handleDelete}
        />
        <JobColumn
          title="Completed"
          status="Completed"
          jobs={jobs}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default JobManager;
