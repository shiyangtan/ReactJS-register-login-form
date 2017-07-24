import React from 'react';
import NavigationBar from './NavigationBar';
import ShowRegisteredUsersTable from './ShowRegisteredUsersTable';

// this is the root for all of the React components

class RootComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: null,
    };
  }

  // user sign in
  onSignIn = (e) => {
    this.setState({
      username: e
    });
    console.log(this.state.username);
  }

  // user sign out
  onSignOut = () => {
    this.setState({
      username: null
    });
  }

  render() {
    return (
      <div>
        <NavigationBar
          username={this.state.username}
          onSignIn={this.onSignIn}
          onSignOut={this.onSignOut}
        />
        {
          this.state.username ?
          <ShowRegisteredUsersTable /> : <p>Sign in to see registered users</p>
        }
      </div>

    );
  }
}

export default RootComponent;
