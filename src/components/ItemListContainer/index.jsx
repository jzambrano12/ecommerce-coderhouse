/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { products } from "../../mocks/data";
import Items from "../Items";
import "./styles.css";

function ItemListContainer({ greetings }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const result = new Promise((resolve) =>
      setTimeout(() => resolve(products), 2000)
    );

    result
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="item-list-container">
      <Items productos={productos} />
    </div>
  );
}

export default ItemListContainer;
