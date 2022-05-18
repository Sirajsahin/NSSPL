import React, { useContext } from 'react'
import DataContext from './DataContext'

function Single() {
    const {logoutUser}=useContext(DataContext)
  return (
    <div>
      <div className="right-box">
          <button className="logout" onClick={logoutUser}>Logout</button>
          <div className="right-content">
            <h1>Name : mojombo</h1>
            <div className="profile">
              <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="mojombo" />
            </div>
          </div>
          </div>
    </div>
  )
}

export default Single
