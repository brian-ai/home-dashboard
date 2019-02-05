import React from 'react'
import { oneOf } from 'prop-types'
// Styles
import './styles.scss'

const Logo = ({ size = 'regular', color = 'blue' }) => (
  <div className={`icon-wrapper ${size}`}>
    <span className="icon-brian">
      <span className={`box ${color}`} />
      <span className={`top-bar ${color}`} />
      <span className={`brain--border ${color}`} />
      <span className={`brain--right-side ${color}`} />
      <span className={`brain--left-side ${color}`} />
      <span className={`brain--neurons-right ${color}`} />
      <span className={`brain--neurons-left ${color}`} />
    </span>
  </div>
)

Logo.propTypes = {
  size: oneOf(['small', 'big', 'regular'])
}

Logo.defaultProps = {
  size: 'regular'
}

export default Logo
