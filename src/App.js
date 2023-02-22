import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/shared/Header";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
