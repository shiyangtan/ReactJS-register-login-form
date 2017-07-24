import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ShowRegisteredUsersRow from './ShowRegisteredUsersRow';

class ShowRegisteredUsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredUserList: [],
    };
  }

  componentDidMount(){
    fetch('/users', {
      method: 'GET',
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        registeredUserList: data.userRecord,
      });
    });
  }

  render() {
    this.state.registeredUserList.forEach((user) => {
      console.log('Username ' + user.username);
    });

    return (
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Username</TableHeaderColumn>
            <TableHeaderColumn>Password</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false}>
          {
            this.state.registeredUserList.map((user) => (
              <ShowRegisteredUsersRow
                username={user.username}
                password={user.password}
              />
            ))
          }
        </TableBody>
      </Table>
    );
  }
}

export default ShowRegisteredUsersTable;
