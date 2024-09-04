import { useState } from "react";
import "./App.css";

function Modal() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const[remember,setremember] = useState(false)
  function handleLogin(){
    if(remember){
        const userdata = {
            email:email,
            password:password
        };
        localStorage.setItem("userdata",JSON.stringify(userdata));
        alert("data saved succesfully")
        setemail("")
        setpassword("")
    }
  }
  return (
    <div>
      <h1>Modal Login Form</h1>
      <button className="open-modal-btn" onClick={() => setLogin(true)}>
        Open Modal
      </button>
      {login && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setLogin(false)}>
              &times;
            </span>
            <h4>Login to MY Account</h4>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />{" "}
            <br />
            <label>
              <input type="checkbox" onChange={(e)=>setremember(e.target.checked)} />
            </label>{" "}
            <br />
            <button className="modal-btn" onClick={handleLogin} >Login</button> <br />
            <a href="#" className="modal-link">
              Forgot your password?
            </a>
            <br />
            <a href="#" className="modal-link">
              Create a new Account
            </a>
            <br />
          </div>
        </div>
      )}

      <h1>Modal Registration Form</h1>
      <button className="open-modal-btn" onClick={() => setRegister(true)}>
        Open Modal
      </button>
      {register && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setRegister(false)}>
              &times;
            </span>
            <h4>Create a New Account</h4>
            <input type="text" placeholder="Enter your name" /> <br />
            <input type="email" placeholder="Enter your email" /> <br />
            <input type="password" placeholder="Enter your password" /> <br />
            <button className="modal-btn">Register</button> <br />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
