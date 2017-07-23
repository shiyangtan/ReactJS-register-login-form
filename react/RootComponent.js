import React from 'react';
import NavigationBar from './NavigationBar';

// this is the root for all of the React components

class RootComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: null,
    };
  }

  handleSignInButtonClick = () => {
    console.log('Sign in button clicked');
    this.setState({
      username: 'James',
    });
  }

  handleSignOutButtonClick = () => {
    console.log('Sign out button clicked');
    this.setState({
      username: null,
    });
  }

  handleRegisterButtonClick = () => {
    console.log('Register button clicked');
  }

  render() {
    return (
      <NavigationBar
        username={this.state.username}
        handleRegisterButtonClick={this.handleRegisterButtonClick}
        handleSignInButtonClick={this.handleSignInButtonClick}
        handleSignOutButtonClick={this.handleSignOutButtonClick}
      />
    );
  }
}

export default RootComponent;
