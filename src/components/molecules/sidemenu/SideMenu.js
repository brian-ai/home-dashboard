import React from 'react'
import { Link } from 'react-router-dom'
// UI Elements
import { MenuIcon } from 'components/atoms'
// Styles
import './styles.scss'

const SideMenu = ({
  items = [],
  isOpen,
  handleMenuToggle,
  activeItem = 'providers'
}) => (
  <div className={`brian--side-nav ${isOpen ? 'open' : 'collapsed'}`}>
    <MenuIcon onClick={() => handleMenuToggle(!isOpen)} isOpen={isOpen} />
    <ul className={`brian--nav ${isOpen ? 'show' : 'hide'}`}>
      {items.map(item => (
        <li
          className={`brian--nav-item ${
            activeItem === item.value ? 'active' : ''
          }`}
        >
          <Link to={item.path}>{item.text}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default SideMenu
