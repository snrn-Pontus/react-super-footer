import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class LineBreak extends Component {
  static propTypes = {
    height: PropTypes.string
  }
  static default = {
    height: '14px'
  }

  render() {
    const {
      height
    } = this.props

    return (<br style={{lineHeight: height}}/>)
  }
}
