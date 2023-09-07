import Card from "./context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Routes";

export default function Login () {

  const ctx = useContext(UserContext);
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const [warning, setWarning] = useState("");
  const [name, setName] = useState(ctx.users[0].name)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const isValidEmail = (emailInput) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
  const isValidPassword = (passwordInput) => passwordInput.length >= 8;

  function handleClick () {

    if(!email || !password) {
      setWarning("Please fill out all fields to login");
      setTimeout(() => setWarning(""), 3000)
      return;
    }
    if(!isValidEmail(email)) {
      setWarning("Please enter a valid email address");
      setTimeout(() => setWarning(""), 3000)
      return;
    }
    if(!isValidPassword(password)) {
      setWarning("Your password must be 8 characters minimum");
      setTimeout(() => setWarning(""), 3000)
      return;
    }
    setTimeout(() => navigate("/deposit"), 4000)
    setShow(false);
  }
    return (
        <Card
        title="Login page"
        status={warning}
        body={
          show? (
            <>
    <b>Email address</b>  
    <br/>
    <input type="email" 
    className="form-control" 
    id="email" 
    value={email}
    aria-describedby="emailHelp"
    onChange={e => 
      setEmail(e.currentTarget.value)
      }
      ></input>

    <div id="emailHelp" class="form-text">We'll never share your credentials with anyone else.</div><br/>
     
    <b>Password</b>
    <br/>
    <input type="password" 
    className="form-control" 
    id="password"
    value={password}
    onChange={e => 
      setPassword(e.currentTarget.value)}>
    </input><br/>
    
    <div class="mb-3 form-check">
    <input type="checkbox" 
    class="form-check-input" 
    id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me if no activity</label>
  </div>

    <button type="submit" 
    className="btn btn-primary"
    onClick={handleClick}
    >Login</button>
  </>
    ):(
      <>
      <h3>Welcome back {name} !</h3>
      <h5
      style={{color: "green"}}
      ><b>You will be redirected in a moment </b></h5>
      
      
      </>
          )          
        }></Card>     
    );
} 