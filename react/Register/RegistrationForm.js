import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class RegistrationForm extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.props.closeRegistrationForm}
      />,
      <FlatButton
        label="Register"
        primary={true}
        disabled={this.props.username.length < 5 || this.props.password.length < 5}
        onTouchTap={this.props.onRegistrationFormSubmitted}
      />
    ];

    return (
      <Dialog
        title="Register"
        actions={actions}
        model={true}
        open={this.props.registrationFormDisplay}
      >

        <div>
          <TextField
            floatingLabelText="Username"
            onChange={(e) => this.props.onUsernameEnter(e)}
          /> <br />

          <TextField
            floatingLabelText="Password"
            type="password"
            onChange={(e) => this.props.onPasswordEnter(e)}
          />
        </div>
      </Dialog>
    );
  }
}

export default RegistrationForm;
