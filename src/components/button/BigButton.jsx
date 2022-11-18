import React from "react";
import { Link } from "react-router-dom";
const BigButton = ({value,to,className}) => {
  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1);
  // };
  return (
    <Link to={to} className={className}>
    <div className="text-white bg-black m-4 p-8 rounded-2xl  text-2xl text-center shadow-xl cursor-pointer">
      {value}
    </div>
    </Link>
  );
};
export default BigButton;
