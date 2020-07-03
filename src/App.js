import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search";

const App = () => {
  const [items, seItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      seItems(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
