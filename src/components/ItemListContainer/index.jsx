/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./styles.css";

function ItemListContainer({ greetings }) {
  async function getPokemon() {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

    return result;
  }

  useEffect(() => {
    getPokemon()
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return <div className="item-list-container"></div>;
}

export default ItemListContainer;
