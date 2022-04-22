// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import BotAvatar from "./BotAvatar";

const config = {
    initialMessages: [createChatBotMessage(`Hello world`)],
    botName: 'Lib System',
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />
    },
    customStyles: {
        // Overrides the chatbot message styles
        botMessageBox: {
            backgroundColor: "pink",
        },
        // Overrides the chat button styles
        chatButton: {
            backgroundColor: "green",
        },
    },
    state: {
        movieTitles: ["movie1", "movie 2"]
    }
}

export default config