import ResetButton from "./ResetButton";
import CurrencySelect from "./CurrencySelect";
import Report from "./Report";

interface UserOptionsProps {
  handleReset: () => void;
  setCurrency: React.Dispatch<React.SetStateAction<"GBP" | "USD" | "EUR">>;
  userInput: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
}

const UserOptions = ({
  handleReset,
  setCurrency,
  userInput,
}: UserOptionsProps) => {
  return (
    <div className="max-w-4xl mx-auto flex gap-4 mt-6">
      <ResetButton handleReset={handleReset} />
      <CurrencySelect setCurrency={setCurrency} />
      <Report userInput={userInput} />
    </div>
  );
};

export default UserOptions;
