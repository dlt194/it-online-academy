import { useState } from "react";
import "./JobForm.css";
import JobFormButton from "./JobFormButton";
import CategorySelector from "./CategorySelector";

type JobDetails = {
  title: string;
  status: string;
  categories: string[];
};

const JobForm = () => {
  const [jobDetails, setJobDetails] = useState<JobDetails>({
    title: "",
    status: "",
    categories: [],
  });

  const categoryOptions = ["Read Emails", "Web Parsing", "Send Emails"];

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted job details:", jobDetails);
  };

  const validateCategory = (cat) => {
    return jobDetails.categories.some((item) => item === cat);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="job_input"
        type="text"
        name="title"
        value={jobDetails.title}
        onChange={handleInputChange}
        placeholder="Enter job title"
      />

      <div className="flex">
        <CategorySelector />
        <select
          name="status"
          value={jobDetails.status}
          onChange={handleInputChange}
          className="job_status"
        >
          <option value="To Start">To Start</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <button type="submit" className="submit_data">
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
