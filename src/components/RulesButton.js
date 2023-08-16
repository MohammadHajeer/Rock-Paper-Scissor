import React, { useState } from "react";
import { createPortal } from "react-dom";
import rulesImage from "../images/image-rules-bonus.svg";
import closeIcon from "../images/icon-close.svg";

function RulesButton() {
  const [showRules, setShowRules] = useState(false);
  if (showRules) {
    return createPortal(
      <div
        className="absolute z-50 top-0 left-0 bg-white w-full min-h-screen
       flex justify-center items-center flex-col gap-20"
      >
        <p className="text-4xl text-[--header-outline]">RULES</p>
        <img src={rulesImage} alt="game rules" />
        <button
          onClick={() => {
            setShowRules(false);
          }}
        >
          <img src={closeIcon} alt="close icon" />
        </button>
      </div>,
      document.getElementById("rules")
    );
  } else {
    return (
      <button
        onClick={() => {
          setShowRules(true);
        }}
        className="text-white py-2 px-10 rounded-md border-2
          border-[#eeeeee7d] absolute bottom-10 right-10 max-md:right-1/2 max-md:translate-x-1/2 text-2xl
           hover:bg-white hover:text-[--dark-text] transition-all"
      >
        RULES
      </button>
    );
  }
}

export default RulesButton;
