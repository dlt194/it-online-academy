import JobButton from "./JobButton";
import "./JobColumnComponent.css";

type Job = {
  id: number;
  title: string;
  status: string;
  jobs: string[];
};
type JobColumnProps = {
  title: string;
  icon: string;
  tasks: Job[];

  children: React.ReactNode;
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string, status: string) => void;
};

const JobColumnComponent: React.FC<JobColumnProps> = (props) => {
  return (
    <section className="job-column-section">
      <img className="job-column-icon" src={props.icon} alt={props.title} />
      <h1 className="job-column-title">{props.title}</h1>
      {props.children}
      <ul className="job-column-tasks">
        {props.tasks.length > 0 ? (
          props.tasks.map((job) => (
            <li
              key={job.id}
              className="m-2 bg-slate-50 border border-slate-200 rounded-xl shadow-sm 
             p-4 flex flex-col justify-between hover:shadow-md hover:bg-slate-100 
             transition-all"
            >
              <div>
                <h6 className="text-slate-800 text-lg font-semibold mb-2">
                  {job.title}
                </h6>
                {/* Show categories */}
                <ul className="flex flex-wrap gap-2 mb-2">
                  {job.jobs.map((c) => (
                    <li
                      key={c}
                      className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
                    >
                      {c}
                    </li>
                  ))}
                </ul>

                {/* Status Select */}
                <select
                  value={job.status}
                  onChange={(e) =>
                    props.onUpdate(job.id, job.title, e.target.value)
                  }
                  className="mt-2 block w-full rounded-lg border border-slate-300 
                 bg-white/70 px-3 py-2 text-sm text-slate-700 
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                >
                  <option value="stopped">Pending</option>
                  <option value="running">In Progress</option>
                  <option value="completed">Complete</option>
                </select>
              </div>

              <div className="mt-4 flex justify-end">
                <JobButton onClick={() => props.onDelete(job.id)} />
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-300 italic">
            No jobs here. Add one using the form above.
          </li>
        )}
      </ul>
    </section>
  );
};

export default JobColumnComponent;
