import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Chat = () => {
  const { currentColor, setIsClicked, truncateText } = useStateContext();

  return (
    <div
      className="absolute md:h-auto h-screen overflow-auto z-10 md:top-16 top-0 right-0 md:right-52 md:w-96 w-72 bg-white dark:bg-[#42464D] p-8 rounded-lg "
      style={{ boxShadow: "1px 1px 15px rgb(0 0 0 / 50%)" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button type="button" className="dark:text-gray-400 dark:text-white text-xs rounded p-1 px-2 bg-orange">
            5 New
          </button>
        </div>
        <button
          type="button"
          onClick={() => setIsClicked((prev) => !prev)}
          style={{ color: "rgb(153, 171, 180", borderRadius: "50%" }}
          className="text-2xl md:p-3 p-1 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-4 mb-4">
        {chatData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <img src={item.image} alt={item.desc} className="rounded-full h-10 w-10" />
            <div>
              <p className="font-semibold text-base dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">{truncateText(item.desc)}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      <Button color="white" bgColor={currentColor} text="See all messages" borderRadius="10px" width="full" />
    </div>
  );
};

export default Chat;
