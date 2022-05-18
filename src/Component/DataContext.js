import { createContext, useState, useEffect } from "react";
import axios from "axios";
const userName = "siraj";
const password = "pass";
const DataContext = createContext({});
export const DataProvider =({children}) =>{
    const [data, setData] = useState([]);
    console.log(data)
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState(0);
    const [flage, setFlage] = useState(false);
    const [inde, setInde] = useState([]);
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [show,setShow]=useState(false)
    const [onload,setOnload]=useState(true)
    
      

    const addDatatoLocalStorage = async () => {
        try {
          const { data } = await axios.get("https://api.github.com/users");
          return data;
        } catch (error) {
          throw error;
        }
      };
      const setDatatoStorage = async () => {
        try {
          const d = await addDatatoLocalStorage();
          localStorage.setItem("data", JSON.stringify(d));
        } catch (error) {
          console.log(error);
        }
      };
    
      const getDataFromStorage = () => {
        try {
          const arrayOfData = localStorage.getItem("data");
          const d = arrayOfData !== null ? JSON.parse(arrayOfData) : [];
          setData(d);
        } catch (error) {
          console.log(error);
        }
      };
     
      useEffect(() => {
        setDatatoStorage();
        getDataFromStorage();
      }, []);

      const handelSubmit = (e) => {
        e.preventDefault();
       
        if (flage) {
          let items = [...data];
          let item = items[edit];
          item.login = input;
          items[edit] = item;
          setData(items);
          setEdit(0);
          setInput("");
          setFlage(false);
        }
    
        if (!flage) {
          setData((val) => [...val, { ["login"]: input }]);
          setInput("");
         }
      };
     
      const deleteElm = (id) => {
        const update = data.filter((val, ind) => {
          return ind !== id;
        });
        setData(update);
      };
      const editElm = (val, id) => {
        setInput(val.login);
        setEdit(id);
        setFlage(true);
      };
    const logoutUser=()=>{
        setShow(false)
    }
    const setEmpolyee=(value)=>{
        setInde(value)
        setOnload(false)
    }
    useEffect(()=>{
      localStorage.setItem('data',JSON.stringify(data));
   },[data])

    const handelSubmitLoin = (e) => {
      e.preventDefault();
      const names=name.toLowerCase()
      const passs=pass.toLowerCase()
      if (names === userName && passs === password) {
        console.log("match");
        setName("");
        setPass("");
        setShow(true)
      } else {
        console.log("not match");
        setName("");
        setPass("");
        alert("Wrong userName and Password");
      }
    };

   
  return (
    <div>
      <DataContext.Provider
      value={{ data,setData,setOnload,onload,show,setShow,logoutUser,input,setInput,edit,setEdit,flage,setFlage,inde,setEmpolyee,handelSubmitLoin,deleteElm,editElm,name,setName,pass,setPass,userName,password,handelSubmit }} >
      {children}
    </DataContext.Provider>
    </div>
  )
}

export default DataContext