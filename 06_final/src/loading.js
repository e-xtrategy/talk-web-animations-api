const NOOP = () => {}
const DURATION = 1000

const TIMING = {
  duration: DURATION,
  fill: 'forwards',
  ease: 'ease-out'
}

const fadeOutKeyframes = [
  {
    opacity: 1
  },
  {
    opacity: 0
  }
]

export default (loading, cb = NOOP) => {
  const effect = new window.KeyframeEffect(loading, fadeOutKeyframes, TIMING)

  const animation = new window.Animation(effect, document.timeline)

  animation.onfinish = () => {
    loading.style.display = 'none'
    cb()
  }

  animation.play()

  return animation
}
