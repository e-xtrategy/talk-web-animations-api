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
    new KeyframeEffect(topLeft, topLeftKeyframesForward, timing),
    new KeyframeEffect(topRight, topRightKeyframesForward, timing),
    new KeyframeEffect(bottomRight, bottomRightKeyframesForward, timing),
    new KeyframeEffect(bottomLeft, bottomLeftKeyframesForward, timing),
    new KeyframeEffect(bottomLeft, [...bottomLeftKeyframesForward].reverse(), timing),
    new KeyframeEffect(bottomRight, [...bottomRightKeyframesForward].reverse(), timing),
    new KeyframeEffect(topRight, [...topRightKeyframesForward].reverse(), timing),
    new KeyframeEffect(topLeft, [...topLeftKeyframesForward].reverse(), timing)
  ]

  const sequence = new SequenceEffect(effects)

  const animation = new Animation(sequence, document.timeline)

  return animation
}
