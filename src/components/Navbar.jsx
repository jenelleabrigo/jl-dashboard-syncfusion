import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/jldevelops.svg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 dark:text-white">
      <span style={{ background: dotColor }} className="absolute inline-flex bg-white rounded-full h-2 w-2 right-2 top-2"></span>
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [setActiveMenu, screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" dotColor="transparent" customFunc={() => setActiveMenu((prev) => !prev)} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton title="Cart" customFunc={() => handleClick("cart")} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#fff" customFunc={() => handleClick("chat")} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notifications" dotColor="#fff" customFunc={() => handleClick("notification")} color={currentColor} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 rounded-lg" onClick={() => handleClick("userProfile")}>
            <img src={avatar} alt="avatar" className="rounded-full w-8 h-8" />
            <p className="md:block hidden">
              <span className="text-white text-14">Hi,</span> {""}
              <span className="text-white font-bold ml-1 text-14">JL Develops</span>
            </p>
            <MdKeyboardArrowDown className="text-white text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
