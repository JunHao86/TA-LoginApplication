import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading'; 
import Login from './components/Login';
import Welcome from './components/Welcome';
import PageNotFound from './components/PageNotFound';
import Manager from './components/Manager';

function App() {
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const username = localStorage.getItem('username');
    console.log('Username from localStorage:', username);

    axios
      .get(`http://localhost:8080/user/${username}`)
      .then((response) => {
        console.log('AppResp:',response)
        const role = response.data.role;
        setUserRole(role);
      })
      .catch((error) => {
        console.error(`Error fetching user data: ${error}`);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false after fetching user data
      });
  }, []);

  const isManager = (userRole && userRole.toLowerCase() === 'manager');

  return (
    <div className="App">
      {isLoading ? (
        <Loading /> // Render the loading component while isLoading is true
      ) : (
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          {isManager ? (
            <Route path="/manager" element={<Manager />} />
          ) : null}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      )}
    </div>
  );
}

export default App;