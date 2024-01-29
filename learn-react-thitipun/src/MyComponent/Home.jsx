import React from "react"
import { useNavigate } from "react-router-dom";
import '../App.css';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';


const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        // You'll update this function later
    }

    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <Typography 
            variant="h3" 
            gutterBottom
            fontWeight={500}
            >
            Welcome!
            </Typography>
        </div>
        <div className={"buttonContainer"}>
            <Button 
            variant="outlined" 
            startIcon={<LoginIcon />}
            onClick={onButtonClick}
            value={loggedIn ? "Log out" : "Log in"} 
            >
            LOGIN
            </Button>
                {(loggedIn ? <div>
                    Your email address is {email}
                </div> : <div/>)}
        </div>
    </div>
}

export default Home