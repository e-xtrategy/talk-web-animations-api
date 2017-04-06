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

    const effect = new window.KeyframeEffect(element, keyframes, timing)

    const animation = new window.Animation(effect, document.timeline)

    animation.play()
  }

  return {
    changeValue
  }
}
