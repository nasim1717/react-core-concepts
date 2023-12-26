import { useEffect, useState } from "react";

const useWindoWidth = (screenSize) => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  const checkScreenSize = () => {
    console.log("render");
    setOnSmallScreen(window.innerWidth < screenSize);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return onSmallScreen;
};

export { useWindoWidth };
