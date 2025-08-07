import React from "react";

export const JobBoardComponent = () => {
  const companyName = "Example Inc";
  const jobCount = 8;

  const getJobBoardMessage = () => {
    return jobCount === 0
      ? "No jobs to schedule today"
      : `Jobs running today from bot: ${jobCount}`;
  };

  return (
    <div>
      <h1>{companyName}</h1>
      <p>{getJobBoardMessage()}</p>
    </div>
  );
};
