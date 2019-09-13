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

  render() {
    const { name, onChange, value } = this.props;
    const { errorMessage } = this.state;

    return (
      <InputBlock>
        <label htmlFor={name}>{name}</label>
        <input
          name={name}
          type="text"
          value={value}
          onChange={onChange} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputBlock>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  onChange: PropTypes.func,
};

const validateEmail = (value) => {
  return value.match(/^[\w\.\-]+@[\w\.\-]+\.\w+$/);
}

class ContactForm extends Component {
  state = {
    lastName: '',
    firstName: '',
    email: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  handleTextInputChange = (event) => {
    // const { required, validate } = this.props;

    const value = event.target.value;

    // let errorMessage = '';

    // if (validate) {
    //   if (!validate(value)) {
    //     errorMessage = 'Le contenu du champ n\'est pas valide';
    //   }
    // }

    // if (required && value.length === 0) {
    //   errorMessage = 'Le champ ne doit pas être vide';
    // }

    this.setState({
      [event.target.name]: value,
      // errorMessage,
    });
  }

  render() {
    const { firstName, lastName, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput name="lastName" required value={lastName} onChange={this.handleTextInputChange} />
        <TextInput name="firstName" value={firstName} onChange={this.handleTextInputChange} />
        <TextInput name="email" value={email} validate={validateEmail} required onChange={this.handleTextInputChange} />
        <input type="submit" />
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
