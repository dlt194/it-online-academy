import "./FormButton.css";

const FormButton = ({ content = "Default Text" }: { content?: string }) => {
  return <button className="formButton">{content}</button>;
};

export default FormButton;
