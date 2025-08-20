import { useState } from "react";

const AddJobComponent = ({ onAddJob }) => {
  const [task, setTask] = useState("");
  const [name, setName] = useState("");

  const handleAddJob = () => {
    onAddJob({ name, task });
    setName("");
    setTask("");
  };

  return (
    <>
      <input
        required
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter job name..."
        className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        required
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter job task..."
        className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      {/* Add button to add new bot */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-1 rounded m-2"
        onClick={handleAddJob}
      >
        Add Job
      </button>
    </>
  );
};

export default AddJobComponent;
