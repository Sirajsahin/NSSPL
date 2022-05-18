import { useContext } from "react";
import DataContext from './DataContext';
import "../App.css";
const Login = () => {
    const{setName,setPass,handelSubmitLoin,pass,name}=useContext(DataContext)

  return (
    <div className="box">
      <div className="login">
        <h1 className="header">Admin Login</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="UserName"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
        />
        <button className="login-btn" onClick={handelSubmitLoin}>
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
