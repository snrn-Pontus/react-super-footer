import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {LineBreak} from './LineBreak'

export default class SuperFooter extends Component {
  static propTypes = {
    numberOfLines: PropTypes.number
  }

  render() {
    const {
      numberOfLines
    } = this.props

    let result = []
    for (let i = 0; i < numberOfLines; i++) {
      result.push(<LineBreak />)
    }
    return result
  }
}
