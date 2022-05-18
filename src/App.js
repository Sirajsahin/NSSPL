
import {useContext } from "react";
import './App.css';
import Login from "./Component/Login";
import DataContext from './Component/DataContext';
import Dashbord from "./Component/Dashbord";


function App() {
  const{show}=useContext(DataContext)
  return <div>{show ? <Dashbord /> : <Login />}</div>;
};
export default App;
