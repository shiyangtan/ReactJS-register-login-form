import GreetUser from './GreetUser';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/ToolBar';
import React from 'react';
import RegisterButton from './Register/RegisterButton';
import SignInButton from './SignIn/SignInButton';
import FlatButton from 'material-ui/FlatButton';

// define navigation bar with message to user and buttons
const NavigationBar = (props) => {
  // current log in user
  const username = props.username;

  // event triggered when user sign in
  const onSignIn = props.onSignIn;

  // event triggered when user sign out
  const onSignOut = props.onSignOut;

  return (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text={<GreetUser username={username} />} />
      </ToolbarGroup>

      {
        username ?
        (// user is currently sign in
          <ToolbarGroup>
            <FlatButton label="Sign out" onTouchTap={onSignOut} />
          </ToolbarGroup>
        ) :
        ( // user has logged out
          <ToolbarGroup>
            <RegisterButton />
            <SignInButton onSignIn={onSignIn} />
          </ToolbarGroup>
        )
      }
    </Toolbar>
  );
};

export default NavigationBar;
