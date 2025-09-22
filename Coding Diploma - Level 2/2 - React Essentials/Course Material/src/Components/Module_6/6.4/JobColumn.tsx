import JobCard from "./JobCard";

interface Job {
  id: number;
  activity: string;
  categories: string[];
  status: string;
}

interface JobColumnProps {
  title: string;
  status: string;
  jobs: Job[];
  onDelete: (index: number) => void;
}

const JobColumn = ({ title, status, jobs, onDelete }: JobColumnProps) => {
  const filteredJobs = jobs.filter((job) => job.status === status);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold text-gray-700 mb-4">{title}</h2>
      <div className="space-y-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onDelete={() => onDelete(job.id)} />
          ))
        ) : (
          <p className="text-gray-400 italic text-sm">No jobs here yet.</p>
        )}
      </div>
    </div>
  );
};

export default JobColumn;
