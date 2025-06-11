import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./component/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { useEffect } from "react";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProduct } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProduct());
  });

  return (
    <>
      <Navbar />
      <Mainroutes />
    </>
  );
};

export default App;
