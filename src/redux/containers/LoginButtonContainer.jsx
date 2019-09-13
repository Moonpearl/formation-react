import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginButton from '../../components/LoginButton/LoginButton';

class LoginButtonContainer extends Component {
  render() {
    return (
      <LoginButton logged={this.props.logged} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('Store State =', state);
  return { logged: state.logged };
}

export default connect(mapStateToProps)(LoginButtonContainer);
