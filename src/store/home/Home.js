import React, { useState } from 'react'
// UI Elements
import { Logo, Loader } from 'components/atoms'
import { Page } from 'components/layout'
// Styles
import './styles.scss'

const Home = ({
  baseContext: {
    config: { nav }
  }
}) => {
  const [isOpen = false, handleMenuIsOpen] = useState(false)

  return (
    <Page nav={nav} handleMenuToggle={handleMenuIsOpen} isMenuOpened={isOpen}>
      <Logo />
      <Loader />
    </Page>
  )
}

export default Home
