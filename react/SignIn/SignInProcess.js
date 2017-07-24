import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class SignInProcess extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.props.signInProcessingDialogClose}
        disabled={this.props.signInWaiting}
      />
    ];

    return (
      <Dialog
        title="Sign in"
        actions={actions}
        model={true}
        open={this.props.signInWaitingDisplay}
      >
        {this.props.serverMessage ? this.props.serverMessage : 'Please wait'}
      </Dialog>
    );
  }
}

export default SignInProcess;
