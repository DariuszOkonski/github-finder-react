import React from 'react';
import { useParams } from 'react-router-dom';
import User from './User';

const WrappedUser = (props) => {
  const { login } = useParams();

  return (
    <User
      user={props.user}
      loading={props.loading}
      getUser={props.getUser}
      login={login}
    />
  );
};

export default WrappedUser;
