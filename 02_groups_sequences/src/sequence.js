export default (topLeft, topRight, bottomLeft, bottomRight, duration) => {
  const topLeftKeyframesForward = [
    {
      top: 0,
      left: 0
    },
    {
      top: window.getComputedStyle(topRight).top,
      left: window.getComputedStyle(topRight).left
    }
  ]

  const topRightKeyframesForward = [
    {
      top: 0,
      right: 0
    },
    {
      top: window.getComputedStyle(bottomRight).top,
      right: window.getComputedStyle(bottomRight).right
    }
  ]

  const bottomRightKeyframesForward = [
    {
      bottom: 0,
      right: 0
    },
    {
      bottom: window.getComputedStyle(bottomLeft).bottom,
      right: window.getComputedStyle(bottomLeft).right
    }
  ]

  const bottomLeftKeyframesForward = [
    {
      bottom: 0,
      left: 0
    },
    {
      bottom: window.getComputedStyle(topLeft).bottom,
      left: window.getComputedStyle(topLeft).left
    }
  ]

  const timing = {
    duration: duration / 8,
    fill: 'forwards',
    easing: 'ease'
  }

  const effects = [
    new window.KeyframeEffect(topLeft, topLeftKeyframesForward, timing),
    new window.KeyframeEffect(topRight, topRightKeyframesForward, timing),
    new window.KeyframeEffect(bottomRight, bottomRightKeyframesForward, timing),
    new window.KeyframeEffect(bottomLeft, bottomLeftKeyframesForward, timing),
    new window.KeyframeEffect(bottomLeft, [...bottomLeftKeyframesForward].reverse(), timing),
    new window.KeyframeEffect(bottomRight, [...bottomRightKeyframesForward].reverse(), timing),
    new window.KeyframeEffect(topRight, [...topRightKeyframesForward].reverse(), timing),
    new window.KeyframeEffect(topLeft, [...topLeftKeyframesForward].reverse(), timing)
  ]

  const sequence = new window.SequenceEffect(effects)

  const animation = new window.Animation(sequence, document.timeline)

  return animation
}
