import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {LineBreak} from './LineBreak'

export default class SuperFooter extends Component {
  static propTypes = {
    lines: PropTypes.number,
    height: PropTypes.number,
    dynamic: PropTypes.bool
  }
  static default = {
    lines: 2
  }

  constructor(props) {
    super(props)
    this.state = {width: 0, height: window.innerHeight, lineBreaks: false}
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    const {
      lines,
      height,
      dynamic
    } = this.props

    if (dynamic) {
      this.setState({lineBreaks: this.renderDynamic()})
    } else {
      this.setState({lineBreaks: this.renderStatic(lines, height)})
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight})
  }

  render() {
    return (this.state.lineBreaks ? this.state.lineBreaks : null)
  }

  renderStatic(lines, height) {
    let result = []
    for (let i = 0; i <= lines; i++) {
      result.push(<LineBreak key={i} height={height ? height + 'px' : null}/>)
    }
    return result
  }

  renderDynamic() {
    let accumulatedHeight = 0
    let result = []
    let i = 0
    while (accumulatedHeight < this.state.height) {
      let random = Math.random() * 100
      result.push(<LineBreak key={i} height={random + 'px'}/>)
      i++
      accumulatedHeight += random
    }
    return result
  }
}
