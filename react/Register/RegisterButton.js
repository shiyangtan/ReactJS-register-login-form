import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RegistrationForm from './RegistrationForm';
import RegisterProcess from './RegisterProcess';

class RegisterButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      registrationFormDisplay: false,
      registrationWaiting: false,
      registrationWaitingDisplay: false
    };
  }

  registrationProcessingDialogClose = () => {
    this.setState({
      registrationWaitingDisplay: false
    });
  }

  onUsernameEnter = (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  onPasswordEnter = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  onRegistrationFormSubmitted = () => {
    // create JSON to be submitted to server
    let jsonBody = JSON.stringify({
      username: this.state.username,
      password: this.state.password
    });

    // clear local data and close registration form
    this.setState({
      registrationFormDisplay: false,
      username: '',
      password: '',
    });

    // show user that their request is currently in process
    this.setState({
      registrationWaiting: true,
      registrationWaitingDisplay: true,
    });

    // register user on server
    fetch('/register', {
      method: 'POST',
      body: jsonBody,
      headers: {"Content-Type": "application/json"},
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      this.setState({
        registrationWaiting: false
      });
      console.log(data.message);
    })
    .catch((err) => {
      console.log(err);
    });

  }

  openRegistrationForm = () => {
    this.setState({
      registrationFormDisplay: true,
    });
  }

  closeRegistrationForm = () => {
    this.setState({
      registrationFormDisplay: false,
      username: '',
      password: '',
    });
  }

  render() {
    return(
      <div>
        <FlatButton label="Register" onTouchTap={this.openRegistrationForm} />
        <RegistrationForm
          closeRegistrationForm={this.closeRegistrationForm}
          username={this.state.username}
          password={this.state.password}
          onRegistrationFormSubmitted={this.onRegistrationFormSubmitted}
          registrationFormDisplay={this.state.registrationFormDisplay}
          onUsernameEnter={this.onUsernameEnter}
          onPasswordEnter={this.onPasswordEnter}
        />
        <RegisterProcess
          registrationProcessingDialogClose={this.registrationProcessingDialogClose}
          registrationWaiting={this.state.registrationWaiting}
          registrationWaitingDisplay={this.state.registrationWaitingDisplay}
        />
      </div>
    );
  }
}

export default RegisterButton;
