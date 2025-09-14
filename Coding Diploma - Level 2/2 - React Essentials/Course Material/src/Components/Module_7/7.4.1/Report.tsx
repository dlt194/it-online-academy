import { calculateInvestmentResults } from "./utils/investment";
import { generatePdf } from "./utils/generatePDF";

interface ReportProps {
  userInput: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
}

const Report = ({ userInput }: ReportProps) => {
  const resultData = calculateInvestmentResults(userInput);

  const handleGenerate = () => {
    generatePdf({
      begInvestment: userInput.initialInvestment,
      annInvestment: userInput.annualInvestment,
      returnInv: userInput.expectedReturn,
      yearInv: userInput.duration,
      resultData,
    });
  };

  return (
    <button
      className="flex items-center justify-center border border-gray-200 bg-gray-200 shadow rounded w-40 px-2 py-2 my-2 text-gray-700 hover:bg-gray-400 hover:text-white"
      onClick={handleGenerate}
    >
      Generate Report
    </button>
  );
};

export default Report;
