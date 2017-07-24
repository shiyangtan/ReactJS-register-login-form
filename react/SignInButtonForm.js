import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

// define Register button and registration form (dialog)

class SignInButtonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      username: '',
      password: '',
    };
  }

  // close the dialog
  handleClose = () => {
    this.setState({
      dialogOpen: false,
    });
  }

  // open the dialog
  handleOpen = () => {
    this.setState({
      dialogOpen: true,
    });
  }

  // user sign in
  onSignIn = () => {
    this.props.onSignIn(this.state.username);
    this.setState({
      dialogOpen: false,
    });
  }

  // get the username
  handleUsernameOnChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  // get the password
  handlePasswordOnChange = (e) => {
    this.setState({
        password: e.target.value,
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Sign in"
        primary={true}
        disabled={this.state.username.length < 5 || this.state.password.length < 5}
        onTouchTap={this.onSignIn}
      />
    ];

    return (
      <div>
        <FlatButton label="Sign in" onTouchTap={this.handleOpen} />

        <Dialog
          title="Sign in"
          actions={actions}
          model={true}
          open={this.state.dialogOpen}
        >

          <div>
            <TextField
              floatingLabelText="Username"
              onChange={(e) => this.handleUsernameOnChange(e)}
            /> <br />

            <TextField
              floatingLabelText="Password"
              type="password"
              onChange={(e) => this.handlePasswordOnChange(e)}
            /> <br />

          </div>

        </Dialog>
      </div>
    );
  }
}

export default SignInButtonForm;
