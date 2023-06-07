import { useEffect, useState } from "react";

export default function Keyboard() {
  const keys = [
    [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "=",
      "?",
      "`",
      "backspace",
    ],
    ["tab", "Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
    ["caps ", "A", "S", "D", "F", "G", "H", "J", "K", "L", "'", "return"],
    ["shift", "<", "Y", "X", "C", "V", "B", "N", "M", ",", ".", "-", "shift"],
    ["ctrl", "alt", "cmd", " ", "cmd", "alt", "<", "v", "^", ">"],
  ];
  const [clickedBtn, setClickedBtn] = useState([]);

  function clickHandle(key) {
    const updateClickedBtn = [...clickedBtn, key.toLowerCase()];
    setClickedBtn(updateClickedBtn);
    console.log(updateClickedBtn);
  }

  useEffect(() => {
    document.addEventListener("keydown", keyboardBtnPress);

    function keyboardBtnPress(e) {
      const updateClickedBtn = [...clickedBtn, e.key.toLowerCase()];
      setClickedBtn(updateClickedBtn);
      console.log(updateClickedBtn);
    }
    return () => {
      document.removeEventListener("keydown", keyboardBtnPress);
    };
  }, [clickedBtn]);

  // function updateURL() {
  //   const getCurrentUrl = window.location.href;

  //   console.log(getCurrentUrl);

  //   const newSearchParams = new URLSearchParams(window.location.search);
  //   newSearchParams.set("command", updatedCommand.join("-"));
  // }
  // const [currentURL, setCurrentURL] = useState([]);

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   const commandParam = searchParams.get("command");
  //   const initialState = commandParam ? commandParam.split("_") : [];
  //   setCurrentURL(initialState);
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 p-5 ">
      {keys.map((key, index) => {
        return (
          <div key={index + "key"} className="flex mx-10 w-full ">
            {key.map((pressedBtn, btnIndex) => {
              return (
                <button
                  key={btnIndex + "key"}
                  className={` bg-gray-400 text-white p-2 m-2 w-1/2 h-10  ${
                    clickedBtn.includes(pressedBtn.toLowerCase())
                      ? " bg-blue-500"
                      : " bg-gray-200"
                  }`}
                  onClick={() => clickHandle(pressedBtn)}
                >
                  {pressedBtn}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
