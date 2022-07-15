import React from "react";

interface ButtonProps {
  label: string;
  handleClick: () => void;
}
export const Button = (props: ButtonProps) => {
  const { label, handleClick } = props;
  return (
    <button
      style={{ padding: "5px", margin: "5px", fontSize: "1rem" }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
