import React from "react";
import "../component/addItem.css";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/material/Button";

const AddItem = (prop) => {
  return (
    <div className="delete-Item">
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
      <button onClick={() => prop.onSelect(prop.id)} className="close-button">
        X
      </button>
      <div div> {prop.text}</div>
    </div>
  );
};
export default AddItem;
