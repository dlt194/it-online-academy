import ResetButton from "./ResetButton";
import CurrencySelect from "./CurrencySelect";

interface UserOptionsProps {
  handleReset: () => void;
  setCurrency: React.Dispatch<React.SetStateAction<"GBP" | "USD" | "EUR">>;
}

const UserOptions = ({ handleReset, setCurrency }: UserOptionsProps) => {
  return (
    <div className="max-w-4xl mx-auto flex gap-4 mt-6">
      <ResetButton handleReset={handleReset} />
      <CurrencySelect setCurrency={setCurrency} />
    </div>
  );
};

export default UserOptions;
