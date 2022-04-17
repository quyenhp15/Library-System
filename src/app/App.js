import background from '../img/background.jpg';
import logo from '../img/iu_logo.png';
import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';
import MessageParser from '../components/Chatbot/MessageParser';
import ActionProvider from '../components/Chatbot/ActionProvider';
import config from '../components/Chatbot/config';
import Registration from '../components/Registration';
import AppRouter from '../AppRouter';

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/login" element={<LoginScreen/>}/>
                <Route exact path="/register" element={<Registration/>}/>
            </Routes>
      </Router>
    
      
      /*<Chatbot messageParser={MessageParser} config={config} actionProvider={ActionProvider} /> */
    
  );
}

export default App;
