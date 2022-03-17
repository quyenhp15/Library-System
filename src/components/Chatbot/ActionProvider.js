// ActionProvider starter code
class ActionProvider {

  constructor(createChatBotMessage, setStateFunc,
    createClientMessage, stateRef,
    createCustomMessage, ...rest) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  handleHello = () => {
    const message = this.createChatBotMessage('HANDLER');
    this.setChatbotMess(message)
  }

  setChatbotMess = (message) => {
    this.setState(state => ({ ...state, messages: [...state.messages, message] }))
  }

}

export default ActionProvider;