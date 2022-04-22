import React from "react";
import {useState} from "react";
import "./LoginScreen.css"

const LoginScreen = () => {
    const signUp = () => {
        window.location.href = "/register";
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
            
        };
    }
    
    return (
        <div className="login-page">
            <div className="header-title">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SERVICE</a></li>
                    <li><a href="#">ACCOUNT</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div className="form__sign-up" onSubmit={handleLogin}>
                <div className="signIn__title">
                    <h1>Sign In</h1>
                </div>
                <input  
                    type="text" 
                    placeholder="Your user name...." 
                    className="input__user-name" 
                    onChange={(e) => setUsername(e.target.value)}/>
                <input 
                    type="password" 
                    placeholder="Your password...." 
                    className="input__password" 
                    onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit" className="btn_sign-in">Sign In</button>

                <div className="remember-area">
                    <input
                        style={{
                            marginTop: "5px",
                            marginLeft: "5px",
                            marginRight: "5px",
                            cursor: "pointer",
                        }}
                        type="checkbox"
                    />
                    <p>Remember me</p>
                    <p style={{ marginLeft: "17%", cursor: "pointer" }} onClick= { signUp }/*onClick={}*/>
                        Sign Up Now?
                    </p>
                </div>
            </div>
            
        </div>
        /*<Chatbot messageParser={MessageParser} config={config} actionProvider={ActionProvider} /></> */
    )
}

export default LoginScreen