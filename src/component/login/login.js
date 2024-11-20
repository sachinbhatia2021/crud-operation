import { useState } from "react";
import './login.css';

function Login() {
  const [passShow, setPassShow] = useState(false);

  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');


  function dataSubmit(e) {

    e.preventDefault();
    senddata()
  }

  const[message,setmessage]=useState("")
  async function senddata() {
    try {
      const res = await fetch("http://localhost:4002/login", {
        method: "POST",
        body: JSON.stringify({ userName, passWord }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        }
      });
  
      const data = await res.json();
  
      if (res.ok) {
        sessionStorage.setItem("token", data.token);
        window.location.href = "/viewusers";
      } 
      else{
        setmessage(data.message)
      }
    } catch (err) {
      console.log("Error:", err);
      alert("An error occurred. Please check your connection or try again.");
    }
  }
  
  return (
    <>
      <div className="container" style={{marginTop:"130px",marginBottom:"20px"}} id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={dataSubmit}>
            <h1>Login</h1>
            <p className="text-danger"><b>{message}</b></p>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="User name"
              required
            />
            <input

              type={passShow ? "text" : "password"} 
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              placeholder="Password"
              required
            />
            <div className="d-flex text-center" style={{marginRight:"40px"}}>
            <div>  <input   className="me-5 mb-1" type="checkbox" checked={passShow} onChange={() => setPassShow(!passShow)} />
</div>
<div>
<p className="mt-1"> <b>Show password..</b> </p>
</div>
            </div>
            <button  className="btn btn-danger button1" type="submit">Login</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Sir!</h1>
              <h5 className="mt-2">Welcome to Ww.</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
