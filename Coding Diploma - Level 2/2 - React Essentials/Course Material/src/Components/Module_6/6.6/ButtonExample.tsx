import Button from "./Button";

const ButtonExample = () => {
  return (
    <div className="flex gap-4 p-6">
      <Button label="Primary Action" color="blue" />
      <Button label="Confirm" color="green" />
      <Button label="Delete" color="red" />
    </div>
  );
};

export default ButtonExample;
