import {useContext } from "react";
import { FiEdit } from "react-icons/fi"
import {MdDelete } from "react-icons/md"
import DataContext from './DataContext';
import Single from "./Single"; 
import "../App.css";
import Info from "./Info";

function Dashbord() {
    const{input,setInput,handelSubmit,inde,setEmpolyee,onload,editElm,deleteElm,data}=useContext(DataContext)
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <input
            type="text"
            value={input}
            className="newUser"
            onChange={(e) => setInput(e.target.value)}
            placeholder="your name"
          />
          <button className="newUser-btn" onClick={handelSubmit}>
            add new employee
          </button>
          <h1 className="table-title">List Of Employee</h1>
          <table>
            {data.map((elem, id) => {
              return (
                <div>
                  <tr key={id}>
                    <td className="table-row">
                      <p onClick={() => setEmpolyee(elem)}> {elem.login}</p>
                    </td>
                    <td>
                      <button className="edit" onClick={() => editElm(elem, id)}><FiEdit/></button>
                    </td>
                    <td>
                      <button className="delete" onClick={() => deleteElm(id)}><MdDelete/></button>
                    </td>
                  </tr>
                </div>
              );
            })}
          </table>
        </div>

        <div className="right">
           {onload?<Single/> : <Info inde={inde}/>}
          
        
        </div>
      </div>
    </div>
  );
}
export default Dashbord;
