export const CourseSectionComponent = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">{title}</h2>
        <div className="prose max-w-none">{children}</div>
      </section>
    </>
  );
};
