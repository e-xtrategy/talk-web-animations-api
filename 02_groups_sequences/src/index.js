import group from './group'
import sequence from './sequence'
import mix from './mix'

const topLeft = document.querySelector('.square.top-left')
const topRight = document.querySelector('.square.top-right')
const bottomLeft = document.querySelector('.square.bottom-left')
const bottomRight = document.querySelector('.square.bottom-right')

let animation

const ANIMATION_DURATION = 4000

window.pause = () => {
  animation.pause()
}

window.faster = () => {
  animation.playbackRate *= 2
}

window.slower = () => {
  animation.playbackRate /= 2
}

const range = document.querySelector('#range')

range.addEventListener('input', () => {
  if (animation.playState === 'paused') {
    animation.currentTime = range.value
  }
}, false)

window.play = () => {
  animation.play()
}

window.group = () => {
  animation = group(topLeft, topRight, bottomLeft, bottomRight, ANIMATION_DURATION)
  animation.play()
}

window.sequence = () => {
  animation = sequence(topLeft, topRight, bottomLeft, bottomRight, ANIMATION_DURATION)
  animation.play()
}

window.mix = () => {
  animation = mix(topLeft, topRight, bottomLeft, bottomRight, ANIMATION_DURATION)
  animation.play()
}

