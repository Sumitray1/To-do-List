import { useState } from "react";
import "../component/ToDO.css";
import AddItem from "./AddItem";
function ToDo() {
  const [itemList, setItemList] = useState("");
  const [addedItems, setAddedItems] = useState([]);
  const addItemContent = (event) => {
    setItemList(event.target.value);
  };
  //for desplaying task
  const addTask = () => {
    setAddedItems((oldItems) => {
      return [...oldItems, itemList];
    });
    setItemList("");
  };
  //deleting list
  const deleteList = (id) => {
    console.log("deleted");
    setAddedItems((oldItems) => {
      return oldItems.filter((arrList, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main-form">
        <div className="heading">To Do list</div>
        <div className="adding-place">
          <div>
            <input
              type="text"
              placeholder="Add an item"
              className="input-text"
              onChange={addItemContent}
              value={itemList}
            />
          </div>
          <div>
            <button className="button" onClick={addTask}>
              +
            </button>
          </div>
        </div>
        <div className="list=of-items">
          {addedItems.map((list, ind) => {
            return (
              <AddItem key={ind} id={ind} text={list} onSelect={deleteList} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ToDo;
