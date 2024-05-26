import search from "../../../public/icons/search.svg";
import cross from "../../../public/icons/cross.svg";

interface ISearchBarProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ name, setName }: ISearchBarProps) => {
  return (
    <div className="flex justify-between items-center px-6 pt-6 pb-3 border border-gray">
      <img src={search} className="w-5 h-5" />
      <input
        placeholder="Contacts"
        className="flex-1 ml-2"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <img
        src={cross}
        className="w-4 h-4 cursor-pointer"
        onClick={() => setName("")}
      />
    </div>
  );
};

export default SearchBar;
