export const CreateJobComponent = () => {
  let jobCounter: number = 0;

  const handleClickEvent = () => {
    console.log("run job");
    jobCounter += 1;
  };
  return (
    <div>
      <h1>Bots running in Production: {jobCounter}</h1>
      <button onClick={handleClickEvent} value="Run job">
        Create a Job
      </button>
    </div>
  );
};
