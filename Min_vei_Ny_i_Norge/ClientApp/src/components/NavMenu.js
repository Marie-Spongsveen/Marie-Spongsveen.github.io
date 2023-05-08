import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logoBilde from '../bilder/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
    }

    languageAlert() {
        alert('Sorry, we only have english avaible right now, but in the future there will be more languages to choose from')
    }

    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
            <Navbar className="meny navbar-expand-sm navbar-toggleable-sm" container dark>
                <NavbarBrand tag={Link} to="/"><img src={logoBilde} alt="Logo for Norge.no" className="logo"></img></NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar}/>
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink className="changeLanguage" onClick={this.languageAlert} tabindex="0">
                                <p>Change language</p>
                            </NavLink>
                        </NavItem>
                    </ul>
                </Collapse>
            </Navbar>
            <div className="underBoks"></div>
      </header>
    );
  }
}