interface CurrencySelectProps {
  setCurrency: React.Dispatch<React.SetStateAction<"GBP" | "USD" | "EUR">>;
}

const CurrencySelect = ({ setCurrency }: CurrencySelectProps) => {
  return (
    <select
      className="flex-1 border border-gray-200 bg-gray-200 rounded p-2 text-gray-700 focus:text-black focus:outline-none hover:bg-gray-300 transition"
      onChange={(e) => setCurrency(e.target.value as "GBP" | "USD" | "EUR")}
    >
      <option value="GBP">GBP</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
  );
};

export default CurrencySelect;
