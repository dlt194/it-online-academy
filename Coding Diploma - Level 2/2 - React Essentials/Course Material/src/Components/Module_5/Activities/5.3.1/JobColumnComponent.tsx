import "./JobColumnComponent.css";

type JobColumnProps = {
  title: string;
  icon: string;
  tasks: { id: number; title: string; status: string }[];
  children: React.ReactNode;
};

const JobColumnComponent: React.FC<JobColumnProps> = (props) => {
  return (
    <section className="job-column-section">
      <img className="job-column-icon" src={props.icon} alt={props.title}></img>
      <h1 className="job-column-title">{props.title}</h1>
      {props.children}
      <ul className="job-column-tasks">
        {props.tasks.length > 0 ? (
          props.tasks.map((job) => (
            <li key={job.id} className="p-2">
              {job.title}
            </li>
          ))
        ) : (
          <li className="text-gray-500 italic">No jobs here</li>
        )}
      </ul>
    </section>
  );
};

export default JobColumnComponent;
