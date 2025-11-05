const Search = ({
  // Destructure props
  searchTerm,
  setSearchTerm,
}) => {

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        {/* Controlled input for search term */}
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
