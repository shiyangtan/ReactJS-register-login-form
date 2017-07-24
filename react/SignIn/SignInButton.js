import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import SignInForm from './SignInForm';
import SignInProcess from './SignInProcess';

class SignInButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      signInFormDisplay: false,
      signInWaiting: false,
      signInWaitingDisplay: false,
      serverMessage: null
    };
  }

  signInProcessingDialogClose = () => {
    this.setState({
      signInWaitingDisplay: false,
      serverMessage: null
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

  onSignInFormSubmitted = () => {
    // create JSON to be submitted to server
    let jsonBody = JSON.stringify({
      username: this.state.username,
      password: this.state.password
    });

    let username = this.state.username;

    // clear local data and close sign in form
    this.setState({
      signInFormDisplay: false,
      password: '',
      username: ''
    });

    // show user that their request is currently in process
    this.setState({
      signInWaiting: true,
      signInWaitingDisplay: true,
    });

    // register user on server
    fetch('/signin', {
      method: 'POST',
      body: jsonBody,
      headers: {"Content-Type": "application/json"},
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        return response.json().then((error) => {
          throw error;
        });
      }
    })
    .then((data) => {
      this.setState({
        signInWaiting: false,
        serverMessage: data.message
      });
      console.log('Message is ' + data.message);
      this.props.onSignIn(username);
    })
    .catch((err) => {
      console.log('Error is: ' + err.error)
      this.setState({
        signInWaiting: false,
        serverMessage: err.error
      });
    });

  }

  openSignInForm = () => {
    this.setState({
      signInFormDisplay: true,
    });
  }

  closeSignInForm = () => {
    this.setState({
      signInFormDisplay: false,
      username: '',
      password: '',
    });
  }

  render() {
    return(
      <div>
        <FlatButton label="Sign in" onTouchTap={this.openSignInForm} />
        <SignInForm
          closeSignInForm={this.closeSignInForm}
          username={this.state.username}
          password={this.state.password}
          onSignInFormSubmitted={this.onSignInFormSubmitted}
          signInFormDisplay={this.state.signInFormDisplay}
          onUsernameEnter={this.onUsernameEnter}
          onPasswordEnter={this.onPasswordEnter}
        />
        <SignInProcess
          signInProcessingDialogClose={this.signInProcessingDialogClose}
          signInWaiting={this.state.signInWaiting}
          signInWaitingDisplay={this.state.signInWaitingDisplay}
          serverMessage={this.state.serverMessage}
        />
      </div>
    );
  }
}

export default SignInButton;
