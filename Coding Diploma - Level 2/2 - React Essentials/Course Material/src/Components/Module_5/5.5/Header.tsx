import { default as JobForm } from "./JobForm";
import "./JobForm.css";

const Header = () => {
  return (
    <>
      <div className="headtop">
        <img className="" src="/logoipsum-389.svg" alt="Logo" />
        <a className="text-blue-500 underline" href="#">
          Home
        </a>
      </div>
      <JobForm />
    </>
  );
};

export default Header;
