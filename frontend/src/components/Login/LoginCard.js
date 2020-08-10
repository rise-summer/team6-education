// import React, { useState } from "react";
import React, { Component } from "react";
import axios from "axios";
import { render } from "react-dom";
import './LoginCard.css';

export default class LoginCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            remember: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeState = this.changeState.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {email, password, remember} = this.state;
        axios.post("/user/login",
            {
                user: { 
                    email: email,
                    password: password
                }
            },
                {withCredentials: true}
            )
            .then(res => {
                if (res.data.status !== 200) {
                    alert("Invalid user.");
                }
                else {
                    if(remember){
                        // localStorage.setItem("kumiToken": res.data.sessionToken); Need to confirm
                    }
                }
            })
            .catch(err  => {
                alert(err.response.data);
            })
    }

    changeState(event) {
        if(event.target.name === "remember") 
        {
            this.setState({["remember"] : event.target.checked});
        }
        else
        {
            this.setState({[event.target.name] : event.target.value});
        }
    }

    keyPress(event){
        if(event.key === "Enter") {
            this.handleSubmit(event);
        }
    }

    render() {
        return(
            <div id="login-card">
                <h3 className="kumi-title">Kumi</h3>
                <p className="headline">Lorem Ipsum</p>
                <form onSubmit={this.handleSubmit} id="login-form">
                    <div className="form-field">
                        <label htmlFor="Email" className="label-text">Email</label>
                        <input type="email" name="email" value={this.state.email} className="input-box" onChange={this.changeState} required/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="Password" className="label-text">Password</label>
                        <input type="password" name="password" value={this.state.password} className="input-box" onChange={this.changeState} required autoFocus/>
                    </div>
                    <div className="form-field">
                        <button type="submit" className="" onKeyPress={this.keyPress}>Login</button>
                    </div>
                    <div className="form-field">
                        <label><input type="checkbox" name="remember" className="remember-me" checked={this.state.remember} onChange={this.changeState}></input>Remember me</label>
                    </div>
                </form>
                <p className="forget-password">Forgot your <a href="#" className="forget-password">password</a></p>
            </div>
        );
    }
}