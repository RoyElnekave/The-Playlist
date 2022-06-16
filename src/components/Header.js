import React, { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";
import "./songs.css";
export default function Header() {
  const { setSongList } = useContext(MainContext);
  const [input, setInput] = useState("");

  const setSong = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = () => {
    setSongList(input);
  };
  return (
    <>
      <header>
        <h1 className="title">Best Music App</h1>
      <Search search={handleSearch} getSong={setSong} />
      </header>
    </>
  );
}

function Search(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={props.getSong}
      ></input>
      <button className="buttonsearch" onClick={props.search}>🔍</button>
    </div>
  );
}
