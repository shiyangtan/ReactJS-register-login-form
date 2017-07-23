import FlatButton from 'material-ui/FlatButton';
import React from 'react';

// define register, login, logout button

const RegisterLogInOut = (props) => {
  //username of current user
  const username = props.username;

  // handle register button click
  const handleRegisterButtonClick = props.handleRegisterButtonClick;

  // handle sign in button click
  const handleSignInButtonClick = props.handleSignInButtonClick;

  // handle sign out button click
  const handleSignOutButtonClick = props.handleSignOutButtonClick;

  // user has signed in
  if(username) {
    return (
      <div>
        <FlatButton
          label="Sign out"
          primary={true}
          onTouchTap={handleSignOutButtonClick}
        />
      </div>
    );
  } else {
    // user has signed out
    return (
      <div>
        <FlatButton
          label="Register"
          onTouchTap={handleRegisterButtonClick}
        />

        <FlatButton
          label="Sign in"
          primary={true}
          onTouchTap={handleSignInButtonClick}
        />
      </div>
    );
  }
};

export default RegisterLogInOut;
