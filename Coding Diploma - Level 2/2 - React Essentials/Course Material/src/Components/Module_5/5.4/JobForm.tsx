import FormButton from "./FormButton";

const JobForm = () => {
  return (
    <div className="formheader">
      <form>
        <input type="text" placeholder="Enter the Job" className="job_input" />
        <div className="formdetails">
          <div className="bottomline">
            <FormButton content="Read Emails" />
            <FormButton content="Web Parsing" />
            <FormButton content="Send Emails" />
            <div className="job_status_container">
              <select name="" id="" className="job_status">
                <option value="start">Start Process</option>
                <option value="running">Running</option>
                <option value="completed">Completed</option>
                <option value="stopped">Stopped</option>
              </select>
              <button type="submit" className="submit_data">
                Add Job
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
