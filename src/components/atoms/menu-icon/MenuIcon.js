import React from 'react'
// Styles
import './styles.scss'

const MenuIcon = ({ isOpen, onClick }) => (
  <div
    role="presentation"
    onClick={() => onClick(!isOpen)}
    className={`menu-icon ${isOpen ? 'open' : ''}`}
  >
    <span />
    <span />
    <span />
  </div>
)

export default MenuIcon
