import React from 'react'
import { oneOf } from 'prop-types'
// Styles
import './styles.scss'

const Loader = ({ size }) => <div className={`brian-loader ${size}`} />

Loader.propTypes = {
  size: oneOf(['small', 'big', 'regular'])
}

Loader.defaultProps = {
  size: 'small'
}

export default Loader
