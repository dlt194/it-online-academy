const TicketDisplay = ({
  id,
  customerName,
  issueLogged,
  resolutionStatus,
  dateLogged,
  children,
}: {
  id: number;
  customerName: string;
  issueLogged: string;
  resolutionStatus: string;
  dateLogged: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      key={id}
      className="flex items-start rounded-xl bg-white p-4 mb-4 shadow-xl"
    >
      {/* Left section: customer name + date */}
      <div className="w-1/4 pr-4 text-left">
        <h3 className="font-semibold">Customer: {customerName}</h3>
        <p className="text-sm text-gray-500">Logged: {dateLogged}</p>
        <p className="mt-2 text-sm text-gray-600">Status: {resolutionStatus}</p>
      </div>

      {/* Middle section: multiline issue */}
      <div className="flex-1 px-4 text-left">
        <h3 className="font-semibold">Issue Logged</h3>
        <p className="whitespace-pre-line">{issueLogged}</p>
      </div>

      {/* Right section: resolve button */}
      <div className="w-1/5 flex justify-end">{children}</div>
    </div>
  );
};

export default TicketDisplay;
