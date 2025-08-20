import React, { useState } from "react";

const WorkingWithStateAndHandlingUserValues = () => {
  const [jobCounter, setJobCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleClickEvent = () => {
    setJobCounter(jobCounter + 1);
    console.log("Run Job", jobCounter);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1 className="m-2">Bots running in Production: {jobCounter}</h1>
      <div className="m-2">
        <p className="mb-2">Input Value: {inputValue}</p>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={handleClickEvent}
      >
        Create a Job
      </button>
    </div>
  );
};

export default WorkingWithStateAndHandlingUserValues;
