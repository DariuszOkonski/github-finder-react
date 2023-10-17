import React from 'react';
import { useParams } from 'react-router-dom';
import User from './User';

const WrappedUser = (props) => {
  const { login } = useParams();

  return (
    <User
      user={props.user}
      repos={props.repos}
      loading={props.loading}
      getUser={props.getUser}
      login={login}
      getUserRepos={props.getUserRepos}
    />
  );
};

export default WrappedUser;
