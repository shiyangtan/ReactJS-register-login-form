import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class ShowRegisteredUsersRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      censored: true,
    };
  }

  // double click on password to show or censor
  onPasswordDoubleClick = () => {
    this.setState({
      censored: !this.state.censored,
    });
  }

  render() {
    return (
      <TableRow key={this.props.username}>
        <TableRowColumn>{this.props.username}</TableRowColumn>
        <TableRowColumn
          onDoubleClick={this.onPasswordDoubleClick}
        >
          {
            this.state.censored ?
            this.props.password.replace(/./g, '*') : this.props.password
          }
        </TableRowColumn>
      </TableRow>
    );
  }
}

export default ShowRegisteredUsersRow;
