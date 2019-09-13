import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginButton from '../../components/LoginButton/LoginButton';

class LoginButtonContainer extends Component {
  render() {
    console.log(this.props);

    return (
      <LoginButton {...this.props} />
    );
  }
}

const logoutAction = () => ({ type: 'LOG_OUT' });
const loginAction = (username) => ({ type: 'LOG_IN', username });

function mapStateToProps(state, ownProps) {
  return { logged: state.logged };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutAction()),
    login: (username) => dispatch(loginAction(username)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButtonContainer);
