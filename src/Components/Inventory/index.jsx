import "./index.css";
import groceryProducts from "./Grocery.js";
import { useEffect, useRef, useState } from "react";

function Inventory() {
  const [selectedItem, setSelectedItem] = useState(
    JSON.parse(localStorage.getItem("array")) || []
  );

  const [totalCost, setTotalCost] = useState(0);

  function addProduct({ id, name, price }) {
    const existingItem = selectedItem.find((item) => item.id === id);
    if (existingItem) {
      setSelectedItem(
        selectedItem.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setSelectedItem([...selectedItem, { id, name, price, count: 1 }]);
    }
  }

  function clearSelected() {
    setSelectedItem([]);
    localStorage.removeItem("array");
    setTotalCost(0);
  }

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(selectedItem));
    let total = 0;
    selectedItem.forEach((item) => {
      total += item.price * item.count;
      setTotalCost(total);
    });
  }, [selectedItem]);

  return (
    <div className="inventory">
      <input type="text" />

      <div className="container">
        {groceryProducts.map((ele, index) => (
          <div
            className="item"
            key={index}
            onClick={() =>
              addProduct({ id: ele.id, name: ele.name, price: ele.price * 10 })
            }
          >
            {ele.name}- Rs. {ele.price * 10}
          </div>
        ))}
      </div>

      <h3>Selected Products</h3>
      <h4>Total Cost: Rs. {totalCost}</h4>
      <div className="product">
        {selectedItem.map((ele, index) => (
          <div className="selected-item" key={index}>
            {ele.name} <span>×{ele.count}</span>
          </div>
        ))}
      </div>
      <br />

      <button onClick={() => clearSelected()}>Clear</button>
    </div>
  );
}

export default Inventory;
