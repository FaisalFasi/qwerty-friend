import { useEffect, useState } from "react";

import Keyboard from "./components/keyboard/Keyboard";
function App() {
  return (
    <>
      <h1 className="bg-gray-500 text-center py-5  text-white">
        "Qwerty Friend"
      </h1>
      <Keyboard />
    </>
  );
}

export default App;
