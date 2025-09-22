interface Investment {
  begInvestment: number;
  annInvestment: number;
  returnInvestment: number;
  yearInvestment: number;
}

export function calculateInvestmentResults({
  begInvestment,
  annInvestment,
  returnInvestment,
  yearInvestment,
}: Investment) {
  const annualData = [];
  let investmentValue = begInvestment;

  for (let i = 0; i < yearInvestment; i++) {
    const interestEarnedInYear = investmentValue * (returnInvestment / 100);
    investmentValue += interestEarnedInYear + annInvestment;

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annInvestment: annInvestment,
    });
  }

  return annualData;
}
