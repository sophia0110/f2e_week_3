import React from "react";
const Card = ({ value, name }) => {
  return (
    <div
      className="m-2 grid h-80 w-52 grid-cols-3 gap-3 rounded-lg bg-white bg-no-repeat"
      name={name}
    >
      <div className="col-span-3">
        <div className="h-12 w-24 bg-[url('./imgs/card/A.png')] bg-no-repeat "></div>
        <div className="h-12 w-12 bg-[url('./imgs/card/Spades.png')] bg-no-repeat "></div>
      </div>
      <div className="col-span-3 text-lg font-bold text-black text-center">{value}</div>
      <div className="col-start-3 col-end-3">
        <div className="h-12 w-12 bg-[url('./imgs/card/Spades_2.png')] bg-no-repeat "></div>
        <div className="h-16 w-24 bg-[url('./imgs/card/A_2.png')] bg-no-repeat "></div>
      </div>
    </div>
  );
};
export default Card;
