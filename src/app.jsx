import React, { useState, useEffect } from "react";
import SearchBox from "./components/searchBox";
import Cards from "./components/cards";
import "./app.css";
const App = () => {
  console.log("Render");
  const [searchField, setsearchField] = useState("");
  const [monsters, setmonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setmonsters(users));
  }, []);

  const getInputValue = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setsearchField(searchField);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        type="search"
        placeholder="Enter Monster Name"
        onChangeHandler={getInputValue}
        className="search-box"
      />
      <Cards monsters={filteredMonsters} />
    </div>
  );
};

export default App;
