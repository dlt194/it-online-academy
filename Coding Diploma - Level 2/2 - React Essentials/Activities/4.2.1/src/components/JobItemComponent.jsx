const JobItemComponent = ({
  id,
  jobName,
  jobStatus,
  jobTask,
  updateJob,
  deleteJob,
}) => {
  return (
    <li
      className={
        jobStatus == "Complete"
          ? "border border-gray-400 rounded m-2 p-3 min-w-[250px] min-h-[250px] bg-green-800 text-white"
          : "border border-gray-400 bg-gray-100 rounded m-2 p-3 min-w-[250px] min-h-[250px]"
      }
    >
      <div className="flex h-full flex-col">
        <div className="mx-1">
          <span className="block m-1">id: {id}</span>
          <span className="block m-1">Name: {jobName}</span>

          <span className="block m-1">
            Status:{" "}
            <button
              className={
                jobStatus == "Complete"
                  ? "underline text-white focus:outline-none rounded"
                  : "underline text-blue-700 hover:text-blue-900 focus:outline-none rounded"
              }
              onClick={() => updateJob(id)}
              type="button"
            >
              {jobStatus}
            </button>
          </span>

          <span className="block m-1">Task: {jobTask}</span>
        </div>

        <button
          className="mt-auto w-full bg-red-500 hover:bg-red-700 text-white p-1 rounded font-semibold"
          onClick={() => deleteJob(id)}
          type="button"
          aria-label={`Delete job ${jobName}`}
        >
          Delete Job
        </button>
      </div>
    </li>
  );
};

export default JobItemComponent;
