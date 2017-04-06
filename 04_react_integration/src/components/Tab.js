import React from 'react'

export default class Tab extends React.Component {
  constructor (props) {
    super(props)
    this.tabStyle = Object.assign({
      opacity: props.active ? 1 : 0
    })
  }

  render () {
    return (
      <div className='tabcontent' style={this.tabStyle}>
        {this.props.children}
      </div>
    )
  }
}

Tab.propTypes = {
  title: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool
}

Tab.defaultProps = {
  active: false
}
