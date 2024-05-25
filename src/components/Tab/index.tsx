import React from "react";
import { useTabsContext } from "../../hooks/useTabsContext";

const Tab = ({
  value,
  children,
}: {
  children: React.ReactNode | string;
  value: string;
}) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActiveTab = activeTab === value;

  return (
    <p
      onClick={() => setActiveTab(value)}
      className={`cursor-pointer pb-4 ${
        isActiveTab ? "text-blue border-b-2 border-blue" : ""
      }`}
    >
      {children}
      <span className="bg-skyblue rounded-sm px-2 ml-2">9</span>
    </p>
  );
};

export default Tab;
