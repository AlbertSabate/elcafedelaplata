import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import addEvent from '../../helpers/add-event'
import goTo from '../../helpers/go-to'

import './top-navbar.sass'

class TopNavbar extends Component {
  static menu = [
    {
      click: () => {
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      },
      label: 'HOME',
    }, {
      click: () => {
        goTo('about')
      },
      label: 'ABOUT',
    }, {
      click: () => {
        goTo('social')
      },
      label: 'SOCIAL',
    }, {
      click: () => {
        goTo('menu')
      },
      label: 'MENU',
    }, {
      click: () => {
        goTo('contact')
      },
      label: 'CONTACT',
    },
  ]

  constructor(props) {
    super(props);

    this.state = {
      isHome: true,
      isOpen: false,
    }
    this.navHeight = 0

    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    addEvent(window, 'scroll', () => {
      this.setState({
        isHome: window.scrollY <= 10,
      })
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const home = this.state.isHome ? 'navbar-home' : ''

    return (
      <Navbar role="navigation" dark fixed="top" expand="md" className={home}>
        <NavbarBrand href="/" className="brand">
          <span>el Café de la Plata</span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {TopNavbar.menu.map(child => (
              <NavItem key={`nav-dropdown-${child.label}`}>
                <NavLink onClick={child.click}>
                  {child.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default TopNavbar
