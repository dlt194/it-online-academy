import { useState } from "react";

const InteractiveJobCounterWithEvents = () => {
  const [jobCount, setJobCount] = useState(0);
  const [environment, setEnvironment] = useState("UAT");

  const handleAddJob = () => {
    console.log("Adding Job");
    setJobCount(jobCount + 1);
  };

  const handleRemoveJob = () => {
    setJobCount(jobCount - 1);
  };

  const resetJobCount = () => {
    setJobCount(0);
  };

  const handleChangeEnvironment = () => {
    switch (environment) {
      case "UAT":
        setEnvironment("Production");
        break;
      case "Production":
        setEnvironment("UAT");
        break;
      default:
        setEnvironment("Unknown");
        break;
    }
  };

  return (
    <div>
      <h1>Job Counter</h1>
      <p>Current Jobs: {jobCount}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleAddJob}
      >
        Add Job
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleRemoveJob}
      >
        Remove Job
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={resetJobCount}
      >
        Reset Jobs
      </button>

      {jobCount === 0 ? (
        <p className="m-2">No Jobs Available</p>
      ) : jobCount >= 1 && jobCount <= 5 ? (
        <p className="m-2">Few jobs available</p>
      ) : jobCount > 5 ? (
        <p className="m-2">Lots of jobs available</p>
      ) : (
        <></>
      )}

      <br />
      <p>Current Environment: {environment}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleChangeEnvironment}
      >
        Change Environment
      </button>
    </div>
  );
};

export default InteractiveJobCounterWithEvents;
