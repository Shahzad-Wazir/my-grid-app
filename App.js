import React, { useState } from "react";
import "./App.css";
function App() {
  const [grid, setGrid] = useState(Array(9).fill(false));
  const [clickOrder, setClickOrder] = useState([]);
  const handleClick = (index) => {
    if (grid[index]) return;
    const newGrid = [...grid];
    newGrid[index] = true;
    setGrid(newGrid); 
    const newClickOrder = [...clickOrder, index];
    setClickOrder(newClickOrder);

    if (index === 8) {
      changeToOrange(newClickOrder);
    }
  };

  const changeToOrange = (order) => {
    order.forEach((boxIndex, i) => {
      setTimeout(() => {
        setGrid((oldGrid) => {
          const updatedGrid = [...oldGrid];
          updatedGrid[boxIndex] = "orange"; 
          return updatedGrid;
        });
      }, i * 500);
    });
  };

  const handleReset = () => {
    setGrid(Array(9).fill(false)); 
    setClickOrder([]); 
  };

  return (
    <div className="container">
      <div className="grid">
        {/* Har box ke liye ek div banao */}
        {grid.map((cell, index) => (
          <div
            key={index} 
            className="box"
            style={{
              
              backgroundColor: cell === true ? "green" : cell === "orange" ? "orange" : "#f0f0f0",
            }}
            onClick={() => handleClick(index)} 
          ></div>
        ))}
      </div>
      {/* Reset button jo sab reset karega */}
      <button className="reset-button" onClick={handleReset}>
        Reset Grid
      </button>
    </div>
  );
}

export default App;