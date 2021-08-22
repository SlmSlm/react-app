import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"newPostText"} component={"textarea"} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
