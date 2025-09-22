import { useState } from "react";
import "./JobForm.css";

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

  const handleCategoryToggle = (category: string) => {
    // Implement category toggle functionality
    setJobDetails((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category) // remove if already selected
        : [...prev.categories, category], // add if not selected
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted job details:", jobDetails);
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

      <div>
        {categoryOptions.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryToggle(category)}
            // Add styling based on selection state
            className={`tag ${
              jobDetails.categories.includes(category) ? "tag-active" : ""
            }`}
          >
            {category}
          </button>
        ))}
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
