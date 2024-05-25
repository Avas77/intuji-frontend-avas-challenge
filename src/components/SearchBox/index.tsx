import { Tabs } from "../../contexts/TabContext";
import SearchBar from "../SearchBar";
import Tab from "../Tab";
import UserBoxGroup from "../UserBoxGroup";

const SearchBox = () => {
  return (
    <section className="bg-white w-[524px] min-h-[560px] rounded-2xl">
      <SearchBar />
      <Tabs>
        <div className="flex gap-4 pt-4 px-6">
          <Tab value="all">All</Tab>
          <Tab value="teams">Teams</Tab>
          <Tab value="members">Members</Tab>
        </div>
        <UserBoxGroup />
      </Tabs>
    </section>
  );
};

export default SearchBox;
