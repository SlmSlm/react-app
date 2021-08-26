import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          alt="ava"
          className={styles.mainPhoto}
        />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
