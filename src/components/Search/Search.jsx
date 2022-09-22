import React, { useCallback } from "react";
import styles from "./Search.module.scss";

const debounceSearch = (f, delay) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    setTimeout(f, delay, ...args);
  };
};

const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  
  const getQuery = (e) => {
      console.log(e.target.value);
      updatePageNumber(1);
      setSearch(e.target.value);
    };


  const applyQuery = useCallback( 
    debounceSearch(getQuery, 750),
    []
  );

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={applyQuery}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-outline-success fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
