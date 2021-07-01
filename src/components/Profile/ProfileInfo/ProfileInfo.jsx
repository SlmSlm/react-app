import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg" />
      </div>
      <div className={style.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
