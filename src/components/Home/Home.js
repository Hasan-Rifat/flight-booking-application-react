import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const store = useSelector((state) => state.bookings);
  console.log(store);
  const disptch = useDispatch();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
