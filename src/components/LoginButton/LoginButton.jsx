import React, { Component } from 'react';

class LoginButton extends Component {
  state = {
    logged: false,
  };

  handleClick = () => {
    const { logged } = this.state;

    this.setState({
      logged: !logged,
    });
  }

  render() {
    const { logged } = this.state;

    return (
      <button onClick={this.handleClick}>
        { logged ?
          'Se déconnecter'
        :
          'Se connecter'
        }
      </button>
    );
  }
}

export default LoginButton;
