import React from "react";
import "../component/addItem.css";
const AddItem = (prop) => {
  return (
    <div className="delete-Item">
      <button onClick={() => prop.onSelect(prop.id)}>X</button>
      <div div> {prop.text}</div>
    </div>
  );
};
export default AddItem;
