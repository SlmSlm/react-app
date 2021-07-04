const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are u?", likesCount: 0 },
        { id: 2, message: "Hi, it`s my first post", likesCount: 23 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
  },
  _callsubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callsubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      if (this._state.profilePage.newPostText !== "") {
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = "";
        this._callsubscriber(this._state);
      }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callsubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callsubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let text = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.messages.unshift({ id: 7, message: text });
      console.log(this._state.dialogsPage.messages);
      this._state.dialogsPage.newMessageText = "";
      this._callsubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageTextCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: message,
});
export default store;
