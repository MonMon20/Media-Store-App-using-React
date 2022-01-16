const Search = ({ search, term, setTerm }) => {
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div id="search">
      <form
        id="searchAPI"
        onSubmit={(e) => {
          e.preventDefault();
          search(term);
        }}
      >
        <label>
          <input
            type="text"
            placeholder="Enter search term..."
            id="term"
            name="term"
            value={term}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Search"></input>
      </form>
      {term && <h1>Searching for terms:{term}</h1>}
    </div>
  );
};

export default Search;
