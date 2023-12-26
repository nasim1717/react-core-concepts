import React, { useEffect, useState } from "react";
import { useWindoWidth } from "./hooks/useWindwoWidth";

const LayoutComponent = () => {
  const onSmallScreen = useWindoWidth(768);
  return (
    <div>
      <h1>You are browsing on {onSmallScreen ? "small" : "large"}</h1>
    </div>
  );
};

export default LayoutComponent;
