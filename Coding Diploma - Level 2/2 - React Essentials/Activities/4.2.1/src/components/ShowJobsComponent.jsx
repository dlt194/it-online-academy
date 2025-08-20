import React from "react";

const ShowJobsComponent = ({ showJobs, setShowJobs }) => {
  return (
    <>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white mx- p-1 m-1 rounded mb-4"
        onClick={() => setShowJobs(!showJobs)}
      >
        {showJobs ? "Hide Jobs" : "Show Jobs"}
      </button>
    </>
  );
};

export default ShowJobsComponent;
