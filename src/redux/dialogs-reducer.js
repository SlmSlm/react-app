const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    case SEND_MESSAGE:
      let text = state.newMessageText;
      state.newMessageText = "";
      state.messages.unshift({ id: 7, message: text });
      return state;
    default:
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
