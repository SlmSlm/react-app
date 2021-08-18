import React from "react";
import Preloader from "../../Common/Preloader/Preolader";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg" />
      </div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} alt="ava" />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
