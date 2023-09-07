import {React, useContext, useState} from "react";
import { Link } from "react-router-dom";
import Card from "./context";
import { UserContext } from "./Routes";

export default function NewAccount () {

    const ctx = useContext(UserContext);

    const [show, setShow] = useState(true);
    const [warning, setWarning] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [btnDisable, setBtnDisable] = useState(true);

    const isValidName = (nameInput) => /^[a-zA-Z ]+$/.test(nameInput);
    const isValidEmail = (emailInput) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
    const isValidPassword = (passwordInput) => {return passwordInput.length >= 8}; 
    const isMatchingPassword = (pwdInput) => pwdInput === password;

    function handleSubmit (e) {
        e.preventDefault();
        if (!name || !email || !password){
            setWarning("Please fill out all fields");
            setTimeout(() => setWarning(""), 3000)
            return;
        }
        if(!isValidName(name)) {
            setWarning("Name cannot include number or symbols");
            setTimeout(() => setWarning(""), 3000)
            return;
        }
        if(!isValidEmail(email)) {
            setWarning("Please enter a valid email address");
            setTimeout(() => setWarning(""), 3000)
            return;
        }

        if(!isValidPassword(password)) {
            setWarning("Password must be longer than 8 characters");
            setTimeout(() => setWarning(""), 3000)
            return;
        } 

        if(!isMatchingPassword(confirmedPassword)) {
            setWarning("No match with initial password!");
            setTimeout(() => setWarning(""), 3000)
            return;
        } 

        ctx.users.push({name,email,password});
        setShow(false);       
    }

    function clearForm(){
        setEmail("");
        setName("");
        setPassword("");
        setShow(true);
      };

    return (
        
        <Card
        title="Create Account"
        status={warning}
        body={show ? (  
                <>
                <div style={{padding:"3px"}}>
                <b>Name</b>
                <br/>
                <input type="text" 
                className="form-control" 
                placeholder="Enter name.." 
                value={name} 
                onChange={e => { 
                  setName(e.currentTarget.value);
                  !e.currentTarget.value ? setBtnDisable(true) : setBtnDisable(false);
                }
                } /></div>

                <div style={{padding:"3px"}} >
                <b>Email address</b>
                <br/>
                <input type="email" className="form-control" placeholder="Enter email.." 
                value={email} 
                onChange={e => {
                  setEmail(e.currentTarget.value);
                  !e.currentTarget.value ? setBtnDisable(true) : setBtnDisable(false);
                    }
                    } />
                </div>
                <div style={{padding:"3px"}}>
                <b>Password</b>
                <br/>
                <input 
                type="password" 
                className="form-control" 
                placeholder="Enter password.." 
                value={password} 
                onChange={e => {
                  setPassword(e.currentTarget.value);
                  !e.currentTarget.value ? setBtnDisable(true) : setBtnDisable(false);
                    }
                    } />
                {password.length > 0 &&
                 password.length < 8 ? <span style={{color: "red", fontSize:"14px"}}>Too short</span> : ""}
                {password.length >= 8  ? <span style={{color: "green", fontSize:"14px"}}>Password is strong</span> : ""}<br/>
                </div>

                <div style={{padding:"3px"}}>
                <b>Confirm password</b>
                <br/>
                <input type="password" className="form-control" placeholder="Enter password.." 
                value={confirmedPassword} 
                onChange={e => {
                  setConfirmedPassword(e.currentTarget.value);
                  !e.currentTarget.value ? setBtnDisable(true) : setBtnDisable(false);
                    }
                    } />
                    
                    {confirmedPassword === password &&   
                    confirmedPassword.length > 0 ? <span style={{color: "green", fontSize:"14px"}}>Password is matching !</span> : ""}<br/>
                    </div> 
                    
                <button type="submit" class="btn btn-primary mb-3" onClick={handleSubmit}
                disabled={btnDisable}
                >Create Account</button>
                </>
              ):(
                <>
                <h4><b>Congrats, {name}</b> !</h4> 
                <h5>You have successfully created your account !</h5>
                <br/> 
                
                <div>                
                <button type="submit" 
                class="btn btn-primary mb-3"
                ><Link to="/login" 
                style={{ color: "white"}}
                > Login </Link>
                </button> 
                </div> 

                <button type="submit" class="btn btn-primary mb-3" onClick={clearForm}
                >Create New Account</button>            
                </> 
              )}
      />
      
    )
  }