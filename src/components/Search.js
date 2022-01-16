import React, { useState } from "react";

const Search = ({ search }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div id="search">
      <form
        id="searchAPI"
        onSubmit={(e) => {
          e.preventDefault();
          search(value);
        }}
      >
        <label>
          <input
            type="text"
            placeholder="Enter search term..."
            id="term"
            name="term"
            value={value}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Search"></input>
      </form>
      {value && <h1>Searching for terms:{value}</h1>}
    </div>
  );
};

export default Search;
