import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import '../App.css';

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
        
    const onButtonClick = () => {
        // You'll update this function later...
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <TextField 
            value={email}
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            onChange={ev => setEmail(ev.target.value)}    
            className={"inputBox"}
            />
            <label className="errorLabel">{emailError}</label>
        </div>

        <br />
        <div className={"inputContainer"}>
            <TextField 
            value={password}
            id="outlined-basic" 
            label="Enter your password here" 
            variant="outlined" 
            onChange={ev => setPassword(ev.target.value)}    
            className={"inputBox"}
            />
            <label className="errorLabel">{emailError}</label>
        </div>
        
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>
    </div>
}

export default Login