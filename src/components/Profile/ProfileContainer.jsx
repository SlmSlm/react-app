import React from "react";
import Profile from "./Profile";
// import * as axios from "axios";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 2;
    }
    this.props.getUserProfile(userID);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
