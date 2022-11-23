import React from "react";
import clsx from "clsx";
const BackCard = ({ value, definite }) => {
  console.log(definite);
  return (
    <div
      className={clsx(
        "m-2 grid h-80 w-52 cursor-pointer grid-cols-3 gap-3  rounded-lg bg-no-repeat",
        definite ? "text-whit bg-black" : "bg-white text-black"
      )}
    >
      <div className="col-span-3">
        {definite ? (
          <>
            <div className="h-12 w-12 bg-[url('./imgs/card/b_A.png')] bg-cover"></div>
            <div className="h-12 w-12 bg-[url('./imgs/card/b_Spades.png')] bg-cover"></div>
          </>
        ) : (
          <>
            <div className="h-12 w-24 bg-[url('./imgs/card/A.png')] bg-no-repeat "></div>
            <div className="h-12 w-12 bg-[url('./imgs/card/Spades.png')] bg-no-repeat "></div>
          </>
        )}
      </div>
      <div
        className={clsx(
          "col-span-3 text-center text-lg  font-bold",
          definite ? "text-white" : "text-black"
        )}
      >
        {value}
      </div>
      <div className="col-start-3 col-end-3">
      {definite ? (
          <>
          <div className="h-12 w-12 bg-[url('./imgs/card/b_Spades_2.png')] bg-cover"></div>
          <div className="h-14 w-12 bg-[url('./imgs/card/b_A_2.png')] bg-cover"></div>
          </>
        ) : (
          <>
        <div className="h-12 w-12 bg-[url('./imgs/card/Spades_2.png')] bg-no-repeat "></div>
        <div className="h-16 w-24 bg-[url('./imgs/card/A_2.png')] bg-no-repeat "></div>
        </>
        )}
      </div>
    </div>
  );
};
export default BackCard;
