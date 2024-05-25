import search from "../../../public/icons/search.svg";
import cross from "../../../public/icons/cross.svg";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center px-6 pt-6 pb-3 border border-gray">
      <img src={search} className="w-5 h-5" />
      <input placeholder="Contacts" className="text-gray flex-1 ml-2" />
      <img src={cross} className="w-4 h-4" />
    </div>
  );
};

export default SearchBar;
