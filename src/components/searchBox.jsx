import React from "react";
import "./style.css";
const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <div>
      <input
        type="search"
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
