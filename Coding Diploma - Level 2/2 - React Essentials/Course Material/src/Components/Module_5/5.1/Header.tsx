import { default as JobForm } from "./JobForm";

const Header = () => {
  return (
    <>
      <div className="flex items-center">
        <img className="mx-2 my-4" src="/logoipsum-389.svg" alt="Logo" />
        <a className="mx-2 text-blue-600 underline" href="#">
          Home
        </a>
      </div>
      <JobForm />
    </>
  );
};

export default Header;
