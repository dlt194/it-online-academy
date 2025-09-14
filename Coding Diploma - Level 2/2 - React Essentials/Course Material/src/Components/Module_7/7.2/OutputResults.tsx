import { calculateInvestmentResults } from "./utils/investment";

interface OutputResultsProps {
  input: {
    begInvestment: number;
    annInvestment: number;
    returnInvestment: number;
    yearInvestment: number;
  };
}

const OutputResults = ({ input }: OutputResultsProps) => {
  console.log(calculateInvestmentResults(input));
  return <div></div>;
};

export default OutputResults;
