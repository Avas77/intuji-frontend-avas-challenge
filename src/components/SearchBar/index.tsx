import search from "../../../public/icons/search.svg";
import cross from "../../../public/icons/cross.svg";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center px-6 pt-6 pb-3">
      <div className="flex items-center">
        <img src={search} className="w-5 h-5" />
        <input placeholder="Contacts" />
      </div>
      <img src={cross} className="w-4 h-4" />
    </div>
  );
};

export default SearchBar;
