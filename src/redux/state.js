let rerenderEntireTree = () => {
  console.log("State was changed");
};

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.unshift(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
