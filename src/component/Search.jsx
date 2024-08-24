import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();

  return (
    <>
      <h1>Rohit-Tech Website</h1>
      <form onSubmit={() => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search here..."
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
