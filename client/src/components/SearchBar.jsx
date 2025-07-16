import "../style/SearchBar.css";
import searchIcon from "../assets/icons/search.png";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for shoes..."
        className="search-input"
      />
      <button className="search-button">
        <img src={searchIcon} alt="Search" className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
