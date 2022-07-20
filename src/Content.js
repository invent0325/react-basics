import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Jill", "Jane", "John", "Mark", "Cuban", "Barry", "Larry"];
    const check = Math.floor(Math.random() * names.length);
    setName(names[check]);
  };

  const handleClickIncrement = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClickDecrement = () => {
    setCount(count - 1);
    console.log(count);
  };


  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <br />
      <br />
      <button id="change" onClick={handleNameChange}>
        Change Name!
      </button>
      <br />
      <button id="display" onClick={() => handleClick2("Dave")}>
        Display Name!
      </button>
      <br />
      <button id="event" onClick={(e) => handleClick3(e)}>
        Event Details!
      </button>

      <br />
      <button onClick={handleClickIncrement}>Increase Count!</button>

      <br />
      <button onClick={handleClickDecrement}>Decrease Count!</button>
    </main>
  );
};

export default Content;
