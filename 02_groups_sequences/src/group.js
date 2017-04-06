export default (topLeft, topRight, bottomLeft, bottomRight, duration) => {
  const topLeftKeyframes = [
    {
      top: 0,
      left: 0
    },
    {
      top: window.getComputedStyle(bottomRight).top,
      left: window.getComputedStyle(bottomRight).left
    },
    {
      top: 0,
      left: 0
    }
  ]

  const topRightKeyframes = [
    {
      top: 0,
      right: 0
    },
    {
      top: window.getComputedStyle(bottomLeft).top,
      right: window.getComputedStyle(bottomLeft).right
    },
    {
      top: 0,
      right: 0
    }
  ]

  const bottomLeftKeyframes = [
    {
      bottom: 0,
      left: 0
    },
    {
      bottom: window.getComputedStyle(topRight).bottom,
      left: window.getComputedStyle(topRight).left
    },
    {
      bottom: 0,
      left: 0
    }
  ]

  const bottomRightKeyframes = [
    {
      bottom: 0,
      right: 0
    },
    {
      bottom: window.getComputedStyle(topLeft).bottom,
      right: window.getComputedStyle(topLeft).right
    },
    {
      bottom: 0,
      right: 0
    }
  ]

  const timing = {
    duration: duration,
    fill: 'forwards',
    easing: 'ease'
  }

  const effects = [
    new window.KeyframeEffect(topLeft, topLeftKeyframes, timing),
    new window.KeyframeEffect(topRight, topRightKeyframes, timing),
    new window.KeyframeEffect(bottomLeft, bottomLeftKeyframes, timing),
    new window.KeyframeEffect(bottomRight, bottomRightKeyframes, timing)
  ]

  const group = new window.GroupEffect(effects)

  const animation = new window.Animation(group, document.timeline)

  return animation
}
