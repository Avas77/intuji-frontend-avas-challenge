import React from "react";

interface IContextProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const TabContext = React.createContext<IContextProps | null>(null);

export const Tabs = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = React.useState("all");
  return (
    <TabContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
