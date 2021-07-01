import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://oper.ru/static/data/gallery/l1048753984.jpg" />
      {props.message}
      <div>
      <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
