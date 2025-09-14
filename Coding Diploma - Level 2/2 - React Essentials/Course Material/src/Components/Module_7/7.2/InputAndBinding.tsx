import { useState } from "react";
import OutputResults from "./OutputResults";

const InputAndBinding = () => {
  const [inputCust, setInputCust] = useState({
    begInvestment: 4000,
    annInvestment: 1200,
    returnInvestment: 6,
    yearInvestment: 35,
  });

  function callUserInput(
    inputId: string,
    val: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = val.target.value;
    setInputCust((prev) => ({ ...prev, [inputId]: value }));
  }

  return (
    <div className="">
      <div className="flex justify-evenly gap-6">
        <p>
          <label>Beginning Investments</label>
          <input
            className="border border-gray-200 rounded p-2 my-1"
            type="number"
            required
            value={inputCust.begInvestment}
            onChange={(e) => callUserInput("begInvestment", e)}
          />
        </p>
        <p>
          <label>Annual Investments</label>
          <input
            className="border border-gray-200 rounded p-2 my-1"
            type="number"
            required
            value={inputCust.annInvestment}
            onChange={(e) => callUserInput("annInvestment", e)}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            className="border border-gray-200 rounded p-2 my-1"
            type="number"
            required
            value={inputCust.returnInvestment}
            onChange={(e) => callUserInput("returnInvestment", e)}
          />
        </p>
        <p>
          <label>Yearly Investments</label>
          <input
            className="border border-gray-200 rounded p-2 my-1"
            type="number"
            required
            value={inputCust.yearInvestment}
            onChange={(e) => callUserInput("yearInvestment", e)}
          />
        </p>
      </div>
      <OutputResults input={inputCust} />
    </div>
  );
};

export default InputAndBinding;
