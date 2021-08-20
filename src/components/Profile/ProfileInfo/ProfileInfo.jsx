import React from "react";
import Preloader from "../../Common/Preloader/Preolader";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus.jsx";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img
          src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"
          alt="background-img"
        />
      </div> */}
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} alt="ava" />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
