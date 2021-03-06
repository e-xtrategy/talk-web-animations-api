const DURATION = 250

const TIMING = {
  duration: DURATION,
  fill: 'forwards',
  ease: 'ease-out'
}

const descriptionBoxSwipeInKeyframes = [
  {
    marginLeft: '-30%',
    opacity: 0
  },
  {
    marginLeft: '0%',
    opacity: 1
  }
]

const descriptionBoxSwipeOutKeyframes = [...descriptionBoxSwipeInKeyframes].reverse()

const imageBoxSwipeInKeyframes = [
  {
    marginTop: '60%',
    opacity: 0
  },
  {
    marginTop: 0,
    opacity: 1
  }
]

const imageBoxSwipeOutKeyframes = [...imageBoxSwipeInKeyframes].reverse()

const detailsBoxSwipeInKeyframes = [
  {
    marginRight: '-30%',
    opacity: 0
  },
  {
    marginRight: 0,
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
    effects.push(new window.KeyframeEffect(outDescriptionBox, descriptionBoxSwipeOutKeyframes, TIMING))
  }

  if (outImageBox) {
    effects.push(new window.KeyframeEffect(outImageBox, imageBoxSwipeOutKeyframes, TIMING))
  }

  if (outDetailsBox) {
    effects.push(new window.KeyframeEffect(outDetailsBox, detailsBoxSwipeOutKeyframes, TIMING))
  }

  if (inDescriptionBox) {
    effects.push(new window.KeyframeEffect(inDescriptionBox, descriptionBoxSwipeInKeyframes, TIMING))
  }

  if (inImageBox) {
    effects.push(new window.KeyframeEffect(inImageBox, imageBoxSwipeInKeyframes, TIMING))
  }

  if (inDetailsBox) {
    effects.push(new window.KeyframeEffect(inDetailsBox, detailsBoxSwipeInKeyframes, TIMING))
  }

  return effects
}
