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
	  this.props.userAuthenticate();	
	}

	render() {
		return (
			<GoogleLogin
			    clientId={Config.googleClientId}
			    buttonText="Login"
			    onSuccess={::this.responseGoogle}
			    onFailure={::this.responseGoogle}
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
  	userAuthenticate: () => dispatch(userAuthenticate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);