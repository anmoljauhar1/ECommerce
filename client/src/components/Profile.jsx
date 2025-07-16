import "../style/Profile.css";
import { useState,useContext } from "react";
import {UserContext} from '../context/UserContext'
const Profile =  () => {
  const [test, setTest] = useState(false)
  const {user} = useContext(UserContext)

  const changeHandler = () => {
    setTest(prev => !prev)
  }

  return (

    <div>
      <button onClick={changeHandler}>Change Value</button>
    <> {test ? (
      <>
      <div>{user.name}</div>
      <div>Logout</div>
      </>) : (
        <div>
          <div>Login</div>
          <div>Signup</div>
        </div>
      )}
    </>
      </div>
  )

};

export default Profile;
