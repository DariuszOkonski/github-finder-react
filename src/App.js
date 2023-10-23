import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert
              // alert={alert}
              />
              <Routes>
                <Route
                  path='/'
                  element={
                    <Fragment>
                      <Search
                      // setAlert={showAlert}
                      />
                      <Users />
                    </Fragment>
                  }
                />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
