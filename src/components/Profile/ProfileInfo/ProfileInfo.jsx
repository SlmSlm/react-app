import React, { useState } from "react";
import userPhoto from "../../../assets/images/user.jpg";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileDataForm from "./ProfileDataForm";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contacts}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Full name</b>:{profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts </b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(
        () => {
            setEditMode(false);
        }
    );
}

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          alt="ava"
          className={styles.mainPhoto}
        />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}

        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
