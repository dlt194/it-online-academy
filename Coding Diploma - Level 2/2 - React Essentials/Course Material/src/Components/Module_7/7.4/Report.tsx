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
    <div
      className="border border-black shadow rounded w-40 px-2 my-2 text-center hover:bg-gray-400 hover:text-white hover:cursor-pointer"
      onClick={handleGenerate}
    >
      Generate Report
    </div>
  );
};

export default Report;
