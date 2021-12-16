import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {auth} from '../../firebase/firebase.utils.js'
import {signOut} from 'firebase/auth';
const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container"to="/">
      <img class="logo" src="/thumbnail.jpg" alt="logo" />
     {/* <h1 className='logo-text'>rama coffee house</h1> */}
    </Link>
    <div className="items">
      <div className= "links-btn">
      <Link className= 'option' to='/'> <FontAwesomeIcon icon={faHome} /></Link>
        <Link className="option" to="/menu">
          menu
        </Link>
        <Link className="option" to="/contact us">
          contact us
        </Link>
        
      {currentUser ? (
        <Link className='option' to='/' onClick={() => signOut(auth)}>
          sign out
        </Link>
      ) : (
        <Link className='option' to='/signin'>
          sign in
        </Link>
      )}
      <Link className= 'option' to='/'> <FontAwesomeIcon icon={faShoppingCart} /></Link>
      </div>
    </div>
  </div>
);
export default Header;