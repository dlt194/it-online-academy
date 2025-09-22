const InVestMe = () => {
  return (
    <div className="m-8 bg-pink-950 min-h-screen rounded-2xl">
      <div className="flex justify-center pt-4">
        <img src="/investme.svg" alt="logo" className="w-full max-w-[450px]" />
      </div>{" "}
      <div className="flex justify-center mt-2 mb-4">
        {" "}
        <h1 className="text-2xl text-gray-300">
          React Investment Calculator
        </h1>{" "}
      </div>
    </div>
  );
};

export default InVestMe;
