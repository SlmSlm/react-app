const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are u?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Hello" },
    { id: 5, message: "Hola" },
    { id: 6, message: "Guten Morgen!" },
  ],
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Katya" },
    { id: 4, name: "Dasha" },
    { id: 5, name: "Irka" },
    { id: 6, name: "Sasha" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState , action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:{
      let stateCopy = {...state};
      stateCopy.newMessageText = action.newMessage;
      return stateCopy;
    }case SEND_MESSAGE:{
      let stateCopy = {...state}
      let text = stateCopy.newMessageText;
      stateCopy.newMessageText = "";
      stateCopy.messages.unshift({ id: 7, message: text });
      return stateCopy;
    }default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageTextCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: message,
});

export default dialogsReducer;
