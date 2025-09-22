import { calculateInvestmentResults } from "./utils/investment";
import { generatePdf } from "./utils/generatePDF";

const Report = () => {
  const input = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 15,
    duration: 5,
  };

  const resultData = calculateInvestmentResults(input);

  const handleGenerate = () => {
    generatePdf({
      begInvestment: input.initialInvestment,
      annInvestment: input.annualInvestment,
      returnInv: input.expectedReturn,
      yearInv: input.duration,
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
