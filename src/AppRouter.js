import React from "react";
import { BrowserRouter as Router, Route, Routes, useHistory } from 'react-router-dom';
import LoginScreen from "./components/LoginScreen";
import Registration from "./components/Registration";

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/register" element={<Registration/>}/>
            </Routes>
        </Router>

    );
}



