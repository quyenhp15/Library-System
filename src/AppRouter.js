import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import LoginScreen from "./components/LoginScreen";
import Registration from "./components/Registration";

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginScreen/>}/>
                <Route exact path="/register" element={<Registration/>}/>
            </Routes>
        </Router>

    );
}

