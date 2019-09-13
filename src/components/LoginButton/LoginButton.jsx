import React, { Component } from 'react';
import store from '../../redux/store';

class LoginButton extends Component {
  handleClick = () => {
    const { logged } = this.props;

    store.dispatch({
      type: (logged ? 'LOG_OUT' : 'LOG_IN' ),
    });
  }

  render() {
    const { logged } = this.props;

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
