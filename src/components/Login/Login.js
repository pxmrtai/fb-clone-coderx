import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Login() {
  const [state, dispacth] = useStateValue();
  const signIn = () => {
    //signin...

    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispacth({
          type: actionTypes.SET_USER,
          user: result.user,
        });

      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview-400x400.png"
          alt="fb-logo"
        />
        <img
          className="facebook__logoTag"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Facebook_Logo_%282015%29_light.svg/1280px-Facebook_Logo_%282015%29_light.svg.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
