import React from "react";
import "./Keyboard.css";

const Key = (props) => {
  const clickHandler = () => {
    props.onPress(props.text);
  };
  return (
    <button onClick={clickHandler} type="button" className="keyboard__key" id={props.id}>
      {props.text}
    </button>
  );
};

export default Key;
