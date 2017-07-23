import React from 'react';

// define navigation bar
const GreetUser = (props) => {
  // username of current user
  const username = props.username;

  // user has signed in
  if(username) {
    return <span>Hello, {username}!</span>;
  } else {
    // user has signed out
    return <span>Welcome guest. Please log in.</span>;
  }
};

export default GreetUser;
