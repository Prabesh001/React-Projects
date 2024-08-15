import "./index.css";
import groceryProducts from "./Grocery.js";
import { useEffect, useState } from "react";

function Inventory() {
  const [selectedItem, setSelectedItem] = useState(
    JSON.parse(localStorage.getItem("array")) || []
  );

  const [totalCost, setTotalCost] = useState(0);
  const [noOfItems, setNoOfItems] = useState(0);
  const [query, setQuery] = useState(localStorage.getItem("search") || "");

  function searchQuery(e) {
    setQuery(e.target.value);
  }

  function addProduct({ id, name, price }) {
    const existingItem = selectedItem.find((item) => item.id === id);
    if (existingItem) {
      setSelectedItem(
        selectedItem.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setSelectedItem([{ id, name, price, count: 1 }, ...selectedItem]);
    }
  }

  const generateHTML = (products) => {
    return products.map((ele, index) => (
      <div
        className="item"
        title={ele.name}
        key={index}
        onClick={() =>
          addProduct({ id: ele.id, name: ele.name, price: ele.price * 10 })
        }
      >
        {ele.name}- Rs. {ele.price * 10}
      </div>
    ));
  };

  function clearSelected() {
    setSelectedItem([]);
    localStorage.removeItem("array");
    setTotalCost(0);
    setNoOfItems(0);
  }

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(selectedItem));
    localStorage.setItem("search", query);
    let total = 0;
    let number = 0;
    selectedItem.forEach((item) => {
      total += item.price * item.count;
      setTotalCost(total);
      number += item.count;
    });
    setNoOfItems(number);
  }, [selectedItem, query]);

  const filteredProduct = groceryProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="inventory">
      <h1>Inventory</h1>

      <input
        type="text"
        value={query}
        onChange={(event) => searchQuery(event)}
      />

      <div className="container">
        {query === "" ? (
          generateHTML(groceryProducts)
        ) : filteredProduct.length > 0 ? (
          generateHTML(filteredProduct)
        ) : (
          <span className="search-error">
            <em>*There is no {query}*</em>
          </span>
        )}
      </div>

      <h3>Selected Products</h3>
      <h4>Total Cost: Rs. {totalCost}</h4>
      <h5>Items: {noOfItems}</h5>
      <div className="product">
        {selectedItem.map((ele, index) => (
          <div className="selected-item" key={index}>
            {ele.name} <span>×{ele.count}</span>
          </div>
        ))}
      </div>
      <br />

      <button className="clear-button" onClick={() => clearSelected()}>
        Clear
      </button>
    </div>
  );
}

export default Inventory;
