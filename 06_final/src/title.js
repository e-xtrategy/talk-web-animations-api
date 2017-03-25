const DURATION = 250

const TIMING = {
  duration: DURATION,
  fill: 'forwards',
  ease: 'ease-out'
}

const fadeInKeyframes = [
  {
    opacity: 0
  },
  {
    opacity: 1
  }
]

const fadeOutKeyframes = [...fadeInKeyframes].reverse()

export default ({toFadeIn, toFadeOut}) => {
  const effects = []

  if (toFadeOut) {
    effects.push(new KeyframeEffect(toFadeOut, fadeOutKeyframes, TIMING))
  }

  if (toFadeIn) {
    effects.push(new KeyframeEffect(toFadeIn, fadeInKeyframes, TIMING))
  }

  return effects
}
