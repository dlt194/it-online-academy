import { Trash } from "lucide-react";

interface DeleteJobProps {
  onClick: () => void;
}

const DeleteJob = ({ onClick }: DeleteJobProps) => {
  return (
    <button onClick={onClick} className="bg-gray-50">
      <Trash />
    </button>
  );
};

export default DeleteJob;
