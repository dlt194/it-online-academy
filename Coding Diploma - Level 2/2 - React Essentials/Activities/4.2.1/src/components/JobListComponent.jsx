import JobItemComponent from "./JobItemComponent";

const JobListComponent = ({ jobs, updateJob, deleteJob }) => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map(({ id, jobName, jobStatus, jobTask }) => (
          <JobItemComponent
            key={id}
            id={id}
            jobName={jobName}
            jobStatus={jobStatus}
            jobTask={jobTask}
            updateJob={updateJob}
            deleteJob={deleteJob}
          />
        ))}
      </ul>
    </>
  );
};

export default JobListComponent;
