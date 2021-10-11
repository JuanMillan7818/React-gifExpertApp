import React, { useState } from "react";
import PropTypes from 'prop-types';
import Search from "../img/search.png";

const inputSearch = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length > 2 ) {
      setCategories(cats => [ inputValue, ...cats]);
      setInputValue('');
    }
  }

  return (
    <React.Fragment>
      <div id="input-container">
        <form onSubmit={handleInputSubmit}>
          <input
            className="input-search"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="   Palabra clave a buscar"
          />
          <i>
            <img src={Search} alt="Search" id="search-img" />
          </i>
        </form>
      </div>
    </React.Fragment>
  );
};

inputSearch.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export default inputSearch;
