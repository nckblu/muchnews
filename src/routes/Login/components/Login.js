import React from "react";
import Config from "config";
import GoogleLogin from "react-google-login";
import Button from "components/common/Button";
import {
	userAuthenticate,
} from "actions/user";

export class Login extends React.Component {

  responseGoogle(response) {
	  console.log(response);
	  console.log("dispatch now");
	  this.props.userAuthenticate(response.accessToken);
  }

  responseGoogleFail() {
    console.error("goog failed");
  }

  render() {
    return (
      <div className="Login">
        <div className="Login__inner">
          <h1 className="Login__heading">
            muchnews
          </h1>
          <div className="Login__button">
            <Button
              text="Login"
              sizeClass="small"
              colourClass="hollowWhite"
              onClick={() => this.handleLoginClick()}
            />
            <GoogleLogin
              clientId={Config.googleClientId}
              ref="googleButton"
              buttonText="Login"
              onSuccess={::this.responseGoogle}
              onFailure={::this.responseGoogleFail}
            />
          </div>
        </div>
      </div>
    );
  }

  handleLoginClick() {
    console.log("login click");
    this.refs.googleButton.click();
  }
}

export default Login;
