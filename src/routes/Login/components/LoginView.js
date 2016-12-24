import React from 'react';
import { connect } from "react-redux";
import GoogleLogin from 'react-google-login';
import Config from 'config';
import {
	userAuthenticate,
} from 'actions/user';

export class LoginView extends React.Component {

	responseGoogle(response) {
	  console.log(response);
	  console.log('dispatch now')
	  this.props.userAuthenticate(response.accessToken);	
	}

	responseGoogleFail() {
		console.error("goog failed")
	}

	render() {
		return (
			<GoogleLogin
			    clientId={Config.googleClientId}
			    buttonText="Login"
			    onSuccess={::this.responseGoogle}
			    onFailure={::this.responseGoogleFail}
			  />
		)
		
	}
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
  	userAuthenticate: (accessToken) => dispatch(userAuthenticate(accessToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);