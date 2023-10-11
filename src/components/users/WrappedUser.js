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

// https://api.github.com/search/users?q=bradtraversy&client_id=24d1361162793dfdd08a&client_secret=c0a5a07d3f54c776a5c1306a2c7a8b736915b9a8
// https://api.github.com/users/bradtraversy?client_id=24d1361162793dfdd08a&client_secret=c0a5a07d3f54c776a5c1306a2c7a8b736915b9a8
