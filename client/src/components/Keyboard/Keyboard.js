import React from "react";
import "./Keyboard.css";
import Key from "./Key";

const Keyboard = () => {
  const keyLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"], //backpace included here by default
    ["Z", "X", "C", "V", "B", "N", "M"], //enter included on bottom by default
  ];

  const [keyInput, setKeyInput] = React.useState("");

  const buttonPressHandler = (keyValue) => {
    //set max length of input to 5
    if (keyInput.length < 5) {
      setKeyInput((prevKeyInput) => prevKeyInput + keyValue);
    } else {
      console.log("max characters of 5 reached");
    }
    console.log(keyInput);
  };

  const backspaceHandler = () => {
    setKeyInput((prevKeyInput) => prevKeyInput.slice(0, -1));
    console.log(keyInput);
  };

  const submitHandler = () => {
    //submit only when input is 5 characters
    if (keyInput.length === 5) {
      console.log("SUBMITTED");
      setKeyInput("");
    } else {
      console.log("length of input is not 5");
    }
  };

  const backspaceKey = (
    <button type="button" className="keyboard__key" onClick={backspaceHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        className="bi bi-backspace-fill"
        viewBox="0 0 16 16"
      >
        <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
      </svg>
    </button>
  );

  const enterKey = (
    <button onClick={submitHandler} type="button" className="keyboard__key">
      Enter
    </button>
  );

  return (
    <div className="keyboard">
      {/* <h5>{keyInput}</h5> Remove this later */}
      <div className="keyboard__keys">
        <div>
          {keyLayout[0].map((key) => (
            <Key key={key} text={key} onPress={buttonPressHandler} />
          ))}
        </div>
        <div>
          {keyLayout[1].map((key) => (
            <Key key={key} text={key} onPress={buttonPressHandler} />
          ))}
          {backspaceKey}
        </div>
        <div>
          {keyLayout[2].map((key) => (
            <Key key={key} text={key} onPress={buttonPressHandler} />
          ))}
          {enterKey}
        </div>
      </div>
    </div>
  );
};
export default Keyboard;
