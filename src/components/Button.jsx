import React from "react";

const Button = ({ bgColor, color, text, size, borderRadius, width }) => {
  return (
    <button
      type="button"
      style={{
        background: bgColor,
        color,
        borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width}`}
    >
      {text}
    </button>
  );
};

export default Button;
