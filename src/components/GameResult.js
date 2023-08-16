import React, { useState, useEffect } from "react";
import Button from "./Button";
import { buttonDetails } from "./buttonDetails";
import { calculateResult } from "./calculateResult";

function GameResult({ selectedButton, setSelectedButton, setScore }) {
  const [housePick, setHousePick] = useState(null);
  const [result, setResult] = useState(null); // false for lose and true for win

  const selectedButtonDetails = buttonDetails[selectedButton - 1];

  useEffect(() => {
    if (housePick === null) {
      setTimeout(() => {
        setHousePick(buttonDetails[Math.floor(Math.random() * 5)]);
      }, 1000);
    } else {
      setResult(calculateResult(selectedButtonDetails, housePick));
    }

    if (result === "user") {
      setScore((s) => s + 1);
    } else if (result === "computer") {
      setScore((s) => s - 1);
    }
  }, [selectedButton, housePick, selectedButtonDetails, result, setScore]);

  return (
    <div className="flex justify-between max-w-full items-center transition-all">
      <div className="flex flex-col max-md:flex-col-reverse items-center gap-16 w-[300px]">
        <h2 className="text-white text-2xl max-md:text-lg text-center">
          YOU PICKED
        </h2>
        <Button
          positions={`relative w-60 h-60 border-[20px] max-md:border-[10px]
           pointer-events-none max-md:w-28 max-md:h-28 max-md:p-2 ${
             result === "user"
               ? "before:content-[''] before:absolute before:w-[115%] before:h-[115%] before:shadow-win before:rounded-full before:z-[-3] z-[23]"
               : ""
           }`}
          imgSrc={selectedButtonDetails.imgSrc}
          name={selectedButtonDetails.name}
        />
      </div>
      {result !== null ? (
        <div
          className="flex flex-col text-white items-center gap-5 text-5xl max-md:text-4xl
         max-md:absolute bottom-28 left-1/2 max-md:-translate-x-1/2"
        >
          {result === "user"
            ? "YOU WON"
            : result === "computer"
            ? "YOU LOSED"
            : "DRAW"}
          <button
            onClick={() => {
              setSelectedButton(0);
            }}
            className="text-[--dark-text] bg-white py-2 px-5 w-44 max-w-full mx-5 block rounded-md border-2
          border-[#eeeeee7d text-lg hover:bg-transparent hover:text-white transition-all"
          >
            PLAY AGAIN
          </button>
        </div>
      ) : null}
      <div className="flex flex-col max-md:flex-col-reverse items-center gap-16 w-[300px]">
        <h2 className="text-white text-2xl max-md:text-lg text-center">
          THE HOUSE PICKED
        </h2>
        <div className="relative w-60 h-60 max-md:w-28 max-md:h-28 bg-[#14153976] rounded-full">
          {housePick !== null ? (
            <Button
              positions={`mx-auto block w-60 h-60 border-[20px] max-md:border-[10px] scale-1
             pointer-events-none max-md:w-28 max-md:h-28 max-md:p-2 left-1/2 -translate-x-1/2 ${
               result === "computer"
                 ? "before:content-[''] before:absolute before:w-[115%] before:h-[115%] before:shadow-win before:rounded-full before:z-[-3] z-[23]"
                 : ""
             }`}
              imgSrc={housePick.imgSrc}
              name={housePick.name}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default GameResult;
