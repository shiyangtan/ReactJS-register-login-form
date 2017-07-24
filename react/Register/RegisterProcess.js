import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class RegisterProcess extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.props.registrationProcessingDialogClose}
        disabled={this.props.registrationWaiting}
      />
    ];

    return (
      <Dialog
        title="Registration"
        actions={actions}
        model={true}
        open={this.props.registrationWaitingDisplay}
      >
        {this.props.registrationWaiting ? 'Please wait' : 'Registered successfully'}
      </Dialog>
    );
  }
}

export default RegisterProcess;
