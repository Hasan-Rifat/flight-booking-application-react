import React from "react";
import { ToastContainer } from "react-toastify";
import PreviewData from "../PreviewData/PreviewData";
import Form from "./Form";

const Home = () => {
  return (
    <section>
      <Form />
      <PreviewData />
    </section>
  );
};

export default Home;
