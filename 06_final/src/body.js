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

export default ({
    inDescriptionBox,
    inImageBox,
    inDetailsBox,
    outDescriptionBox,
    outImageBox,
    outDetailsBox}) => {
  const effects = []
  if (outDescriptionBox) {
    effects.push(new KeyframeEffect(outDescriptionBox, descriptionBoxSwipeOutKeyframes, TIMING))
  }

  if (outImageBox) {
    effects.push(new KeyframeEffect(outImageBox, imageBoxSwipeOutKeyframes, TIMING))
  }

  if (outDetailsBox) {
    effects.push(new KeyframeEffect(outDetailsBox, detailsBoxSwipeOutKeyframes, TIMING))
  }

  if (inDescriptionBox) {
    effects.push(new KeyframeEffect(inDescriptionBox, descriptionBoxSwipeInKeyframes, TIMING))
  }

  if (inImageBox) {
    effects.push(new KeyframeEffect(inImageBox, imageBoxSwipeInKeyframes, TIMING))
  }

  if (inDetailsBox) {
    effects.push(new KeyframeEffect(inDetailsBox, detailsBoxSwipeInKeyframes, TIMING))
  }

  return effects
}
