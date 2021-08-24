import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are u?", likesCount: 0 },
    { id: 2, message: "Hi, it`s my first post", likesCount: 23 },
  ],
};

it("length of posts sholud be incremented", () => {
  let action = addPostActionCreator("Hello");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it("message of newPost sholud be correct", () => {
  let action = addPostActionCreator("Hello");

  let newState = profileReducer(state, action);

  expect(newState.posts[0].message).toBe("Hello");
});

it("after deliting length of posts should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});
