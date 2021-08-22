import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are u?", likesCount: 0 },
        { id: 2, message: "Hi, it`s my first post", likesCount: 23 },
      ],
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callsubscriber(this._state);
  },
};

export default store;
