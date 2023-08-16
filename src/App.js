import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import GameDiagram from "./components/GameDiagram";
import GameResult from "./components/GameResult";
import RulesButton from "./components/RulesButton";

function App() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [score, setScore] = useState(
    localStorage.score ? JSON.parse(localStorage.score) : 0
  );

  useEffect(() => {
    localStorage.score = score;
  }, [score]);
  return (
    <div className=" bg-radial-background min-h-screen flex flex-col items-center justify-start gap-28 p-10">
      <Board score={score} />
      {selectedButton === 0 ? (
        <GameDiagram
          setSelectedButton={setSelectedButton}
          setScore={setScore}
        />
      ) : (
        <GameResult
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          setScore={setScore}
        />
      )}
      <RulesButton />
    </div>
  );
}

export default App;
