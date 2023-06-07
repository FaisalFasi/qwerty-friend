import { useEffect, useState } from "react";

import Keyboard from "./components/keyboard/Keyboard";
function App() {
  const [command, setCommand] = useState("Qwerty Friend");
  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => {
  //     console.log(e.key);
  //   });
  // }, []);

  return (
    <>
      <h1 className="bg-gray-500 text-center py-5  text-white">{command}</h1>
      <Keyboard></Keyboard>
    </>
  );
}

export default App;
