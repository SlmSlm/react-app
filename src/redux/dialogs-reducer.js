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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let text = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: text }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
