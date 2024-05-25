import React from "react";
import { TabContext } from "../contexts/TabContext";

export function useTabsContext() {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
}
