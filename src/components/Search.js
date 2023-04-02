import React from "react";

export const Search = ({ findFreshData, setSearchedCity, searchedCity }) => {
  return (
    <>
      <div className="search-box">
        <input
          style={{ color: "black" }}
          type="text"
          placeholder="Enter city or country name"
          value={searchedCity}
          onChange={(e) => setSearchedCity(e.target.value)}
        />
        <button onClick={findFreshData}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  );
};
