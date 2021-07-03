const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.unshift(newPost);
      this._state.profilePage.newPostText = "";
      this._callsubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callsubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: "ADD-POST",
});

export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});
export default store;
