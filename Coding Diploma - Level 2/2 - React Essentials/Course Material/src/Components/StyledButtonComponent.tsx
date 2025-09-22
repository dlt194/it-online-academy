import React, { useState } from "react";

export const StyledButtonComponent = ({
  heading,
  button,
}: {
  heading: string;
  button: string;
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const headingStyles: React.CSSProperties = {
    textAlign: "center",
    color: "#4A90E2",
    backgroundColor: "#F0F4F8",
    padding: "16px",
    margin: "10px",
  };

  const buttonStyles: React.CSSProperties = {
    padding: "12px 24px",
    backgroundColor: "#155dfc",
    color: "#FFFFFF",
    border: "2px solid #1447e6",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: "#1447e6",
  };

  const combinedButtonStyle = isHovered
    ? { ...buttonStyles, ...hoverStyle }
    : buttonStyles;

  return (
    <div className="">
      {/* Styled Heading */}
      <h1 style={headingStyles}>{heading}</h1>
      {/* Styled Button */}
      <button
        style={combinedButtonStyle}
        disabled={isDisabled}
        className="styled-button"
        onClick={() => setIsDisabled((prev) => !prev)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isDisabled ? "Disabled" : button}
      </button>
    </div>
  );
};
