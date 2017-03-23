import React from 'react'

const SNACKBAR_STYLE = {
  opacity: 0,
  minWidth: '250px',
  marginLeft: '-125px',
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '2px',
  padding: '16px',
  position: 'fixed',
  left: '50%',
  bottom: '-30px'
}

const SHOW_KEYFRAMES = [
  {
    bottom: '-30px',
    opacity: 0
  },
  {
    bottom: '30px',
    opacity: 1
  }
]

const HIDE_KEYFRAMES = [...SHOW_KEYFRAMES].reverse()

export default class Snackbar extends React.Component {

  constructor (props) {
    super(props)
    this.snackbarStyle = Object.assign({}, SNACKBAR_STYLE, {
      opacity: props.show ? 1 : 0,
      bottom: props.show ? '30px' : '-30px'
    })
    this.snackbar = null
    this.snackbarVisible = props.show
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.show && !this.snackbarVisible) {
      this.show()
    }

    if (!nextProps.show && this.snackbarVisible) {
      this.hide()
    }
  }

  show () {
    const timing = {
      duration: this.props.animationDuration,
      fill: 'forwards',
      easing: 'ease-out'
    }

    const effect = new KeyframeEffect(this.snackbar, SHOW_KEYFRAMES, timing)

    const animation = new Animation(effect, document.timeline)

    animation.onfinish = () => {
      this.snackbarVisible = true
      setTimeout(() => {
        this.hide()
      }, this.props.hideTimeout)
    }

    animation.play()
  }

  hide () {
    const timing = {
      duration: this.props.animationDuration,
      fill: 'forwards',
      easing: 'ease-out'
    }

    const effect = new KeyframeEffect(this.snackbar, HIDE_KEYFRAMES, timing)

    const animation = new Animation(effect, document.timeline)

    animation.onfinish = () => {
      this.snackbarVisible = false
      this.props.onHide()
    }

    animation.play()
  }

  render () {
    return <div ref={snackbar => { this.snackbar = snackbar }} style={this.snackbarStyle}>{this.props.message}</div>
  }
}

Snackbar.propTypes = {
  show: React.PropTypes.bool.isRequired,
  message: React.PropTypes.string,
  animationDuration: React.PropTypes.number,
  hideTimeout: React.PropTypes.number,
  onHide: React.PropTypes.func
}

Snackbar.defaultProps = {
  animationDuration: 500,
  hideTimeout: 2000,
  onHide: () => {}
}
