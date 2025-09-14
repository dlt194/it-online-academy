interface ResetButtonProps {
  handleReset: () => void;
}

const ResetButton = ({ handleReset }: ResetButtonProps) => {
  return (
    <button
      onClick={handleReset}
      className="flex-1 border border-gray-200 bg-gray-200 rounded p-2 text-gray-700 hover:bg-gray-300 transition"
    >
      Reset Values
    </button>
  );
};

export default ResetButton;
