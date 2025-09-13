import JobCard from "./JobCard";

interface Job {
  activity: string;
  categories: string[];
  status: string;
}

interface JobColumnProps {
  title: string;
  status: string;
  jobs: Job[];
}

const JobColumn = ({ title, status, jobs }: JobColumnProps) => {
  const filteredJobs = jobs.filter((job) => job.status === status);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold text-gray-700 mb-4">{title}</h2>
      <div className="space-y-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
        ) : (
          <p className="text-gray-400 italic text-sm">No jobs here yet.</p>
        )}
      </div>
    </div>
  );
};

export default JobColumn;
