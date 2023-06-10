import { useEffect, useState } from "react";
import keyBoardRows from "./qwertz.json";

export default function Keyboard() {
  const [clickedBtns, setClickedBtn] = useState([]);
  const [firstTimeLoading, setFirstTimeLoading] = useState(true);

  function clickHandle(key) {
    const updateClickedBtn = [...clickedBtns, key.toLowerCase()];
    setClickedBtn(updateClickedBtn);
    // console.log(updateClickedBtn);
  }

  function updateURL() {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("command", clickedBtns.join("-"));

    const newURL = `${window.location.origin}${
      window.location.pathname
    }?${queryParams.toString()}`;

    window.history.pushState(null, "", newURL);
  }

  useEffect(() => {
    if (firstTimeLoading) {
      try {
        const newUrl = window.location.search;
        const pressedBtns = newUrl.split("command=")[1];

        setClickedBtn(pressedBtns.split("-"));

        return setFirstTimeLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    updateURL();

    document.addEventListener("keydown", keyboardBtnPress);

    function keyboardBtnPress(e) {
      const updateClickedBtn = [...clickedBtns, e.key.toLowerCase()];
      setClickedBtn(updateClickedBtn);
    }

    return () => {
      document.removeEventListener("keydown", keyboardBtnPress);
    };
  }, [clickedBtns]);

  function resetURLHandler() {
    setClickedBtn([""]);
  }
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 p-5 ">
      {keyBoardRows.map((row, index) => {
        return (
          <div key={index + "key"} className="flex mx-10 w-full ">
            {row.map((key, btnIndex) => {
              return (
                <button
                  key={btnIndex + "key"}
                  className={` bg-gray-400 text-white p-2 m-2 w-1/2 h-10 hover:bg-gray-700  focus:ring  focus:ring-green-500  ${
                    clickedBtns.includes(key.toLowerCase())
                      ? " bg-green-500 outline outline-blue-500 "
                      : " bg-gray-200"
                  }`}
                  onClick={() => clickHandle(key)}
                >
                  {key}
                </button>
              );
            })}
          </div>
        );
      })}
      <button
        className="bg-blue-500 text-white p-3 mt-5"
        onClick={resetURLHandler}
      >
        Reset URL
      </button>
    </div>
  );
}
