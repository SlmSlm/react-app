import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;