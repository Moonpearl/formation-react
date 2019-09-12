import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Layout } from '../../components';

const InputBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1em;
`;

const ErrorMessage = styled.div`
  font-size: .75em;
  color: darkred;
`;

class TextInput extends Component {
  state = {
    value: '',
    errorMessage: '',
  }

  handleChange = (event) => {
    const { required, validate } = this.props;

    const value = event.target.value;

    let errorMessage = '';

    if (validate) {
      if (!validate(value)) {
        errorMessage = 'Le contenu du champ n\'est pas valide';
      }
    }

    if (required && value.length === 0) {
      errorMessage = 'Le champ ne doit pas être vide';
    }

    this.setState({
      value,
      errorMessage,
    });
  }

  render() {
    const { name } = this.props;
    const { value, errorMessage } = this.state;

    return (
      <InputBlock>
        <label htmlFor={name}>{name}</label>
        <input
          name={name}
          type="text"
          value={value}
          onChange={this.handleChange} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputBlock>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

const validateEmail = (value) => {
  return value.match(/^[\w\.\-]+@[\w\.\-]+\.\w+$/);
}

class ContactForm extends Component {
  render() {
    return (
      <form>
        <TextInput name="lastName" required />
        <TextInput name="firstName" />
        <TextInput name="email" validate={validateEmail} required />
      </form>
    );
  }
} 

const Contact = () =>
  <Layout>
    <h1>Contactez-moi!</h1>
    <ContactForm />
  </Layout>
;

export default Contact;
