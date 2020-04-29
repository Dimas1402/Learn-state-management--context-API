import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  };
  return (
    <form onSubmit={addMovie}>
      <input
        placeholder="name"
        value={name}
        type="text"
        name="name"
        onChange={updateName}
      />
      <input
        placeholder="price"
        value={price}
        type="text"
        name="price"
        onChange={updatePrice}
      />
      <button>submit</button>
    </form>
  );
};

export default AddMovie;
