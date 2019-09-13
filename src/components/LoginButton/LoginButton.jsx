import React, { Component, Fragment } from 'react';

class LoginButton extends Component {
  state = {
    username: '',
  }

  // sendLogin = () => {
  //   const { dispatch } = this.props;
  //   const { username } = this.state;

  //   dispatch(loginAction(username));
  // }

  // sendLogout = () => {
  //   const { dispatch } = this.props;

  //   dispatch(logoutAction());
  // }

  handleUsernameChanged = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    const { logged, login, logout } = this.props;
    const { username } = this.state;

    return (
      <Fragment>
        { logged ?
          <button onClick={logout}>
            Se déconnecter
          </button>
        :
          <div>
            <input type="text" value={username} onChange={this.handleUsernameChanged} />
            <button onClick={() => login(username)}>
              Se connecter
            </button>
          </div>
        }
      </Fragment>
    );
  }
}

export default LoginButton;
