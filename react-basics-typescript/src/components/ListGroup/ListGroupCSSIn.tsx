import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

interface ListItemsProps {
  active: boolean;
}

const ListItem = styled.li<ListItemsProps>`
  padding: 5px;
  background: ${(props) => props.active && "blue"};
`;

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

const ListGroupCSSIn = ({ heading, items, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default ListGroupCSSIn;
