import Button from "./Button";
import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import ListGroupCSSIn from "./components/ListGroup/ListGroupCSSIn";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";

// function App() {
//   const districts = [
//     "Hyderabad",
//     "Suraypet",
//     "Khammam",
//     "Nalgonda",
//     "Ranga Reddy",
//   ];

//   const handleSelectedItem = (item: string) => console.log(item);

// return (
//   <div>
//     <ListGroup
//       items={districts}
//       heading="Districts"
//       onSelectItem={handleSelectedItem}
//     />
//   </div>
// );

//   return (
//     <div>
//       <ListGroupCSSIn
//         items={districts}
//         heading="Districts"
//         onSelectItem={handleSelectedItem}
//       />
//     </div>
//   );
// }

// function App() {
//   const [alertVisible, setAlertVisible] = useState(false);
//   const onClick = () => {
//     setAlertVisible(true);
//   };

//   const dismissAlert = () => {
//     setAlertVisible(false);
//   };

//   return (
//     <div>
//       {alertVisible && (
//         <Alert dismissAlert={dismissAlert}>Alert activated</Alert>
//       )}
//       <Button btnType="primary" onClick={onClick}>
//         Click Me
//       </Button>
//     </div>
//   );
// }

// const App = () => {
//   return <Button onClick={() => console.log("clicked!")}>Button</Button>;
// };

// const App = () => {
//   return <Like onClick={() => console.log("Clicked!")}></Like>;
// };

// const App = () => {
//   const [drink, setDrink] = useState({ title: "Americano", price: 5 });

//   const handleClick = () => {
//     drink.price = 7;
//     setDrink(drink);
//   };

//   return (
//     <>
//       <p>
//         {drink.title} {drink.price}
//       </p>
//       <Button onClick={handleClick}>Button</Button>
//     </>
//   );
// };

// const App = () => {
//   const [game, setGame] = useState({ id: 1, player: { name: "John" } });

//   const handleClick = () => {
//     setGame({ ...game, player: { ...game.player, name: "Chatur" } });
//   };

//   return (
//     <>
//       <p>{game.player.name}</p>
//       <Button onClick={handleClick}>Button</Button>
//     </>
//   );
// };

// const App = () => {
//   const [game, setGame] = useState({ id: 1, player: { name: "John" } });

//   const handleClick = () => {
//     setGame({ ...game, player: { ...game.player, name: "Chatur" } });
//   };

//   return (
//     <>
//       <p>{game.player.name}</p>
//       <Button onClick={handleClick}>Button</Button>
//     </>
//   );
// };

const App = () => {
  return (
    <ExpandableText maxChars={40}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio
      nam aut repellendus, eligendi, sit esse voluptates voluptas minima
      dignissimos, libero quo deserunt debitis eveniet voluptatum voluptatem
      ipsa nobis ex sed cumque! Nemo consequatur doloribus aperiam hic
      reprehenderit laudantium dolorum esse ea, enim, laboriosam culpa
      exercitationem qui eveniet! Eveniet ipsam voluptatibus corporis, natus aut
      animi iure, modi nam adipisci nulla commodi ut corrupti voluptates
      recusandae quas reprehenderit fuga voluptate praesentium. Suscipit
      deserunt veritatis officiis adipisci cupiditate assumenda voluptate, fuga,
      eius id beatae exercitationem ex, cum velit possimus porro nostrum est
      aliquid! Repellat voluptate rem numquam, placeat ab accusamus debitis
      alias.
    </ExpandableText>
  );
};

export default App;
