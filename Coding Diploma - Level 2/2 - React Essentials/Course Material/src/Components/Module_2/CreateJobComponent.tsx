const CreateJobComponent = () => {
  const jobCount = 45;

  const countJob = () => {
    return jobCount === 0 ? "No jobs scheduled today" : jobCount;
  };

  return (
    <>
      <p>Jobs: {countJob()}</p>
      <p>Create a Job</p>
    </>
  );
};

export default CreateJobComponent;
