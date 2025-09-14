interface ResetButtonProps {
  handleReset: () => void;
}

const ResetButton = ({ handleReset }: ResetButtonProps) => {
  return (
    <button
      onClick={handleReset}
      className="flex items-center justify-center border border-gray-200 bg-gray-200 shadow rounded w-40 px-2 py-2 my-2 text-gray-700 hover:bg-gray-400 hover:text-white"
    >
      Reset Values
    </button>
  );
};

export default ResetButton;
