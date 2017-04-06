import React from 'react'

import ProgressBar from './ProgressBar'
import Snackbar from './Snackbar'
import Tabs from './Tabs'
import Tab from './Tab'
import TokyoTab from './TokyoTab'
import LondonTab from './LondonTab'
import ParisTab from './ParisTab'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      animationDuration: 250,
      progressValue: 0,
      messageValue: '',
      showSnackbar: false,
      tabsAnimationType: 'swipe-left'
    }
  }

  onChangeAnimationDuration (event) {
    this.setState({
      animationDuration: parseInt(event.target.value)
    })
  }

  onChangeProgressValue (event) {
    this.setState({
      progressValue: event.target.value
    })
  }

  onChangeMessageValue (event) {
    this.setState({
      messageValue: event.target.value
    })
  }

  showSnackbar () {
    this.setState({
      showSnackbar: true
    })
  }

  onSnackbarHide () {
    this.setState({
      showSnackbar: false
    })
    console.log('snackbar closed')
  }

  onChangeTabsAnimationType (event) {
    this.setState({
      tabsAnimationType: event.target.value
    })
  }

  render () {
    return (
      <div>
        <h1>Animations Speed</h1>
        <input type='range' min='250' max='2000' value={this.state.animationDuration} onChange={event => this.onChangeAnimationDuration(event)} /> {this.state.animationDuration} ms
        <h1>Progress Bar</h1>
        <input type='number' min='0' max='100' placeholder='Insert Progress value...' value={this.state.progressValue} onChange={event => this.onChangeProgressValue(event)} />
        <ProgressBar value={parseInt(this.state.progressValue)} animationDuration={this.state.animationDuration} />
        <h1>Snackbar</h1>
        <button type='button' onClick={() => this.showSnackbar()} disabled={this.state.showSnackbar}>Show</button>
        <input type='text' id='message' placeholder='Insert a message...' value={this.state.messageValue} onChange={event => this.onChangeMessageValue(event)} />
        <Snackbar message={this.state.messageValue} show={this.state.showSnackbar} onHide={() => this.onSnackbarHide()} animationDuration={this.state.animationDuration} />
        <h1>Tabs</h1>
        <select value={this.state.tabsAnimationType} onChange={event => this.onChangeTabsAnimationType(event)}>
          <option value='swipe-left'>Swipe Left</option>
          <option value='swipe-right'>Swipe Right</option>
          <option value='zoom'>Zoom</option>
          <option value='flip'>Flip</option>
          <option value='rotate'>Rotate</option>
        </select>
        <Tabs animationType={this.state.tabsAnimationType} animationDuration={this.state.animationDuration}>
          <Tab title={'London'}>
            <LondonTab />
          </Tab>
          <Tab title={'Paris'}>
            <ParisTab />
          </Tab>
          <Tab title={'Tokyo'}>
            <TokyoTab />
          </Tab>
        </Tabs>
      </div>
    )
  }
}
