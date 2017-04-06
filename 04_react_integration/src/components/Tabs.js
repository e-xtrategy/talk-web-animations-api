import React from 'react'
import ReactDOM from 'react-dom'
import { getShowKeyframes } from '../model/tabsKeyframes'

const TABLIST_STYLE = {
  overflow: 'hidden',
  border: '1px solid #ccc',
  backgroundColor: '#f1f1f1',
  height: '50px'
}

const TAB_LINK_STYLE = {
  float: 'left',
  display: 'block',
  color: 'black',
  textAlign: 'center',
  padding: '14px 16px',
  fontSize: '17px'
}

export default class Tabs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: props.activeIndex
    }
    this.tabNodes = []
  }

  getChildren () {
    return this.props.children.map((tab, index) => {
      return React.cloneElement(tab, {
        key: index,
        active: index === this.state.activeIndex,
        ref: tabNode => { this.tabNodes[index] = tabNode }
      })
    })
  }

  onHeaderClick (index) {
    if (index !== this.state.activeIndex) {
      this.animate(index, this.state.activeIndex)
      this.setState({
        activeIndex: index
      })
    }
  }

  animate (indexToShow, indextToHide) {
    const timing = {
      duration: this.props.animationDuration,
      fill: 'forwards',
      easing: 'ease-out'
    }

    const showKeyframes = getShowKeyframes(this.props.animationType)
    const hideKeyframes = [...showKeyframes].reverse()

    const sequenceEffects = [
      new KeyframeEffect(ReactDOM.findDOMNode(this.tabNodes[indextToHide]), hideKeyframes, timing),
      new KeyframeEffect(ReactDOM.findDOMNode(this.tabNodes[indexToShow]), showKeyframes, timing)
    ]

    const effect = new SequenceEffect(sequenceEffects)

    const animation = new Animation(effect, document.timeline)

    animation.onfinish = () => {
      this.props.onChange(indexToShow)
    }

    animation.play()
  }

  renderHeader (text, index) {
    const linkStyle = {}
    if (index === this.state.activeIndex) {
      linkStyle.backgroundColor = '#889FC9'
    }

    return <span className='tablinks' key={index} style={linkStyle} onClick={() => this.onHeaderClick(index)}>{text}</span>
  }

  render () {
    return (
      <div className='tabs'>
        <div className='tab'>
          {this.props.children.map((tab, index) => this.renderHeader(tab.props.title, index))}
          {this.getChildren()}
        </div>
      </div>
    )
  }
}

Tabs.propTypes = {
  activeIndex: React.PropTypes.number,
  animationType: React.PropTypes.string,
  animationDuration: React.PropTypes.number,
  onChange: React.PropTypes.func
}

Tabs.defaultProps = {
  activeIndex: 0,
  animationType: 'swipe-left',
  animationDuration: 150,
  onChange: () => {}
}
