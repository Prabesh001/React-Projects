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

  const filteredProduct = groceryProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  function searchQuery(e) {
    query.length > 30 ? setQuery("") : setQuery(e.target.value);
  }

  function addProduct(product) {
    const existingItem = selectedItem.find((item) => item.id === product.id);
    if (existingItem) {
      setSelectedItem(
        selectedItem.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setSelectedItem([{ ...product, count: 1 }, ...selectedItem]);
    }
  }

  const generateHTML = (products) => {
    return products.map((ele, index) => (
      
      <>
        <div className="item" title={ele.description} key={index}>
          <span>
            {ele.name}- Rs. {ele.price * 10}
          </span>
          <button
            className="add-btn"
            onClick={() => {
              addProduct(ele);
            }}
          >
            +
          </button>
        </div>
      </>
    ));
  };

  function clearSelected() {
    localStorage.removeItem("array");
    setSelectedItem([]);
    setTotalCost(0);
    setNoOfItems(0);
  }

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(selectedItem));
    localStorage.setItem("search", query);
    let total = 0;
    let number = 0;
    selectedItem.forEach((item) => {
      total += item.price * 10 * item.count;
      setTotalCost(total);
      number += item.count;
    });
    setNoOfItems(number);
  }, [selectedItem, query]);

  return (
    <div className="inventory">
      <h1>Inventory</h1>

      <input
        type="text"
        value={query}
        onChange={(event) => searchQuery(event)}
      />
      <button className="clear-button" onClick={() => setQuery("")}>
        Clear Search
      </button>

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
          <div className="selected-item" title={ele.name} key={index}>
            {ele.name} <span title={ele.count}>×{ele.count}</span>
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
