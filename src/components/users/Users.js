import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  render() {
    const { loading, users } = this.props;

    if (!!loading) {
      return <h4>Loading...</h4>;
    }

    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
