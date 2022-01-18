
import { useState } from 'react';

function Login(){
  const[pass,setPass] = useState("");

  const HandleSubmit = (e) => {
      e.preventDefault();
      if(pass === ""){
        alert("Please enter values");
      }else if(localStorage.getItem(pass) === pass){
        alert("Welcome Back!");
        localStorage.setItem('move','100px');
      }else if(localStorage.getItem(pass) !== pass) {
        alert("Please Register!");
      }

  }
  const HandleData = (e) => {
     setPass(e.target.value);
  }

  return(
      <form onSubmit={HandleSubmit}>
          <h3><b>Login</b></h3>
          <p>Password</p>
          <input type="password" name="pass" value={pass} onChange = {HandleData}/>
          <br/><br/>
          <input type="submit" value="Login"/>
      </form>
    )
}

export default Login;