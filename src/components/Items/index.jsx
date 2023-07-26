import Item from "../Item";

function Items({ productos }) {
  return productos.map((data) => <Item data={data} />);
}

export default Items;
