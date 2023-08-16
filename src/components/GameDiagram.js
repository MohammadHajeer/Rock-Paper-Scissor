import React from "react";
import diagram from "../images/bg-pentagon.svg";
import Button from "./Button";
import { buttonDetails } from "./buttonDetails";

function GameDiagram({ setSelectedButton, setScore }) {
  return (
    <div className="relative animate-hide-diagram">
      <img src={diagram} alt="diagram" className=" max-md:w-[250px]" />
      <button
        onClick={() => {
          setScore(0);
        }}
        className=" absolute text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
      >
        RESET GAME
      </button>
      {buttonDetails.map((details) => (
        <Button
          key={details.id}
          id={details.id}
          imgSrc={details.imgSrc}
          name={details.name}
          positions={details.positions}
          setFunc={setSelectedButton}
        />
      ))}
    </div>
  );
}

export default GameDiagram;
