import React, { useState } from "react";
// import React, { Component } from "react";
import axios from "axios";
import { render } from "react-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { login } from "../../utils";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 'fit-content',
        padding: '5rem 9.5rem',
        border: '1px #B3B2B2 solid',
        textAlign: 'center',
        borderRadius: '20px',
        margin: '0 auto',
        boxShadow: 'none',
        fontFamily: 'Roboto, sans-serif'
    },
    kumiTitle: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500',
        fontSize: '70px',
        lineHeight: '70px',
        margin: 0
    },
    headline: {
        fontSize: '20px'
    },
    loginForm: {
    },
    formField: {
        textAlign: 'left'
    },
    labelText: {
        display: 'block',
        fontSize: '14px',
        fontWeight: '500',
        margin: '1em 0 0.7em'
    },
    inputBox: {
        border: 'none',
        backgroundColor: '#E8E8E8',
        borderRadius: '5px',
        height: '50px',
        fontSize: '15px',
        width: '300px',
        padding: '0px 10px',
        transition: '400ms',
        '&:focus': {
            outline: '0px',
            boxShadow: `${fade('#B3B2B2', 1)} 0 0 0 0.1rem`,
        },
        '&:hover': {
            outline: '0px',
            boxShadow: `${fade('#B3B2B2', 1)} 0 0 0 0.1rem`,
        }
    },
    submitButton : {
        marginTop: '35px',
        padding: '0.9rem 8.15rem',
        fontSize:  '13px',
        fontWeight: 'bold',
        textTransform: 'none',
        backgroundColor: '#5B89FF',
        color: '#fff',
        transition: '400ms',
        '&:hover': {
            backgroundColor: '#4673e8'
        } 
    },
    bottomField: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        margin: '9px 0 0'
    },
    rememberMe: {
        position: 'relative',
        top: '2px',
        marginRight: '3px'
    },
    forgetPassword: {
    }


}));

export default function LoginCard() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const classes = useStyles();
    let history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("/user/login",
            {
                email: email,
                password: password
            },
                {withCredentials: true}
            )
            .then(res => {
                console.log(res.status);
                if (res.status !== 200) {
                    alert("Invalid user.");
                }
                else {
                    if(remember){
                        // localStorage.setItem("kumiToken": res.data.sessionToken); Need to confirm
                    }
                    login();
                    window.location = "/dashboard";
                }
            })
            .catch(err  => {
                alert("Invalid user. Error");
            })
    }

    function keyPress(event){
        if(event.key === "Enter") {
            handleSubmit(event);
        }
    }

    return(
        <Card className={classes.root}>
            <CardContent>
                <h3 className={classes.kumiTitle}>Kumi</h3>
                <p className={classes.headline}>Learning</p>
                <form onSubmit={handleSubmit} id="login-form">
                    <div className={classes.formField}>
                        <label htmlFor="Email" className={classes.labelText}>Email</label>
                        <input type="email" name="email" value={email} className={classes.inputBox} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className={classes.formField}>
                        <label htmlFor="Password" className={classes.labelText}>Password</label>
                        <input type="password" name="password" value={password} className={classes.inputBox} onChange={e => setPassword(e.target.value)} required autoFocus/>
                    </div>
                    <div className={classes.formField}>
                        <Button variant="contained" type="submit" className={classes.submitButton} onKeyPress={keyPress}>Log In</Button>
                    </div>
                    <div className={classes.bottomField}>
                        <label><input type="checkbox" name="remember" className={classes.rememberMe} checked={remember} onChange={e => setRemember(e.target.checked)}></input>Remember me</label>
                        <p className="forget-password">Forgot your <a href="#" className={classes.forgetPassword}>password</a>?</p>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
