import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ heading, items, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className={[styles.listGroup, styles.container].join(" ")}>
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
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
