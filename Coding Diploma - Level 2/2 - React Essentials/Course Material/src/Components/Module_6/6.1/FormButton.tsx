import "./FormButton.css";
const FormButton = ({ value, selectCategory }) => {
  return (
    <div>
      <button
        type="button"
        className="formButton"
        onClick={() => selectCategory(value)}
      >
        {value}
      </button>
    </div>
  );
};

export default FormButton;
