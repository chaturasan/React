import { useState } from "react";
import "./ListGroup.css";

function ListGroup({ heading, items, onSelect }) {
  //   const handleEvent = (event) => console.log(event);
  // Hook to notify that this is a state variable
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "active list-group-item"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
