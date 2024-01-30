import { useState } from "react";
import Alert from "./Components/Alert";
import { Button } from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {
  const districts = [
    "Hyderabad",
    "Suraypet",
    "Khammam",
    "Nalgonda",
    "Ranga Reddy",
  ];

  const handleSelectedItem = (item) => console.log(item);

  return (
    <div>
      <ListGroup
        items={districts}
        heading="Districts"
        onSelect={handleSelectedItem}
      />
    </div>
  );
}

// function App() {
//   const [alertVisibiltiy, setAlertVisibiltiy] = useState(false);
//   return (
//     <>
//       {alertVisibiltiy && (
//         <Alert onClose={() => setAlertVisibiltiy(false)}>
//           This is an alert{" "}
//         </Alert>
//       )}

//       <Button onClick={() => setAlertVisibiltiy(true)} color="primary">
//         Click Me
//       </Button>
//     </>
//   );
// }

export default App;
