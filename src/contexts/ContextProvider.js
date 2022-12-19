import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  //theme
  const [currentMode, setCurrentMode] = useState(localStorage.getItem("themeMode"));
  const [currentColor, setCurrentColor] = useState(localStorage.getItem("colorMode"));
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    console.log(e.target.value);
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    console.log(color);
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const truncateText = (text) => `${text.slice(0, 10)}...`;

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setColor,
        setMode,
        currentMode,
        currentColor,
        themeSettings,
        setThemeSettings,
        truncateText,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
