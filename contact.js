
import { useState } from 'react';

function Register(){
const[user,setUser] = useState();

const HandleSubmit = (e) => {
	e.preventDefault();
	if(localStorage.getItem(user) === user){
    alert("User exist!");
  }else if(localStorage.getItem(user) !== user){
    localStorage.setItem(user,user);
    alert("User Saved please Login!");
  }
}
const HandleData = (e) => {
	setUser(e.target.value);
}
    return( 
      <form onSubmit={HandleSubmit}>
      	  <h3>Register</h3>
          <p>Enter password</p>
          <input type="text" value={user} onChange={HandleData}/><br/><br/>
          <input type="submit" value="Register"/>
      </form>
    )
}
export default Register;