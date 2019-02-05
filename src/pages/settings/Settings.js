import React, { useState } from 'react'
// UI Elements
import { Logo } from 'components/atoms'
import { Page } from 'components/layout'
// Styles
import './styles.scss'

const Settings = ({
  baseContext: {
    config: { nav }
  }
}) => {
  const [isOpen = false, handleMenuIsOpen] = useState(false)

  return (
    <Page nav={nav} handleMenuToggle={handleMenuIsOpen} isMenuOpened={isOpen}>
      <Logo />
      <span>Settings</span>
    </Page>
  )
}

export default Settings
