import { useState } from "react";
import { Tabs } from "../../contexts/TabContext";
import SearchBar from "../SearchBar";
import Tab from "../Tab";
import UserBoxGroup from "../UserBoxGroup";

const SearchBox = () => {
  const [name, setName] = useState("");

  return (
    <section className="bg-white w-[524px] rounded-2xl min-h-[612px]">
      <SearchBar setName={setName} name={name} />
      <Tabs>
        <div className="flex gap-4 pt-4 px-6">
          <Tab value="all">All</Tab>
          <Tab value="teams">Teams</Tab>
          <Tab value="members">Members</Tab>
        </div>
        <UserBoxGroup name={name} />
      </Tabs>
    </section>
  );
};

export default SearchBox;
