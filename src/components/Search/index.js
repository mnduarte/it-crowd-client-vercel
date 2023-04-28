import { useState } from "react";
import PropTypes from "prop-types";
import { SearchContainer, SearchInput, ArrowIcon } from "./styles";

export const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder="Search for a game..."
        onChange={({ target }) => setValue(target.value)}
        onKeyDown={handleKeyDown}
      />
      <ArrowIcon onClick={() => onSearch(value)} />
    </SearchContainer>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
