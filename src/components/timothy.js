import React from 'react'

import PropTypes from 'prop-types'

import './timothy.css'

const Timothy = (props) => {
  return (
    <div className="timothy-container">
      <span className="test-css-class">{props.text}</span>
    </div>
  )
}

Timothy.defaultProps = {
  text: 'Text',
}

Timothy.propTypes = {
  text: PropTypes.string,
}

export default Timothy
