import React, { useState } from 'react'
// UI Elements
import { Logo } from 'components/atoms'
import { Page } from 'components/layout'
// Styles
import './styles.scss'

const Providers = ({
  baseContext: {
    config: { nav }
  }
}) => {
  const [isOpen = false, handleMenuIsOpen] = useState(false)

  return (
    <Page nav={nav} handleMenuToggle={handleMenuIsOpen} isMenuOpened={isOpen}>
      <Logo />
      <span>Providers</span>
    </Page>
  )
}

export default Providers
