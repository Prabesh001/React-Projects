import React, { useState } from "react";
import data from "./data.js";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null );
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId){
    let m = [...multiple];
    const findIndexOfCurrentId = m.indexOf(getCurrentId)
    if(findIndexOfCurrentId === -1) m.push(getCurrentId)
      else m.splice(findIndexOfCurrentId, 1)

    setMultiple(m)
  }

  return (
    <div className="wrapper">
      <button onClick={()=>{setEnableMultiSelection(!enableMultiSelection)}}>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={index}>
              <div
                className="title"
                onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span className="answer">+</span>
              </div>
              {
                enableMultiSelection ? 
                multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="content">{dataItem.answer}</div>
                )
                : selected === dataItem.id && (
                  <div className="content">{dataItem.answer}</div>
                )
              }
              {/* {
                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1  ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null
              } */}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
