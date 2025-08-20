import React from "react";

const HeaderComponent = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex">
            <img src="/logoipsum-389.svg" alt="Logo" className="h-8" />
            <h1 className="ml-2 text-2xl font-bold">
              React Essentials - Building a Modular Job Board Application
            </h1>
          </div>
          <input
            required
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Job..."
            className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block min-w-[25%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
