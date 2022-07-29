// import CodeMirror from '@uiw/react-codemirror';

import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import Loading from './components/Loading/Loading';
import { useAuth } from './context/AuthContext';
import Doctors from './pages/Doctors/Doctors';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import Profile from './pages/Profile/Profile';


const App = () => {
  const { isAuthenticated, login, logout, isLoading } = useAuth();

  const Logout = () => {
    logout();
    return null;
  }

  const Login = () => {
    useEffect(() => {
      login()
    }, [])
    return null
  }

  if(isLoading) {
    return <Loading />
  }

  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/doctors' element={isAuthenticated ? <Doctors /> : <Navigate to="/login"/>}></Route>
        <Route path='/posts' element={<Posts />}></Route>
        <Route path='/profile' element={isAuthenticated ? <Profile /> : <Navigate to="/login"/>}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
