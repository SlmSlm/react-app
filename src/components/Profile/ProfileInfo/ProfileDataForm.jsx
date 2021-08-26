import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../Common/FormsControls/FormsControls";

const ProfileDataForm = ({ profile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      <div>
        <b>Full name</b>: {createField("Full Name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>:{" "}
          {createField(
            "My professional skills",
            "lookingForAJobDescription",
            [],
            Textarea
          )}
        </div>
      )}
      <div>
        <b>About me</b>: {createField("About me", "aboutMe", [], Input)}
      </div>
      <div>
        <b>Contacts </b>:
        {Object.keys(profile.contacts).map((key) => {
          //   return (
          //     <Contact
          //       key={key}
          //       contactTitle={key}
          //       contactValue={profile.contacts[key]}
          //     />
          //   );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
