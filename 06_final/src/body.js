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
    opacity: 0
  },
  {
    left: 0,
    opacity: 1
  }
]

const descriptionBoxSwipeOutKeyframes = [...descriptionBoxSwipeInKeyframes].reverse()

const imageBoxSwipeInKeyframes = [
  {
    top: '370px',
    opacity: 0
  },
  {
    top: 0,
    opacity: 1
  }
]

const imageBoxSwipeOutKeyframes = [...imageBoxSwipeInKeyframes].reverse()

const detailsBoxSwipeInKeyframes = [
  {
    right: '-370px',
    opacity: 0
  },
  {
    right: 0,
    opacity: 1
  }
]

const detailsBoxSwipeOutKeyframes = [...detailsBoxSwipeInKeyframes].reverse()

export const swipeIn = ({descriptionBox, imageBox, detailsBox, onFinish = NOOP}) => {
  
  const effects = [
    new KeyframeEffect(descriptionBox, descriptionBoxSwipeInKeyframes, TIMING),
    new KeyframeEffect(imageBox, imageBoxSwipeInKeyframes, TIMING),
    new KeyframeEffect(detailsBox, detailsBoxSwipeInKeyframes, TIMING)
  ]

  const sequence = new SequenceEffect(effects)

  const animation = new Animation(sequence, document.timeline)

  animation.onfinish = () => {
    onFinish()
  }

  animation.play()

  return animation
}

export const change = ({
    inDescriptionBox,
    inImageBox,
    inDetailsBox,
    outDescriptionBox,
    outImageBox,
    outDetailsBox,
    onFinish = NOOP}) => {

      console.log(detailsBoxSwipeInKeyframes)

  const effects = [
    new KeyframeEffect(outDescriptionBox, descriptionBoxSwipeOutKeyframes, TIMING),
    new KeyframeEffect(outImageBox, imageBoxSwipeOutKeyframes, TIMING),
    new KeyframeEffect(outDetailsBox, detailsBoxSwipeOutKeyframes, TIMING),
    new KeyframeEffect(inDescriptionBox, descriptionBoxSwipeInKeyframes, TIMING),
    new KeyframeEffect(inImageBox, imageBoxSwipeInKeyframes, TIMING),
    new KeyframeEffect(inDetailsBox, detailsBoxSwipeInKeyframes, TIMING)
  ]

  const sequence = new SequenceEffect(effects)

  const animation = new Animation(sequence, document.timeline)

  animation.onfinish = () => {
    onFinish()
  }

  animation.play()

  return animation
}
