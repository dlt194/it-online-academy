import { default as Header } from "../5.1/Header";

const ScheduledTaskForms = () => {
  return (
    <>
      <Header />
      <div className="mt-10 py-7.5 px-[8%] flex justify-evenly">
        <section className="w-1/3 bg-[#237c38] text-white px-2 py-1 m-10">
          Section 1
        </section>
        <section className="w-1/3 bg-[#237c38] text-white px-2 py-1 m-10">
          Section 2
        </section>
        <section className="w-1/3 bg-[#237c38] text-white px-2 py-1 m-10">
          Section 3
        </section>
      </div>
    </>
  );
};

export default ScheduledTaskForms;
