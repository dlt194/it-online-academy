import "./JobButton.css";

const JobButton = ({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Delete</button>;
};

export default JobButton;
