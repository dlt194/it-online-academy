const StyleAttributeCompontent = () => {
  const jobCount: number = 25;
  const hideProperty = true;
  const countJob = () => {
    return jobCount === 0
      ? "No Jobs to Schedule Today"
      : "Jobs Running Today from Bot: ${jobCount}";
  };
  return (
    <div>
      <h1>Jobs: {countJob()}</h1>
      <button
        className="border m-2 px-2 py-0.5 bg-blue-600 text-white rounded-sm shadow shadow-gray-100 hover:bg-blue-700"
        disabled={hideProperty}
        value="Create a Job"
      >
        Create a Job
      </button>
    </div>
  );
};

export default StyleAttributeCompontent;
