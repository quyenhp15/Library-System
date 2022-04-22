// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        // console.log(message)
        const lowerCase = message.toLowerCase()
        console.log("STATE: ", this.state)

        if (lowerCase.includes("hello world")) {
            this.actionProvider.handleHello()
        }
    }
}

export default MessageParser;