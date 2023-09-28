import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;

    return (
      <div className='card text-center'>
        <img
          className='round-img'
          src={avatar_url}
          alt={login}
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a
            href={html_url}
            className='btn btn-dark btn-sm my-1'
            target='_blank'
            rel='noreferrer'
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
