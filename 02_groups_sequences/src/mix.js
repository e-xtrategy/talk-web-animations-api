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

  const timingForward = {
    duration: duration / 2,
    fill: 'forwards',
    easing: 'ease-in'
  }

  const timingBackward = {
    duration: duration / 2,
    fill: 'forwards',
    easing: 'ease-out'
  }

  const effects = [
    new GroupEffect([
      new KeyframeEffect(topLeft, topLeftKeyframesForward, timingForward),
      new KeyframeEffect(topRight, topRightKeyframesForward, timingForward),
      new KeyframeEffect(bottomRight, bottomRightKeyframesForward, timingForward),
      new KeyframeEffect(bottomLeft, bottomLeftKeyframesForward, timingForward)
    ]),
    new GroupEffect([
      new KeyframeEffect(bottomLeft, [...bottomLeftKeyframesForward].reverse(), timingBackward),
      new KeyframeEffect(bottomRight, [...bottomRightKeyframesForward].reverse(), timingBackward),
      new KeyframeEffect(topRight, [...topRightKeyframesForward].reverse(), timingBackward),
      new KeyframeEffect(topLeft, [...topLeftKeyframesForward].reverse(), timingBackward)
    ])
  ]

  const group = new SequenceEffect(effects)

  const animation = new Animation(group, document.timeline)

  return animation
}
