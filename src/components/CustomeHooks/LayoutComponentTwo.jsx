import React, { useEffect, useState } from "react";
import { useWindoWidth } from "./hooks/useWindwoWidth";

const LayoutComponentTwo = () => {
  const onSmallScreen = useWindoWidth(768);

  return (
    <div className={onSmallScreen ? "small" : "large"}>
      <h1>This is another component</h1>
    </div>
  );
};

export default LayoutComponentTwo;
