import React from "react";
import { MdCopyright } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

const Footer = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="text-center text-sm p-1">
      <MdCopyright color={currentColor} className="inline-block mr-1" />
      <span className="text-gray-400">jldevelops</span>
    </div>
  );
};

export default Footer;
