import { useMemo } from "react";
import { calculateInvestmentResults } from "./utils/investment";

interface OutputProps {
  input: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
  currency: "GBP" | "USD" | "EUR";
}

const Output = ({ input, currency }: OutputProps) => {
  const resultData = useMemo(() => {
    return calculateInvestmentResults({
      initialInvestment: +input.initialInvestment,
      annualInvestment: +input.annualInvestment,
      expectedReturn: +input.expectedReturn,
      duration: +input.duration,
    });
  }, [input]);

  const currencySymbols: Record<OutputProps["currency"], string> = {
    GBP: "£",
    USD: "$",
    EUR: "€",
  };

  return (
    <div className="px-2">
      <table className="w-full border-collapse mt-8 text-[#66666E]">
        <thead>
          <tr>
            <th className="border border-gray-700 bg-[#e6e6e9] p-4 text-right font-bold">
              Year
            </th>
            <th className="border border-gray-700 bg-[#e6e6e9] p-4 text-right font-bold">
              Investment Value
            </th>
            <th className="border border-gray-700 bg-[#e6e6e9] p-4 text-right font-bold">
              Interest (Year)
            </th>
            <th className="border border-gray-700 bg-[#e6e6e9] p-4 text-right font-bold">
              Total Interest
            </th>
            <th className="border border-gray-700 bg-[#e6e6e9] p-4 text-right font-bold">
              Invested Capital
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
                {currencySymbols[currency] +
                  yearData.investmentValue.toFixed(2)}
              </td>
              <td className="border border-gray-700 p-4 text-right">
                {currencySymbols[currency] + yearData.interest.toFixed(2)}
              </td>
              <td className="border border-gray-700 p-4 text-right">
                {currencySymbols[currency] + yearData.totalInterest.toFixed(2)}
              </td>
              <td className="border border-gray-700 p-4 text-right">
                {currencySymbols[currency] +
                  yearData.investedCapital.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Output;
