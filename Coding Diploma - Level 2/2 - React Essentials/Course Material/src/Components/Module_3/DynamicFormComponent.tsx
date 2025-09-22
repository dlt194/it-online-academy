import { useState } from "react";
const DynamicFormComponent = () => {
  const [formInput, setFormInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput(event.target.value);
  };

  const handleReset = () => {
    setFormInput("");
  };

  return (
    <div>
      <h1 className="mb-2 font-bold">Dynamic Form</h1>
      <input
        type="text"
        value={formInput}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleReset}
      >
        Reset
      </button>
      <div className="m-2">
        <h2>Current Input:</h2>
        <p>{formInput}</p>
      </div>
    </div>
  );
};

export default DynamicFormComponent;
