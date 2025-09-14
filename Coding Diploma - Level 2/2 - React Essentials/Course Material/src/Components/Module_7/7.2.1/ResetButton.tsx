interface ResetButtonProps {
  handleReset: () => void;
}

const ResetButton = ({ handleReset }: ResetButtonProps) => {
  return (
    <button
      onClick={handleReset}
      className="flex-1 border border-[#9999A1'] bg-[#9999A1'] rounded p-2 text-gray-700 hover:bg-gray-300 transition"
    >
      Reset Values
    </button>
  );
};

export default ResetButton;
