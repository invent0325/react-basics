import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Jill", "Jane", "John"];
    const check = Math.floor(Math.random() * 3);
    return names[check];
  };

  const handleClick = () => {
    console.log("Clicked Me!");
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };



  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
      <br />
      <button onClick={handleClick}>Click Me!</button>
      <br />
      <button onClick={() => handleClick2("Dave")}>Display Name!</button>
      <br />
      <button onClick={(e) => handleClick3(e)}>Event Details!</button>
    </main>
  );
};

export default Content;
