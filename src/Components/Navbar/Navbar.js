import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import TokenService from '../../Service/TokenService';


export default class Navbar extends Component {

  handleLogout = () => {
    TokenService.clearAuthToken();
    this.props.history.push('/');
  }
 

  render() {
    return (
      <nav className='navbar bg-dark'>
        <h1 className='nav-logo-text'>
          <Link to='/'>Shopzilla</Link>
        </h1>
        <ul>
          <li>
            <Link to='/explore'>Explore</Link>
          </li>
          { !TokenService.hasAuthToken() &&
            <li>
              <Link to='/signup'>Register</Link>
            </li>
          }
          <li>
            {
              TokenService.hasAuthToken()
              ?
                <button 
                  className='link-btn'
                  onClick={()=>{this.handleLogout()}}
                >
                  Logout
                </button>
              : 
                <Link to='/login'>Login</Link>   
            }
          </li>
        </ul>
      </nav>
    );
  }
}
