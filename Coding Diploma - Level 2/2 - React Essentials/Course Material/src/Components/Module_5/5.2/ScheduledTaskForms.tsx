import Header from "./Header";

const ScheduledTaskForms = () => {
  return (
    <>
      <Header />
      <div className="mt-10">
        <div className="container mx-auto px-4 md:px-8">
          {/* Responsive 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <section className="bg-[#237c38] text-white px-3 py-2 rounded-lg shadow">
              Section 1
            </section>
            <section className="bg-[#237c38] text-white px-3 py-2 rounded-lg shadow">
              Section 2
            </section>
            <section className="bg-[#237c38] text-white px-3 py-2 rounded-lg shadow">
              Section 3
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduledTaskForms;
