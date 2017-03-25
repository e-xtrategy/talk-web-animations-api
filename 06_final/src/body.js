const NOOP = () => {}
const DURATION = 250

const TIMING = {
  duration: DURATION,
  fill: 'forwards',
  ease: 'ease-out'
}

const descriptionBoxSwipeInKeyframes = [
  {
    left: '-370px',
    opacity: 0,
    display: 'none'
  },
  {
    left: '0',
    opacity: 1,
    display: 'block'
  }
]

const descriptionBoxSwipeOutKeyframes = [...descriptionBoxSwipeInKeyframes].reverse()

export const swipeOut = ({descriptionBox, centerBox, rightBox, onFinish = NOOP}) => {
  const descriptionBoxEffect = new KeyframeEffect(descriptionBox, descriptionBoxSwipeOutKeyframes, TIMING)

  const animation = new Animation(descriptionBoxEffect, document.timeline)

  animation.onfinish = () => {
    onFinish()
  }

  animation.play()

  return animation
}

export const swipeIn = ({descriptionBox, centerBox, rightBox, onFinish = NOOP}) => {
  const descriptionBoxEffect = new KeyframeEffect(descriptionBox, descriptionBoxSwipeInKeyframes, TIMING)

  const animation = new Animation(descriptionBoxEffect, document.timeline)

  animation.onfinish = () => {
    onFinish()
  }

  animation.play()

  return animation
}

export const change = ({
    inDescriptionBox,
    inCenterBox,
    inRightBox,
    outDescriptionBox,
    outCenterBox,
    outRightBox,
    onFinish = NOOP}) => {
  
  const effects = [
    new KeyframeEffect(outDescriptionBox, descriptionBoxSwipeOutKeyframes, TIMING),
    new KeyframeEffect(inDescriptionBox, descriptionBoxSwipeInKeyframes, TIMING)
  ]

  const sequence = new SequenceEffect(effects)

  const animation = new Animation(sequence, document.timeline)

  animation.onfinish = () => {
    onFinish()
  }

  animation.play()

  return animation
}
