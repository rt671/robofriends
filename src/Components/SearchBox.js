import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <input className="bg-light-blue pa2 b--green mb4" type="search" placeholder="search" onChange={searchChange}></input>
    );
}

export default SearchBox;