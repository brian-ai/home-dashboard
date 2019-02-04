import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const Title = ({ content }) => <Header as="h1">{content}</Header>

Title.propTypes = {
  content: PropTypes.string.isRequired
}

export default Title
