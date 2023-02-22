import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PreviewData from "../PreviewData/PreviewData";
import Form from "./Form";

const Home = () => {
  const store = useSelector((state) => state.bookings);
  console.log(store);
  const disptch = useDispatch();

  return (
    <section>
      <Form />
      <PreviewData />
    </section>
  );
};

export default Home;
