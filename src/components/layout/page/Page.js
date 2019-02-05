import React from 'react'
// UI Elements
import { SideMenu } from 'components/molecules'
// Styles
import './styles.scss'

const Page = ({ nav, children, isMenuOpened, handleMenuToggle }) => {
  return (
    <div className="brian--layout">
      <SideMenu
        items={nav}
        isOpen={isMenuOpened}
        handleMenuToggle={handleMenuToggle}
      />
      <div className="brian-hub">{children}</div>
    </div>
  )
}

export default Page
