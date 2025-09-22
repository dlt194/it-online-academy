const JobForm = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter the Job"
          className="mx-2 border border-gray-300 rounded min-w-1/3 my-4 pl-2"
        />
        <div className="">
          <div className="flex">
            <button className="mx-2 border p-1 border-black shadow rounded hover:bg-gray-200">
              Read Emails
            </button>
            <button className="mx-2 border p-1 border-black shadow rounded hover:bg-gray-200">
              Web Parsing
            </button>
            <button className="mx-2 border p-1 border-black shadow rounded hover:bg-gray-200">
              Send Emails
            </button>
          </div>
          <div className="flex m-2">
            <select
              name=""
              id=""
              className="border p-1 border-black shadow rounded hover:bg-gray-200"
            >
              <option value="start">Start Process</option>
              <option value="running">Running</option>
              <option value="completed">Completed</option>
              <option value="stopped">Stopped</option>
            </select>
            <button
              type="submit"
              className="mx-2 border p-1 border-black shadow rounded hover:bg-gray-200"
            >
              Add Job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
