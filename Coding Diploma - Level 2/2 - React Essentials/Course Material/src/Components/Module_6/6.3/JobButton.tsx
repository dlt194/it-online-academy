import "./JobButton.css";

const JobButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="job-button" onClick={onClick}>
      Delete
    </button>
  );
};

export default JobButton;
