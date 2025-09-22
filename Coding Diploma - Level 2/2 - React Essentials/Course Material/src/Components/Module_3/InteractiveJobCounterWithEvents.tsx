const InteractiveJobCounterWithEvents = () => {
  let jobCount = 0;

  const handleAddJob = () => {
    console.log("Adding Job");
    jobCount += 1;
  };
  return (
    <div>
      <h1>Job Counter</h1>
      <p>Current Jobs: {jobCount}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddJob}
      >
        Add Job
      </button>
    </div>
  );
};

export default InteractiveJobCounterWithEvents;
