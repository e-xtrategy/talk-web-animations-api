const element = document.querySelector('.square')

const ANIMATION_DURATION = 2000

let currentColor = 'red'
let animation = null

const timing = {
  duration: ANIMATION_DURATION,
  fill: 'forwards',
  easing: 'ease-in-out'
}

window.changeColor = color => {
  const keyframes = [
    {
      backgroundColor: currentColor
    },
    {
      backgroundColor: color
    }
  ]

  currentColor = color

  const effect = new KeyframeEffect(element, keyframes, timing)

  animation = new Animation(effect, document.timeline)

  animation.onfinish = () => {
    console.log(`the square is now ${color}`)
  }

  animation.play()
}
