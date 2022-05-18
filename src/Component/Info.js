import React,{useContext} from 'react'
import DataContext from './DataContext';
function Info({inde}) {
  const  {logoutUser}=useContext(DataContext)
  return (
    <div>
      <div className="right-box">
          <button className="logout" onClick={logoutUser}>Logout</button>
          <div className="right-content">
            <h1>Name : {inde.login}</h1>
            <div className="profile">
              <img src={inde.avatar_url} alt={inde.login} />
            </div>
          </div>
          </div>
    </div>
  )
}

export default Info
