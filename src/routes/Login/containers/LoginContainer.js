import { connect } from "react-redux";
import Login from "../components/Login";
import userActions from "actions/user";
import userSelectors from "selectors/user";

const mapStateToProps = state => {
  return {
    userWorking: userSelectors.workingSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userAuthenticate: accessToken => dispatch(userActions.userAuthenticate(accessToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

