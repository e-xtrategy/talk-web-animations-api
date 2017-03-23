import React from 'react'

import ProgressBar from './ProgressBar'
import Snackbar from './Snackbar'
import Tabs from './Tabs'
import Tab from './Tab'

const BODY_STYLE = {
  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
}

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
      <div style={BODY_STYLE}>
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
            <h3>London</h3>
            <a title='By Diliff (Own work) [GFDL (http://www.gnu.org/copyleft/fdl.html), CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/) or CC BY 2.5 (http://creativecommons.org/licenses/by/2.5)], via Wikimedia Commons'
              href='https://commons.wikimedia.org/wiki/File%3AClock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg'>
              <img width='256' alt='Clock Tower - Palace of Westminster, London - May 2007' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg/256px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg' />
            </a>
            <p>Foto by Wikipedia</p>
          </Tab>
          <Tab title={'Paris'}>
            <h3>Paris</h3>
            <a title='By Tristan Nitot (standblog.org) [GFDL (http://www.gnu.org/copyleft/fdl.html), CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/) or CC BY-SA 2.5 (http://creativecommons.org/licenses/by-sa/2.5)], via Wikimedia Commons'
              href='https://commons.wikimedia.org/wiki/File%3ATour_eiffel_at_sunrise_from_the_trocadero.jpg'>
              <img width='256' alt='Tour eiffel at sunrise from the trocadero' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/256px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg' />
            </a>
            <p>Foto by Wikipedia</p>
          </Tab>
          <Tab title={'Tokyo'}>
            <h3>Tokyo</h3>
            <p>Tokyo is the capital of Japan.</p>
            <a title='By 東京太郎 (自身で撮影) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons' href='https://commons.wikimedia.org/wiki/File%3ATaroTokyo20110213-TokyoTower-01.jpg'>
              <img width='256' alt='TaroTokyo20110213-TokyoTower-01' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/TaroTokyo20110213-TokyoTower-01.jpg/256px-TaroTokyo20110213-TokyoTower-01.jpg' />
            </a>
            <p>Foto by Wikipedia</p>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
