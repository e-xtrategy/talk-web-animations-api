export default element => {
  const animationDuration = element.dataset.animationDuration ? parseInt(element.dataset.animationDuration) : 500

  const timing = {
    duration: animationDuration,
    fill: 'forwards',
    easing: 'ease-out'
  }

  const changeValue = value => {
    const keyframes = [
      {
        width: window.getComputedStyle(element).width
      },
      {
        width: `${value}%`
      }
    ]

    const effect = new KeyframeEffect(element, keyframes, timing)

    const animation = new Animation(effect, document.timeline)

    animation.play()
  }

  return {
    changeValue
  }
}
