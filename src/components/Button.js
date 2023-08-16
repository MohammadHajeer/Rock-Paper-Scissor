import React from "react";

function Button({ imgSrc, name, positions, id, setFunc }) {
  return (
    <button onClick={() => setFunc(id)}
      className={`border-[14px] rounded-full w-36 h-36 max-md:w-24 max-md:h-24
      flex items-center justify-center bg-white absolute ${positions}`}
      style={{
        borderColor: `var(--${name}-gradient-to)`,
        boxShadow: `0 10px 0 var(--${name}-gradient-from), 0 10px 0px #ddd inset`,
      }}
    >
      <img src={imgSrc} className="w-1/2" alt="icon" />
    </button>
  );
}

export default Button;
