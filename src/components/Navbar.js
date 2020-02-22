import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'
import { CartButton } from './Button'
export default class Navbar extends Component {


  render() {
    return (
     <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
       <Link to='/'>
         <img src={logo} alt="Store" className="navbar-brand nav" />
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk  */}
       </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto uderline">
          <CartButton type="button" className="mr-2">
          <i className="material-icons">
            add_shopping_cart
          </i> <span>My cart</span>
          </CartButton>
        </Link>
     </Nav>
    )
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  margin-bottom: 5px;
  font-size: 1.3rem;
  .nav-link {
    text-transform: capitalize;
  }
`