import GreetUser from './GreetUser';
import RegisterLogInOut from './RegisterLogInOut';
import AppBar from 'material-ui/AppBar';
import React from 'react';

// define navigation bar with message to user and buttons
const NavigationBar = (props) => {

  // username of current user
  const username = props.username;

  // handle register button click
  const handleRegisterButtonClick = props.handleRegisterButtonClick;

  // handle sign in button click
  const handleSignInButtonClick = props.handleSignInButtonClick;

  // handle sign out button click
  const handleSignOutButtonClick = props.handleSignOutButtonClick;

  return (
    <AppBar
      title={<GreetUser username={username} />}
      iconElementRight={
        <RegisterLogInOut
          username={username}
          handleRegisterButtonClick={handleRegisterButtonClick}
          handleSignOutButtonClick={handleSignOutButtonClick}
          handleSignInButtonClick={handleSignInButtonClick}
        />
      }
      style={{
        backgroundColor: 'grey100',
      }}
      titleStyle={{
        color: 'grey500'
      }}
    />
  );
};

export default NavigationBar;
