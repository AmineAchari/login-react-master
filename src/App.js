import "./App.css";
// import { Header, Container, Footer } from "./Components/index";
import React from "react";
// import { LoginFiled, LoginForm, SubmitButton } from "./Autentification";
import Users from "./Autentification/Users";
import SubmitButton from "./Autentification/SubmitButton";
import { observer } from "mobx-react";

class App extends React.Component {
  async componentDidMount() {
    try {
      let res = await fetch("/isloggedIn", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      let result = await res.json();

      if (result && result.success) {
        Users.loading = false;
        Users.isLoggedIn = true;
        Users.username = result.username;
      } else {
        Users.loading = false;
        Users.isLoggedIn = false;
      }
    } catch (e) {
      Users.loading = false;
      Users.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch("/Logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      let result = await res.json();

      if (result && result.success) {
        Users.isLoggedIn = false;
        Users.username = "";
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    if (Users.loading) {
      return (
        <>
          <div>loading ,please wait..</div>
        </>
      );
    } else {
      if (Users.isLoggedIn) {
        return (
          <>
            Welcome {Users.username}
            <SubmitButton
              text={"log out"}
              disabled={false}
              onclick={() => this.doLogout()}
            />
          </>
        );
      }
    }
    return <loginForm />;
  }
}

export default observer(App);
