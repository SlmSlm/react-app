const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are u?", likesCount: 0 },
    { id: 2, message: "Hi, it`s my first post", likesCount: 23 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText !== "") {
        let newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 0,
        };
        state.posts.unshift(newPost);
        state.newPostText = "";
        return state;
      } else {
        return state;
      }
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;