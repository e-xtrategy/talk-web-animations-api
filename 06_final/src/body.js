const NOOP = () => {}
const DURATION = 1000

const TIMING = {
  duration: DURATION,
  fill: 'forwards',
  ease: 'ease-out'
}

const descriptionBoxSwipeInKeyframes = [
  {
    position: 'relative',
    left: '-370px',
    opacity: 1
  },
  {
    position: 'relative',
    left: '0',
    opacity: 1
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
