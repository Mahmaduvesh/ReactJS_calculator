import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const HandleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    //  remove all
    setResult("");
  };

  const backspace = () => {
    // remove one bye one element
    // setResult(result.slice(0, result.length - 1));
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <>
      <div class="container">
        <form>
          <input type="text" placeholder="0" value={result} />
        </form>

        <div class="keypad">
          <button className="highlight" id="clear" onClick={clear}>
            Clear
          </button>
          <button className="highlight" id="backspace" onClick={backspace}>
            C
          </button>
          <button className="highlight" name="/" onClick={HandleClick}>
            &divide;
          </button>
          <button name="7" onClick={HandleClick}>
            7
          </button>
          <button name="8" onClick={HandleClick}>
            8
          </button>
          <button name="9" onClick={HandleClick}>
            9
          </button>
          <button className="highlight" name="*" onClick={HandleClick}>
            &times;
          </button>
          <button name="4" onClick={HandleClick}>
            4
          </button>
          <button name="5" onClick={HandleClick}>
            5
          </button>
          <button name="6" onClick={HandleClick}>
            6
          </button>
          <button className="highlight" name="-" onClick={HandleClick}>
            &ndash;
          </button>
          <button name="1" onClick={HandleClick}>
            1
          </button>
          <button name="2" onClick={HandleClick}>
            2
          </button>
          <button name="3" onClick={HandleClick}>
            3
          </button>
          <button className="highlight" name="+" onClick={HandleClick}>
            +
          </button>
          <button name="0" onClick={HandleClick}>
            0
          </button>
          <button name="." onClick={HandleClick}>
            .
          </button>
          <button className="highlight" id="result" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
