import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

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
            <Navbar className="meny navbar-expand-sm navbar-toggleable-sm" container light>
                <NavbarBrand tag={Link} to="/"><p className="logoTekst">Min vei</p></NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink className="changeLanguage" onClick={this.languageAlert}>
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