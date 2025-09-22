interface ButtonProps {
  label: string;
  color?: "blue" | "green" | "red"; // limit to a few Tailwind color options
}

const Button = ({ label, color = "blue" }: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-md font-semibold text-white transition";

  const colorStyles = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button className={`${baseStyles} ${colorStyles[color]}`}>{label}</button>
  );
};

export default Button;
