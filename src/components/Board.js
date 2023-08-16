import React from "react";

function Board({ score }) {
  return (
    <div
      className="w-[700px] max-w-full border-[5px] border-[#eeeeee7d]
     rounded-3xl p-5 flex justify-between items-center"
    >
      <ul className="text-white uppercase leading-7 max-sm:leading-4 text-4xl max-sm:text-lg">
        <li>rock</li>
        <li>paper</li>
        <li>scissors</li>
        <li>lizard</li>
        <li>spock</li>
      </ul>
      <div className="flex flex-col text-white items-center bg-white py-5 px-14 max-sm:py-3 max-sm:px-10 rounded-lg">
        <span className="text-2xl max-sm:text-sm text-[--score-text]">
          SCORE
        </span>
        <span className="text-7xl max-sm:text-5xl text-[--dark-text]">
          {score}
        </span>
      </div>
    </div>
  );
}

export default Board;
