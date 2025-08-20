const TicketInfo = ({
  title,
  color,
  icon,
  children,
}: {
  title: string;
  color: string;
  icon: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-xl bg-white p-6 text-center shadow-xl">
      <div
        className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg ${color}`}
      >
        <img className="h-12 w-12" src={`/${icon}.svg`} alt="" />
      </div>
      <h1 className="text-darken text-xl font-medium lg:h-14 lg:px-14">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default TicketInfo;
