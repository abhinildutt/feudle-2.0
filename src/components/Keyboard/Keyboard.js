import React from "react";
import "./Keyboard.css";
import Key from "./Key";
import {Feudle} from "../../logic/game.js";

const Keyboard = () => {
  var line = 1, box = 1;
  var word = "";
  const keyLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"], //backpace included here by default
    ["Z", "X", "C", "V", "B", "N", "M"], //enter included on bottom by default
  ];

  const [keyInput, setKeyInput] = React.useState("");

  var game = new Feudle();
  game.set_word("ALERT");

  const change_green = (line, box, num) => {
    const s = num + "line" + line.toString() + "box" + box.toString();
    document.getElementById(s).style.backgroundColor = "#46a842";
  }
  const change_yellow = (line, box, num) => {
    const s = num + "line" + line.toString() + "box" + box.toString();
    document.getElementById(s).style.backgroundColor = "rgb(239, 187, 16)";
  }
  const change_grey = (line, box, num) => {
    const s = num + "line" + line.toString() + "box" + box.toString();
    document.getElementById(s).style.backgroundColor = "#5f6870";
  }


  document.addEventListener("keyup", function(event) {
    switch (event.code) {
        case "Enter":
          if(word.length == 5) {
            console.log(word);
            game.guess(word);
            var s = game.color(word);
            for (var i = 0; i < s.length; i++) {

              const s2 = "line" + line.toString() + "box" + (i+1).toString();
              document.getElementById(s2).style.color = "rgb(255, 255, 255)";
              document.getElementById(s2).style.border = "0px solid black";
              document.getElementById(s2).style.margin = "4.5px";
              document.getElementById(s2).style.fontSize = "25px";
              document.getElementById(s2).style.height = "58px";
              document.getElementById(s2).style.width = "59px";


              if(s[i] == 'g') {
                change_green(line,i+1,"");
              }
              if(s[i] == 'y') {
                change_yellow(line,i+1,"");
              }
              if(s[i] == 'e') {
                change_grey(line,i+1,"");
              }
            }

            line++;
            box = 1;
            word = "";
          }
          else alert("Word must be 5 letters")
        case "Backspace" :
          if(box > 1) box--;
          var s = "line" + line.toString() + "box" + box.toString();
          document.getElementById(s).innerHTML = `<div></div><br />`;
          document.getElementById(s).style.border = "0.1px solid black";
          document.getElementById(s).style.margin = "4px";
          if(word.length != 0) word = word.slice(0,-1);
          break;
        default:
          if(box <= 5) {
            var s = "line" + line.toString() + "box" + box.toString();  
            var keyValue = event.code.toUpperCase();
            document.getElementById(s).innerHTML +=`<div>${keyValue[keyValue.length-1]}</div><br />`;
            document.getElementById(s).style.border = "2px solid black";
            document.getElementById(s).style.margin = "2.44px";
            word += keyValue[keyValue.length-1].toUpperCase();
          }
          if(box <= 5) box++;
          break;
        }
    }
  );

  const buttonPressHandler = (keyValue) => {
    //set max length of input to 5
    if(box <= 5) {
      var s = "line" + line.toString() + "box" + box.toString();  
      document.getElementById(s).innerHTML +=`<div>${keyValue.toUpperCase()}</div><br />`;
      document.getElementById(s).style.border = "2px solid black";
      document.getElementById(s).style.margin = "2.44px";
      word += keyValue.toUpperCase();
    }
    if(box <= 5) box++;
    
  };

  const backspaceHandler = () => {
    if(box > 1) box--;
    var s = "line" + line.toString() + "box" + box.toString();
    document.getElementById(s).innerHTML = `<div></div><br />`;
    document.getElementById(s).style.border = "0.1px solid black";
    document.getElementById(s).style.margin = "4px";
    if(word.length != 0) word = word.slice(0,-1);
  };

  const submitHandler = () => {
    //submit only when input is 5 characters
    if(word.length == 5) {
      console.log(word);
      game.guess(word);

      var s = game.color(word);

      for (var i = 0; i < s.length; i++) {

        const s2 = "line" + line.toString() + "box" + (i+1).toString();
        document.getElementById(s2).style.color = "rgb(255, 255, 255)";
        document.getElementById(s2).style.border = "0px solid black";
        document.getElementById(s2).style.margin = "4.5px";
        document.getElementById(s2).style.fontSize = "25px";
        document.getElementById(s2).style.height = "58px";
        document.getElementById(s2).style.width = "59px";

        if(s[i] == 'g') {
          change_green(line,i+1,"");
        }
        if(s[i] == 'y') {
          change_yellow(line,i+1,"");
        }
        if(s[i] == 'e') {
          change_grey(line,i+1,"");
        }
      }

      line++;
      box = 1;
      word = "";
    }
    else alert("Word must be 5 letters")
  };

  const backspaceKey = (
    <button type="button" className="keyboard__key" onClick={backspaceHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        class="bi bi-backspace-fill"
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
            <Key text={key} onPress={buttonPressHandler} />
          ))}
        </div>
        <div>
          {keyLayout[1].map((key) => (
            <Key text={key} onPress={buttonPressHandler} />
          ))}
          {backspaceKey}
        </div>
        <div>
          {keyLayout[2].map((key) => (
            <Key text={key} onPress={buttonPressHandler} />
          ))}
          {enterKey}
        </div>
      </div>
    </div>
  );
};
export default Keyboard;
