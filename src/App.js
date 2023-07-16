import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import List from './components/List';
import Login from './components/Login';
import './App.css';

function App() {
  const [token, setToken] = useState('');
  const [searchQuery, setSearchQuery] = useState('tracks');
  const [searchLength, setSearchLength] = useState('short_term')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)
  }, [])

  if (token === '') {
    return (
      <Login />
    )
  }

  return (
    <div className="App">
      <Navbar setToken = {setToken} setSearchQuery = {setSearchQuery} isLoading = {isLoading} setSearchLength = {setSearchLength} searchLength = {searchLength} />
      <List token = {token} searchQuery = {searchQuery} setIsLoading = {setIsLoading} searchLength = {searchLength} />
    </div>
  );
}

export default App;