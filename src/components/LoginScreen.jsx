import React from "react";
import './LoginScreen.css'

const LoginScreen = () => {
    return (
        <div className="register-page">

            <div className="header-title">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SERVICE</a></li>
                    <li><a href="#">ACCOUNT</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div className="header-bar">

            </div>
            <div className="form__sign-up">
                <div className="signIn__title">
                    <h1>Sign In</h1>
                </div>
                <input placeholder="Your user name...." className="input__user-name" />
                <input placeholder="Your password...." className="input__password" />
                <div className="btn_sign-in">Sign In</div>

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
                    <p style={{ marginLeft: "17%", cursor: "pointer" }} /*onClick={}*/>
                        Sign Up Now?
                    </p>
                </div>
            </div>
            <div className="footer">
                <div>Hel</div>
            </div>
        </div>
    )
}

export default LoginScreen