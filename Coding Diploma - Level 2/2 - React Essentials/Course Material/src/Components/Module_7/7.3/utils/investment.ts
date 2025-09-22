interface Investment {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: Investment) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    const investedCapital = initialInvestment + annualInvestment * (i + 1);
    const totalInterest = investmentValue - investedCapital;

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      investmentValue,
      annInvestment: annualInvestment,
      totalInterest,
      investedCapital,
    });
  }

  return annualData;
}
