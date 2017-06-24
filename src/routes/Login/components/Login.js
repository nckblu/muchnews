import React from "react";
import Config from "config";
import GoogleLogin from "react-google-login";
import Button from "components/common/Button";
import ReactDOM from "react-dom";

export class Login extends React.Component {

  responseGoogle(response) {
	  console.log(response);
	  console.log("dispatch now");
	  this.props.userAuthenticate(response.accessToken);
  }

  responseGoogleFail(t) {
    console.error("goog failed", t);
  }

  render() {
    const { userWorking } = this.props;
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
              working={userWorking}
              colourClass="hollowWhite"
              onClick={() => this.handleLoginClick()}
            />
            <div className="Login__googleLogin">
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
      </div>
    );
  }

  handleLoginClick() {
    console.log("login click");
    ReactDOM.findDOMNode(this.refs.googleButton).click();
  }
}

export default Login;
