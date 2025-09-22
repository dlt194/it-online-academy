import React from "react";

interface JobFormButtonProps {
  key: string;
  category: string;
  value?: string;
  selected?: boolean;
}

const JobFormButton = ({ key, category, value }: JobFormButtonProps) => {
  const addCSStoButton = {
    "Read Emails": { backgroundColor: "#f87171", color: "white" }, // Red
    "Web Parsing": { backgroundColor: "#34d399", color: "white" }, // Green
    "Send Emails": { backgroundColor: "#60a5fa", color: "white" }, // Blue
    default: { backgroundColor: "#e5e7eb", color: "black" }, // Gray
  };
  return (
    <button key={key} type="button" style={addCSStoButton[category]}>
      {value}
    </button>
  );
};

export default JobFormButton;
