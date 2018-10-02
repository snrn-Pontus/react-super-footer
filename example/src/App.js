import React, {Component} from 'react'

import SuperFooter from 'react-super-footer'
import Footer from './Footer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {content: false}
  }

  componentDidMount() {
    this.getContent()
  }

  render() {
    return (
      <div>
        Hello
        {this.state.content
          ? <div style={{'height': '500px'}}>{this.state.content}</div>
          : <SuperFooter lines={50} height={14} dynamic={true}/>}
        <Footer/>
      </div>
    )
  }

  getContent = () => {
    setTimeout(() => {
      this.setState({content: 'content'})
    }, 3000)
  }
}
