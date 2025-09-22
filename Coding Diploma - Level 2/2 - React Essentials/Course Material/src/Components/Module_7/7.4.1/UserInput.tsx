import { useState } from "react";

interface UserInputProps {
  userInput: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
  setUserInput: React.Dispatch<
    React.SetStateAction<{
      initialInvestment: number;
      annualInvestment: number;
      expectedReturn: number;
      duration: number;
    }>
  >;
  currency: "GBP" | "USD" | "EUR";
}

const UserInput = ({ userInput, setUserInput, currency }: UserInputProps) => {
  const [error, setError] = useState("");

  const handleChange = (
    inputId: string,
    val: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = val.target.valueAsNumber;
    let errorMsg = "";

    switch (inputId) {
      case "initialInvestment":
        if (value < 1) {
          errorMsg = `Initial investment should be greater than ${currency}1`;
        }
        break;
      case "annualInvestment":
        if (value < 1) {
          errorMsg = `Annual investment should be greater than ${currency}1`;
        }
        break;
      case "expectedReturn":
        if (value < 1) {
          errorMsg = `Expected Return should be greater than 1%`;
        }
        break;
      case "duration":
        if (value < 1) {
          errorMsg = `Duration should be greater than 1 year`;
        }
        break;

      default:
        errorMsg = "";
    }

    setError(errorMsg);
    setUserInput((prev) => ({ ...prev, [inputId]: value }));
  };

  const currencySymbols: Record<UserInputProps["currency"], string> = {
    GBP: "£",
    USD: "$",
    EUR: "€",
  };

  return (
    <form action="">
      <div className="max-w-4xl mx-auto flex justify-evenly gap-6 mt-6">
        <p>
          <label className="text-gray-300">
            Initial Investment ({currencySymbols[currency]})
          </label>
          <input
            className="border border-gray-200 rounded p-2 my-1 text-gray-300"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e)}
          />
        </p>
        <p>
          <label className="text-gray-300">
            Annual Investment ({currencySymbols[currency]})
          </label>
          <input
            className="border border-gray-200 rounded p-2 my-1 text-gray-300"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e)}
          />
        </p>
        <p>
          <label className="text-gray-300">Expected Return (%)</label>
          <input
            className="border border-gray-200 rounded p-2 my-1 text-gray-300"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e)}
          />
        </p>
        <p>
          <label className="text-gray-300">Duration (Years)</label>
          <input
            className="border border-gray-200 rounded p-2 my-1 text-gray-300"
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e)}
          />
        </p>
      </div>
      {error && (
        <p className="bg-gray-200 text-red-600 max-w-4xl mx-auto px-2 text-center rounded items-center my-2">
          {error}
        </p>
      )}
    </form>
  );
};

export default UserInput;
