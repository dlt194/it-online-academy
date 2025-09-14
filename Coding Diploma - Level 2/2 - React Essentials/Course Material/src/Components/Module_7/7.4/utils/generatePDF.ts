import jsPDF from "jspdf";

interface AnnualData {
  year: number;
  investmentValue: number;
  interest: number;
  totalInterest: number;
  investedCapital: number;
}

interface PdfData {
  begInvestment: number;
  annInvestment: number;
  returnInv: number;
  yearInv: number;
  resultData: AnnualData[];
}

export function generatePdf(data: PdfData) {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(20);
  doc.text("Investment Report", 10, 15);

  // Summary
  doc.setFontSize(12);
  doc.text(`Beginning Investment: ${data.begInvestment}`, 10, 30);
  doc.text(`Annual Investment: ${data.annInvestment}`, 10, 40);
  doc.text(`Return on Investment: ${data.returnInv}%`, 10, 50);
  doc.text(`Years of Investment: ${data.yearInv}`, 10, 60);

  // Table header
  let yOffset = 80;
  doc.setFontSize(10);
  doc.text("Year", 10, yOffset);
  doc.text("Investment Value", 40, yOffset);
  doc.text("Interest", 90, yOffset);
  doc.text("Total Interest", 130, yOffset);
  doc.text("Invested Capital", 170, yOffset);

  yOffset += 10;
  const pageHeight = doc.internal.pageSize.height;

  // Table rows
  data.resultData.forEach((row) => {
    if (yOffset > pageHeight - 20) {
      doc.addPage();
      yOffset = 20; // reset for new page
    }

    doc.text(row.year.toString(), 10, yOffset);
    doc.text(row.investmentValue.toFixed(2), 40, yOffset);
    doc.text(row.interest.toFixed(2), 90, yOffset);
    doc.text(row.totalInterest.toFixed(2), 130, yOffset);
    doc.text(row.investedCapital.toFixed(2), 170, yOffset);

    yOffset += 10;
  });

  // Save the PDF
  doc.save("investment-report.pdf");
}
