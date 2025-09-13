import "./JobForm.css";

import { useState } from "react";

type JobFormProps = {
  onSubmit: (title: string, jobs: string[], status: string) => void;
};

const JobForm: React.FC<JobFormProps> = ({ onSubmit }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categories = ["Read Emails", "Web Parsing", "Send Emails"];

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // remove if already selected
          : [...prev, category] // add if not selected
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const status = formData.get("status") as string;

    if (!title.trim()) return; // basic validation
    if (selectedCategories.length === 0) {
      alert("Please select at least one category!");
      return;
    }

    onSubmit(title, selectedCategories, status);
    setSelectedCategories([]); // reset
    e.currentTarget.reset();
  };

  return (
    <div className="formheader">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter the Job"
          className="job_input"
        />
        <div className="formdetails">
          <div className="bottomline">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`tag ${
                  selectedCategories.includes(category) ? "tag-active" : ""
                }`}
                onClick={() => handleCategoryToggle(category)}
              >
                {category}
              </button>
            ))}
            <div className="job_status_container">
              <select name="status" id="status" className="job_status">
                <option value="running">Start Process</option>
                <option value="completed">Completed</option>
                <option value="stopped">Stopped</option>
              </select>
              <button type="submit" className="submit_data">
                Add Job
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
