const NOOP = () => {}
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

export const fadeIn = ({toFadeIn}) => {
  const fadeInEffect = new KeyframeEffect(toFadeIn, fadeInKeyframes, TIMING)

  const animation = new Animation(fadeInEffect, document.timeline)

  animation.play()

  return animation
}

export const change = ({toFadeIn, toFadeOut}) => {
  const effects = [
    new KeyframeEffect(toFadeOut, fadeOutKeyframes, TIMING),
    new KeyframeEffect(toFadeIn, fadeInKeyframes, TIMING)
  ]

  const sequence = new SequenceEffect(effects)

  const animation = new Animation(sequence, document.timeline)

  animation.play()

  return animation
}
