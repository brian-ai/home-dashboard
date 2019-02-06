import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const Title = ({ content, className }) => (
  <Header className={className} as="h1">
    {content}
  </Header>
)

Title.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string
}

Title.defaultProps = {
  className: ''
}

export default Title
