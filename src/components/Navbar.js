import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaCheck } from 'react-icons/fa';
import { BsFilterRight } from 'react-icons/bs';

function Navbar(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    props.setToken('');
  };

  const handleDropdownClick = (searchLength) => {
    props.setSearchLength(searchLength);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="Navbar">
      {screenWidth < 768 ? (
        <button className="Bar-button" onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}>
          <FaBars />
        </button>
      ) : (
        <div className="Navbar-left">
          <button className="Navbar-button" onClick={() => props.setSearchQuery('artists')}>
            Artists
          </button>
          <button className="Navbar-button" onClick={() => props.setSearchQuery('tracks')}>
            Songs
          </button>
          <button className="Navbar-button" onClick={() => props.setSearchQuery('recommendations')}>
            Recommendations
          </button>
          {props.isLoading && <div className="loading-circle"></div>}
        </div>
      )}

      {isMenuDropdownOpen && (
        <div className={`Navbar-menu-dropdown ${isMenuDropdownOpen ? 'open' : ''}`}>
          <div className="Navbar-menu-dropdown-content">
            <button className="Navbar-button" onClick={() => { props.setSearchQuery('artists') }}>
              Artists
            </button>
            <button className="Navbar-button" onClick={() => { props.setSearchQuery('tracks') }}>
              Songs
            </button>
            <button className="Navbar-button" onClick={() => { props.setSearchQuery('recommendations') }}>
              Recommendations
            </button>
          </div>
        </div>
      )}

      <div className="Navbar-right">
        <div className={`Navbar-dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <button className="Navbar-filter-button" onClick={toggleDropdown}>
            <BsFilterRight />
          </button>
          <div className="Navbar-dropdown-content">
            <button className="Navbar-dropdown-button" onClick={() => handleDropdownClick('short_term')}>
              Short Term
              {props.searchLength === 'short_term' && <FaCheck className="Navbar-dropdown-checkmark" />}
            </button>
            <button className="Navbar-dropdown-button" onClick={() => handleDropdownClick('medium_term')}>
              Medium Term
              {props.searchLength === 'medium_term' && <FaCheck className="Navbar-dropdown-checkmark" />}
            </button>
            <button className="Navbar-dropdown-button" onClick={() => handleDropdownClick('long_term')}>
              Long Term
              {props.searchLength === 'long_term' && <FaCheck className="Navbar-dropdown-checkmark" />}
            </button>
          </div>
        </div>
        <button className="Navbar-login-button" onClick={logout}>
          Log Out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
