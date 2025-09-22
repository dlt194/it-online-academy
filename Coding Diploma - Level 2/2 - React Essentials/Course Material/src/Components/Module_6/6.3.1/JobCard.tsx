interface JobCardProps {
  job: {
    activity: string;
    status: string;
    categories: string[];
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-gray-800 mb-2">{job.activity}</h3>
      <div className="flex flex-wrap gap-2">
        {job.categories.length > 0 ? (
          job.categories.map((category, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
            >
              {category}
            </span>
          ))
        ) : (
          <span className="text-gray-400 text-sm italic">No categories</span>
        )}
      </div>
    </div>
  );
};

export default JobCard;
