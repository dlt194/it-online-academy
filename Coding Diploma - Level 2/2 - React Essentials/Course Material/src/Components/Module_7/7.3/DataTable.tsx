import { calculateInvestmentResults } from "./utils/investment";

const DataTable = () => {
  const input = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 15,
    duration: 5,
  };

  const resultData = calculateInvestmentResults(input);

  return (
    <table className="w-full border-collapse mt-8 text-[#66666E]">
      <thead>
        <tr>
          <th className="border border-gray-700 bg-[#e6e6e9] p-4 text-right font-bold">
            Year
          </th>
          <th className="border border-gray-700 bg-[#e6e6e9] p-4 text-right font-bold">
            Investment
          </th>
          <th className="border border-gray-700 bg-[#e6e6e9] p-4 text-right font-bold">
            Interest (Year)
          </th>
          <th className="border border-gray-700 bg-[#e6e6e9] p-4 text-right font-bold">
            Total Interest
          </th>
          <th className="border border-gray-700 bg-[#e6e6e9] p-4 text-right font-bold">
            Total Amount Invested
          </th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-[#9999a1]" : "bg-[#e6e6e9]"}
          >
            <td className="border border-gray-700 p-4 text-right">
              {yearData.year}
            </td>
            <td className="border border-gray-700 p-4 text-right">
              £{yearData.investmentValue.toFixed(2)}
            </td>
            <td className="border border-gray-700 p-4 text-right">
              £{yearData.interest.toFixed(2)}
            </td>
            <td className="border border-gray-700 p-4 text-right">
              £{yearData.totalInterest.toFixed(2)}
            </td>
            <td className="border border-gray-700 p-4 text-right">
              £{yearData.investedCapital.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
