import { Component, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUsers = async (text) => {
    this.setState({
      loading: true,
    });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data.items,
      loading: false,
    });
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type,
      },
    });

    setTimeout(() => {
      this.setState({
        alert: null,
      });
    }, 5000);
  };

  render() {
    const { users, loading } = this.state;

    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Routes>
              <Route
                path='/'
                element={
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={!!users.length}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                }
              />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
