import { useState } from "react";

import Header from "./Header";
import UserInput from "./UserInput";
import UserOptions from "./UserOptions";

const InVestMe = () => {
  const initialState = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(initialState);

  const [currency, setCurrency] = useState<"GBP" | "USD" | "EUR">("GBP");

  const handleReset = () => {
    setUserInput({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0,
    });
  };

  return (
    <div className="m-8 bg-pink-950 min-h-screen rounded-2xl">
      <Header
        title="React Investment Calculator"
        subTitle="Plan - Project - Grow"
      />

      <UserInput
        userInput={userInput}
        setUserInput={setUserInput}
        currency={currency}
      />

      <UserOptions handleReset={handleReset} setCurrency={setCurrency} />
    </div>
  );
};

export default InVestMe;
