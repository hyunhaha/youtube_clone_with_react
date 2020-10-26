import React from "react";
import { useRef } from "react";
import styles from "./search.module.css";
const Search = props => {
  const inputRef = useRef();
  const handelSearch = () => {
    console.log(inputRef.current.value);
    props.onSearch(inputRef.current.value);
  };
  const onKeyPress = event => {
    if (event.key === "Enter") {
      handelSearch();
    }
  };
  const onClick = () => {
    handelSearch();
  };
  const onLogoClick = () => {
    console.log("logo click");
    props.onLogoClick();
    inputRef.current.value = "";
  };
  return (
    <header>
      <div className={styles.logo} onClick={onLogoClick}>
        <img className={styles.image} src="/images/logo.png" alt="" />
        <h1 className={styles.title}>YOUTUBE</h1>
      </div>

      <input
        className={styles.input}
        ref={inputRef}
        type="text"
        onKeyPress={onKeyPress}
      />
      <button type="submit" className={styles.button} onClick={onClick}>
        <img className={styles.buttonimage} src="/images/search.png" alt="" />
      </button>
    </header>
  );
};

export default Search;
