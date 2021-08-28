import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/Common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import { withSuspense } from "./hoc/withSuspense";
import { initializeApp } from "./redux/app-reducer";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("OOOOPSYK");
    // console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            {/* <Route exact path="/" render={withSuspense(ProfileContainer)} /> */}
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route
              path="/profile/:userID?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="*" render={() => <div>Oooops</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SamuraiJSApp;
