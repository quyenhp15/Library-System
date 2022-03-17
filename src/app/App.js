import background from '../img/background.jpg';
import logo from '../img/iu_logo.png';
import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import LoginScreen from '../components/LoginScreen';
import MessageParser from '../components/Chatbot/MessageParser';
import ActionProvider from '../components/Chatbot/ActionProvider';
import config from '../components/Chatbot/config';

function App() {
  return (
    <div>

      <LoginScreen />

      {/* <Chatbot messageParser={MessageParser} config={config} actionProvider={ActionProvider} /> */}

    </div>
  );
}

export default App;
