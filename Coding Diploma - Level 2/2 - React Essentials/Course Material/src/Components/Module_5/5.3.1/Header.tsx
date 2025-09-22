import { default as JobForm } from "./JobForm";
import "./JobForm.css";

const Header = () => {
  return (
    <>
      <div className="headtop">
        <img className="" src="/logoipsum-389.svg" alt="Logo" />
      </div>
      <JobForm />
    </>
  );
};

export default Header;
