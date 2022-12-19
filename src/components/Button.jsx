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
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width} bg-gradient-to-r from-[#877A7A] to-[#3E97F5]`}
    >
      {text}
    </button>
  );
};

export default Button;
