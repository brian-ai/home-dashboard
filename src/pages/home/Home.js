import React, { useState } from 'react'
// UI Elements
import { Title } from 'components/atoms'
import { Page } from 'components/layout'
// Styles
import './styles.scss'

const Home = ({
  baseContext: {
    config: { nav }
  }
}) => {
  const [isOpen, handleMenuIsOpen] = useState(false)

  return (
    <Page nav={nav} handleMenuToggle={handleMenuIsOpen} isMenuOpened={isOpen}>
      <div className="dashboard-content">
        <div className="dashboard-content overlay" />
        <div className="dashboard--items">
          <Title content="Your home" className="whitesmoke" />
          <Title content="Devices" className="whitesmoke" />
          <Title content="Ambients" className="whitesmoke" />
        </div>
      </div>
    </Page>
  )
}

export default Home
